var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var foo = JSON.parse(this.responseText);
    var i = 0;
    for (i = 0; i<32; i++){
    y = foo[i];
    f+="\n<div class=\"item\">\n<a href=\"load("+y.videoId+")\">\n<div class=\"channel0\">\n<img src=\"https://i.ytimg.com/vi/"+y.videoId+"/hqdefault.jpg\"/>\n</div>\n<div class=\"sm-txt\">\n<h3>"+y.title+"</h3>\n</div>\n</a>\n</div>\n</div>\n";
    }
    document.getElementById("container").innerHTML = f;
    console.log(f);
    
    
    
  }
};

xmlhttp.open("GET", "https://invidious.snopyta.org/api/v1/channels/UChFur_NwVSbUozOcF_F2kMg/videos?page=1", true);
xmlhttp.send();