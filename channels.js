var f = "";
var g = null;
const proxyu = "bfapwmmjrm9kpzg8eb4.herokuapp.com/";
var prefix = "tube.connect.cafe";
const channelURL = "https://"+proxyu+"https://"+prefix+"/api/v1/channels/UChFur_NwVSbUozOcF_F2kMg/videos?page=1";
const myHeaders = new Headers();
myHeaders.append('Accept', 'https://diamond6416.github.io/*');
fetch (channelURL, 
  {method: 'GET',
  headers: myHeaders})
.then (response0 => response0)
.then (rJSON0 => rJSON0.json())
.then (function(z){
  for (j = 0; j < 20; j++) {

    g = z[j];

    var vidId = g.videoId;
    var ti = g.title;

    f += '\n<div class=\"item\">\n<a class=\"activator\" onclick=\"load(\'' + vidId + '\')\">\n<div class=\"channel0\">\n<img src=\"https://i.ytimg.com/vi/' + vidId + '/hqdefault.jpg\"/>\n</div>\n<div class=\"sm-txt\">\n<h3>' + ti + '</h3>\n</div>\n</a>\n</div>\n</div>\n';
  }
  document.getElementById("container").innerHTML = f;});