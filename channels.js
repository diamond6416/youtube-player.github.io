var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var o = JSON.parse(this.responseText);
    var foo = o.items;
    var i = 0;
    f="";
    for (i = 0; i<32; i++){
    y = foo[i];
    a = y.id;
    b = y.snippet;
    vidId = a.videoId;
    ti = b.title;

    f = `${f}
<div class="item">
<a onclick="load(${vidId});return false">
<div class="channel0">
<img src="https://i.ytimg.com/vi/${vidId}/hqdefault.jpg"/>
</div>
<div class="sm-txt">
<h3>${ti}</h3>
</div>
</a>
</div>
</div>
`;
    }
    document.getElementById("container").innerHTML = f;
    
    
  }
};

xmlhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCAe6KKwsLoObsKMNLutxo0O1Ho-nKSVDU&channelId=UChFur_NwVSbUozOcF_F2kMg&part=snippet,id&order=date&maxResults=20", true);
xmlhttp.send();
