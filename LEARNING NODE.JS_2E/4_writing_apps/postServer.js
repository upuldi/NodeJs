var http = require('http');


function handle_requests(request, response) {
  console.log("Request " + request.method + " URL " + request.url);

  /**
  * This is how you use streams in node
  * You are gurenteed to get readable and end events with streams..
  */

  var jsonData ="";

  request.on("readable", () => {
    // Data comes here comes as chunks
    var data = request.read();
    // Reading the data to json data variable
    if (typeof data == "string") {
      jsonData += data;
    } else if (typeof data == "object" && data instanceof Buffer) {
      jsonData += data.toString("utf-8");
    }

  });

  request.on("end", () => {

    var output = "";
    if (!jsonData || jsonData.length == 0) {
      output = "There is no JSON data";
    } else {
      var jsonObj;
      try {
        jsonObj = JSON.parse(jsonData);
      } catch(e) { }

      if (!jsonObj) {
        output = "Invalid JSON..";
      } else {
        output = "valid JSON " + jsonData;
      }
      response.end(output);
    }

  });

}





var server = http.createServer(handle_requests);
server.listen(8080);
