var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var foo = JSON.parse(this.responseText);
    x = foo.info;
    list = new Array(-1, -1, -1, -1, -1, -1);
    
    
    for (i = 0; i<21; i++){
    y = x.formats[i];
    if ((y.ext=="webm") && (y.format_note=="1080p")){list[0]=i;}
    else if ((y.ext=="webm") && (y.format_note=="1080p60")){list[1]=i;}
    else if ((y.ext=="mp4") && (y.format_note=="1080p")){list[2]=i;}
    else if ((y.ext=="mp4") && (y.format_note=="1080p60")){list[3]=i;}
    else if ((y.ext=="webm") && (y.format_note=="720p")){list[4]=i;}
    else if ((y.ext=="webm") && (y.format_note=="720p60")){list[5]=i;}
    }
    
    
    if (list[0]>=0){f=x.formats[list[0]].url;}
    else if (list[1]>=0){f=x.formats[list[1]].url;}
    else if (list[2]>=0){f=x.formats[list[2]].url;}
    else if (list[3]>=0){f=x.formats[list[3]].url;}
    else if (list[4]>=0){f=x.formats[list[4]].url;}
    else if (list[5]>=0){f=x.formats[list[5]].url;}
    
    console.log(f);

    t = "<video class=\"myvideo\" id=\"myvideo\" controls muted>\n<source src=\""+f+"/>\n<audio id=\"myaudio\">\n<source src=\""+auUrl+"\"/>\n</audio>\n</video>";
    document.getElementById("sample").innerHTML = t;
    //document.getElementById("myvideo").src = f;
  }
};
function load(a){
auUrl = "https://main163ey8y3y713183134jfn24u.herokuapp.com/api/play?url=https://www.youtube.com/watch?v="+a+"&format=bestaudio";
//document.getElementById("myaudio").src = auUrl;
var vidUrl = "https://main163ey8y3y713183134jfn24u.herokuapp.com/api/info?url=https://www.youtube.com/watch?v="+a;
xmlhttp.open("GET", vidUrl, true);
//xmlhttp.setRequestHeader("Origin", "https://heroku.app/");
xmlhttp.send();
}