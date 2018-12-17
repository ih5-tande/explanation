function displayAbbreviations() {
    var abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    var dlist=document.createElement("dl")
    for(var i=0;i<abbreviations.length;i++){
    var current_abbr=abbreviations[i];
    var key=current_abbr.firstChild.nodeValue;
    var definition=current_abbr.getAttribute("title");

    }
    
}