var http = require("http"),
  fs = require("fs"),
  path = require("path"),
  url = require("url");


function readDirAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, handler) => {
      if (error) {
        reject(error)
      } else {
        //Do I really need this else block.
        resolve(handler);
      }
    });
  });
}

function loadAlbums() {

  return new Promise((resolve, reject) => {

    readDirAsync("albums").then((handler) => {

      var onlyAlbumsArray = [];
      var iterator = (index) => {
        if (index == handler.length) {
          resolve(onlyAlbumsArray);
          return;
        }

        var currentIteratingAlbumPath = "albums/" + handler[index];
        fs.stat(currentIteratingAlbumPath, (error, status) => {
          if (error) {
            reject(error);
          }
          if (status.isDirectory()) {
            onlyAlbumsArray.push(handler[index]);
          }
          iterator(index + 1);
        });
      }
      //since iterator is a function and it does nothing by itself, you have to call it
      iterator(0);

    }, (error) => {
      console.log("Error occurred when reading the dir...");
      reject(error);
    });
  });



}

function loadPhotosFromAlbum(albumName, callback) {

  var albumPath = "albums/" + albumName;
  fs.readdir(albumPath, (errors, files) => {

    if (errors != null) {
      callback(errors, null);
      return;
    }
    callback(null, files);
  });
}


function handle_incoming_requests(request, response) {

  console.log("Request method : " + request.method + " URL " + request.url);

  var PHOTO_REQUEST_REG_EX = new RegExp("/albums/.*/Photos")
  var url = request.url;

  if (request.method.toLowerCase() == "get") {

    // .../content/* 
    if (url.substring(0, 9) == "/content/") {
      serveStaticFile("content", url.substring(9), response);
    }
    //pages
    else if (url.substring(0, 7) == "/pages/") {
      servePages(request, response);
    }
    //templates
    else if (url.substring(0, 11) == "/templates/") {
      serveStaticFile("templates", url.substring(9), response)
    }
    //albums json
    else if (url == '/albums') {
      returnAlbums(response);
    }
    // /albums/*/Photos json 
    else if (PHOTO_REQUEST_REG_EX.test(url)) {
      var albumInInterest = url.split('/')[2];
      returnPhotos(albumInInterest, response);
    } else {

      returnError({
        error: "not found",
        message: "unknown request url : " + url + " received.."
      }, response, 404);
    }

  } else {

    returnError({
      error: "not supporting",
      message: "requested method : " + request.method + " is not supported."
    }, response, 404);
  }
}

function servePages(request, response) {

  var coreUrl = url.parse(request.url).path;
  var partsArray = coreUrl.split("/");
  var pageName = partsArray[2]; // as what we need is what after /pages/.... for ex /pages/home.html  ["","pages","home.html"] 


  console.log("Requested page name is : " + pageName);

  var readStream = fs.createReadStream("basic.html");

  var readContent = ""
  readStream.on("readable", () => {

    var stringData = "";
    var data = readStream.read();

    if (data) {
      if (typeof data == "string") {
        stringData = data;
      } else if (typeof data == "object" && data instanceof Buffer) {
        stringData = data.toString("utf-8");
      }
      readContent += data;
    }
  });

  readStream.on("end", () => {
    readContent = readContent.replace("{{PAGE_NAME}}", pageName);
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write(readContent);
    response.end()
  });

  readStream.on("error", (error) => {
    var errorObj = {
      error: "Error occurred when creating the page dyanamically",
      description: JSON.stringify(error)
    }
    returnError(errorObj, response, 501);
  });
}

function serveStaticFile(dirName, fileName, response) {

  console.log(" Serving file name : " + fileName);

  //Set content type and header params
  var contentType = calculateContentType(fileName);
  response.writeHead(200, {
    "Content-Type": contentType
  });

  var fileReadStream = fs.createReadStream(dirName + "/" + fileName);

  fileReadStream.pipe(response);

  fileReadStream.on("error", (e) => {
    var out = {
      error: "File not found - " + fileName,
      description: ""
    };
    returnError(out, response, 501);
  });

}

function calculateContentType(fileName) {
  var extName = path.extname(fileName);
  switch (extName) {
    case ".js": return "application/javascript"
    case ".html": return "text/html"
    case ".css": return "text/css";
    case ".jpg": case ".jpeg": return "image/jpeg"
    default: return "text/plain";
  }
}

function returnPhotos(album, response) {

  loadPhotosFromAlbum(album, (error, photos) => {
    if (error != null) {
      returnError({
        code: "cant load photos",
        message: error.message
      }, response, 404);
    } else {
      returnData({
        photos: photos
      }, response);
    }
  })
}

/**
 * this function passes a callback to load albums method
 */
function returnAlbums(response) {

  loadAlbums().then((data) => {
    returnData({
      albums: data
    }, response);
  }, (error) => {
    if (error) {
      returnError({
        code: "cant load albums",
        message: error.message
      }, response, 404);
    }
  });

}

function returnError(errorObj, response, responseCode) {

  response.writeHead(responseCode, {
    'Content-Type': 'application/json'
  });

  response.end(JSON.stringify({
    error: errorObj,
    data: null
  }));
}

function returnData(dataObj, res) {
  // there is an error
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({
    error: null,
    data: dataObj
  }));
}

var server = http.createServer(handle_incoming_requests);
server.listen(8080);