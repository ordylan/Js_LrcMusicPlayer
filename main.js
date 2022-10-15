/*  
<audio id="audio" src="#" controls loop="loop" autoplay="autoplay"></audio>
<p id="lrcup1"></p>
<p id="lrc"></p>
<p id="lrcdown1"></p>
*/

var a = document.getElementById("audio");//your audio tag
var textarray = '[00:00.00] first 1 {[(n)]}[00:00.01] second 2';// your lrc Remember to change the "line feed" to {[(n)]}

function changeTimeFormat(e) {
            e = e.replace("[", "");
            e = e.replace("]", "");
            var time = e.split('.')[0].split(':'), s;

            if (time.length == 3) {
                s = time[0] * 3600 + time[1] * 60 + time[2] * 100 / 100;
            } else if (time.length == 2) {
                s = time[0] * 60 + time[1] * 100 / 100;
            }
            s += e.split('.')[1] / 100;
            return s;
        }

textarray = textarray.split("{[(n)]}");
var thist;var thisl;var thisp;var lrcjson = [];
for(i=0; i<textarray.length; i++) {
    thist = textarray[i].substring(1,9);
    thisl = textarray[i].slice(10);//thisl = '"'+thisl+'"';
    thisp = {"time":changeTimeFormat(thist),"lrc":thisl};
    lrcjson = lrcjson.concat(thisp);
}

function dianjihhhhgeci(e) {
   document.getElementById("audio").currentTime = e ;
}

a.ontimeupdate=function(e) {
    for(i=0;i<lrcjson.length;i++) {
        if (audio.currentTime > lrcjson[i].time) {
            if(i>1&&i<lrcjson.length-1){
              document.getElementById('lrcup1').innerHTML='<a href="javascript:void(0);" onclick="dianjihhhhgeci('+lrcjson[i-1].time+');" id="lrcup1">'+lrcjson[i-1].lrc+"</a>";
              document.getElementById('lrcdown1').innerHTML='<a href="javascript:void(0);" onclick="dianjihhhhgeci('+lrcjson[i+1].time+');" id="lrcdown1">'+lrcjson[i+1].lrc+"</a>";
            }
            document.getElementById('lrc').innerHTML='<a href="javascript:void(0);" onclick="dianjihhhhgeci('+lrcjson[i].time+');" id="lrc">'+lrcjson[i].lrc+"</a>";
        }
    }
}
