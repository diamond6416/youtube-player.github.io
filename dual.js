var myvideo = document.getElementById("myvideo");
    var myaudio = document.getElementById("myaudio");

    var change_time_state = true;

    myvideo.onplay = function(){
        myvideo.oncanplay = function() {
        myaudio.play();
        if(change_time_state){
            myaudio.currentTime = myvideo.currentTime;
            change_time_state = false;
        }
    }
    }

    myvideo.onpause = function(){
        myaudio.pause();
        change_time_state = true;
    }