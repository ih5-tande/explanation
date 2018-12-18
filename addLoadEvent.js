function addLoadEvent(func){
    var oldEvent=window.onload;
    if (typeof window.onload=="function"){
        window.onload=function(){
            oldEvent();
            func();
        }
    }
    else{
        window.onload=func;
    }
}