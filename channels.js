var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var foo = JSON.parse(this.responseText);
    var i = 0;
    f="";
    for (i = 0; i<32; i++){
    y = foo[i];
    f = `${f}
<div class="item">
<a onclick="load(${y.videoId});return false">
<div class="channel0">
<img src="https://i.ytimg.com/vi/${y.videoId}/hqdefault.jpg"/>
</div>
<div class="sm-txt">
<h3>${y.title}</h3>
</div>
</a>
</div>
</div>
`;
    }
    document.getElementById("container").innerHTML = f;
    
    
  }
};

xmlhttp.open("GET", "https://tube.connect.cafe/api/v1/channels/UChFur_NwVSbUozOcF_F2kMg/videos?page=1", true);
//xmlhttp.setRequestHeader('Access-Control-Allow-Origin', 'https://https://tube.connect.cafe/');
//xmlhttp.setRequestHeader('referer', 'https://https://tube.connect.cafe/');
xmlhttp.send();
