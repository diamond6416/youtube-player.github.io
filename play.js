bool = true;
fallbackvid = false;
l = 21;
function load(a){
let auURL = "https://mz8pri1hgfmas0rsq5x.herokuapp.com/api/play?url=https://www.youtube.com/watch?v="+a+"&format=bestaudio";
let vidUrlS = "https://mz8pri1hgfmas0rsq5x.herokuapp.com/api/info?url=https://www.youtube.com/watch?v="+a+"&flatten=True";

fetch (vidUrlS)
.then (response => response)
.then (rJSON => rJSON.json())
.then (function(foo){


x = foo.videos[0];

    list = new Array(-1, -1, -1, -1, -1, -1);
    
    
    for (i = 0; (i<l && bool); i++){
    
   
    if ( typeof x.formats[i] === 'undefined' || x.formats[i] === null ){
      bool = false;
    }

  else {
    y = x.formats[i];
    if ((y.ext=="webm") && (y.format_note=="1080p")){list[0]=i;}
    else if ((y.ext=="webm") && (y.format_note=="1080p60")){list[1]=i;}
    else if ((y.ext=="mp4") && (y.format_note=="1080p")){list[2]=i;}
    else if ((y.ext=="mp4") && (y.format_note=="1080p60")){list[3]=i;}
    else if ((y.ext=="webm") && (y.format_note=="720p")){list[4]=i;}
    else if ((y.ext=="webm") && (y.format_note=="720p60")){list[5]=i;}
    else {fallbackvid = true;}
  }
    }
    if (fallbackvid){vidURL= "https://mz8pri1hgfmas0rsq5x.herokuapp.com/api/play?url=https://www.youtube.com/watch?v="+a+"&format=bestvideo";}
    else {
    if (list[0]>=0){f=x.formats[list[0]];}
    else if (list[1]>=0){f=x.formats[list[1]];}
    else if (list[2]>=0){f=x.formats[list[2]];}
    else if (list[3]>=0){f=x.formats[list[3]];}
    else if (list[4]>=0){f=x.formats[list[4]];}
    else if (list[5]>=0){f=x.formats[list[5]];}
    vidURL = f.url;
    }

    video = document.getElementById('myvideo');
    vsource = document.getElementById('svideo');
    
    asource = document.getElementById('saudio');

    vsource.src = vidURL;
    asource.src = auURL;

    video.load();
    video.play();
  }
);
  }