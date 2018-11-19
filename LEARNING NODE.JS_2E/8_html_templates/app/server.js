var http = require("http"),
  fs = require('fs');

function loadAlbums(callback) {

  fs.readdir("albums", (error, handler) => {

    if (error != null) {
      callback(error);
    } else {

      // need to filter out files
      var onlyAlbumsArray = [];

      //Setting up a iterator
      //iterator is a function.
      var iterator = (index) => {

        //Do this if the current index is the end of the collection
        if (index == handler.length) {
          callback(null, onlyAlbumsArray);
          return;
        }

        //else do this for all the iterations
        var currentIteratingAlbumPath = "albums/" + handler[index];
        fs.stat(currentIteratingAlbumPath, (error, status) => {

          if (error) {
            callback(error);
          }

          //fs.stat can be used to check whether a file is a folder or a file
          if (status.isDirectory()) {
            onlyAlbumsArray.push(handler[index]);
          }
          //call the next element, this has to happen inside the callback
          iterator(index + 1);
        });

      }
      //since iterator is a function and it does nothing by itself, you have to call it
      iterator(0);
    }
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

    ///content/* 
    if (url.substring(0, 9) == "/content/") {
      serveStaticFile(url.substring(9), response);
    }
    //albums json
    else if (url == '/albums') {
      handleLoadAlbums(response);
    }
    // /albums/*/Photos json 
    else if (PHOTO_REQUEST_REG_EX.test(url)) {
      var albumInInterest = url.split('/')[2];
      handleLoadPhotos(albumInInterest, response);
    } else {
      
      returnError({
        error: "not found",
        message: "unknown request url : " + url + " received.."
      }, res, 404);

    }

  } else {

    returnError({
      error: "not supporting",
      message: "requested method : " + request.method + " is not supported."
    }, response, 404);
  }
}



function handleLoadPhotos(album, response) {

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
function handleLoadAlbums(response) {
  loadAlbums((error, albums) => {
    if (error != null) {
      returnError({
        code: "cant load albums",
        message: error.message
      }, response, 404);
    } else {
      returnData({
        albums: albums
      }, response);
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
