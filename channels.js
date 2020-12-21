var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var z = JSON.parse(this.responseText);

    var f = "";
    var j = 0;
    for (j = 0; j < 20; j++) {

      g = z[j];

      vidId = g.videoId;
      ti = g.title;

      f += "\n<div class=\"item\">\n<a href=\"javascript:load(\'" + vidId + "\')\">\n<div class=\"channel0\">\n<img src=\"https://i.ytimg.com/vi/" + vidId + "/hqdefault.jpg\"/>\n</div>\n<div class=\"sm-txt\">\n<h3>" + ti + "</h3>\n</div>\n</a>\n</div>\n</div>\n";
    }
    document.getElementById("container").innerHTML = f;
    


  }
};

xmlhttp.open("GET", "https://invidiou.site/api/v1/channels/UChFur_NwVSbUozOcF_F2kMg/videos?page=1", true);
//xmlhttp.setRequestHeader("Origin", "https://heroku.app/");
xmlhttp.send();
