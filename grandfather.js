var timer = null;index = 0;
var main = document.getElementById('container');
var div = document.getElementsByName('d');
var li = document.getElementsByTagName('li');

function selide(){
    main.onmousemove = function (){
        change();
        stopautoplay();
    }
    main.onmouseout = function (){
        starautoplay();
    }
    main.onmouseout();
}
selide();
function change(){
    for(var i=0;i<li.length;i++){
        li[i].index = i;
        li[i].onmouseover = function(){
            for(var m=0;m<div.length;m++){
                div[m].className = "none";
            }
            div[this.index].className = "one";
            for(var l=0;l<li.length;l++){
                li[l].className = "active";
            }
            li[this.index].className = "hide";
        }
    }
}

change();


function change1(){
    for(var i=0;i<div.length;i++){
        for(var m=0;m<div.length;m++){
            div[m].className = "none";
        }
        div[this.index].className = "one";
        for(var l=0;l<li.length;l++){
            li[l].className = "active";
        }
        li[this.index].className = "hide";
    }
}


function starautoplay(){
    timer = setInterval(function() {
        index++;
        if(index > 4){
            index = 0;
        }
        change1();
    }, 2000);
}

function stopautoplay(){
    if(timer){
        clearInterval(timer);
    }
}
