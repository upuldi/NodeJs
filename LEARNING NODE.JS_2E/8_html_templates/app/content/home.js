$(function () {

    var template; // template
    var templateData = {}; // data feed to the template

    var initPage = function () {

        //load HTML template
        $.get("/templates/home.html", function (data) {
            template = data;
        })

        //load server JSON
        $.getJSON("/albums", function (d) {
            $.extend(templateData, d.data);
        });

        //When the AJAX calls are completed only we render the html.
        $(document).ajaxStop(function () {
            var renderedPage = Mustache.to_html(template, messageAlbumsList(templateData));
            $("body").html(renderedPage);
        });

    }(); //Self exeuting function.




});


function messageAlbumsList(data) {

    if (data.albums && data.albums.length > 0) {
        data.has_albums = true;
    } else {
        data.has_albums = false;
    }
    return data;
}