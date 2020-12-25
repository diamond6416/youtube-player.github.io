const video = document.getElementById('myvideo');
const vsource = document.getElementById('svideo');
const audio = document.getElementById('myaudio');
const asource = document.getElementById('saudio');
var vExt = "";
var bool = true;
var fallbackvid = false;
var l = 21;
var f = '';
var vidURL = '';
async function load(a){
video.pause();
const auURL = "https://mz8pri1hgfmas0rsq5x.herokuapp.com/api/play?url=https://www.youtube.com/watch?v="+a+"&format=bestaudio";
const vidUrlS = "https://mz8pri1hgfmas0rsq5x.herokuapp.com/api/info?url=https://www.youtube.com/watch?v="+a+"&flatten=True";

fetch (vidUrlS)
.then (response => response)
.then (rJSON => rJSON.json())
.then (function(foo){


var x = foo.videos[0];

    list = new Array(-1, -1, -1, -1, -1, -1);
    
    
    for (i = 0; (i<l && bool); i++){
    
   
    if ( typeof x.formats[i] === 'undefined' || x.formats[i] === null ){
      bool = false;
    }

  else {
    var y = x.formats[i];
    if ((y.ext=="webm") && (y.format_note=="1080p")){list[0]=i;}
    else if ((y.ext=="webm") && (y.format_note=="1080p60")){list[1]=i;}
    else if ((y.ext=="mp4") && (y.format_note=="1080p")){list[2]=i;}
    else if ((y.ext=="mp4") && (y.format_note=="1080p60")){list[3]=i;}
    else if ((y.ext=="webm") && (y.format_note=="720p")){list[4]=i;}
    else if ((y.ext=="webm") && (y.format_note=="720p60")){list[5]=i;}
    
  }
    }
    if (list[3]>=0){var f=x.formats[list[3]]; vExt = "mp4";}
    
    else {fallbackvid = true;}
    if (fallbackvid){
      vidURL = "https://mz8pri1hgfmas0rsq5x.herokuapp.com/api/play?url=https://www.youtube.com/watch?v="+a+"&format=bestvideo";
    }
    else {vidURL = f.url;}
    

    

    vsource.src = vidURL;
    asource.src = auURL;
    

    video.load();
    audio.load();
    video.play();
  }
);
  }