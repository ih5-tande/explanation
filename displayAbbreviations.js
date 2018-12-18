function displayAbbreviations() {
    if(!document.getElementsByTagName||!document.createTextNode||!document.createElement) return false;
   //取得所有缩略语
    var abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    var dlist=document.createElement("dl");
    var defs=new Array();
    //给数组添加所有abbr
    for(var i=0;i<abbreviations.length;i++) {
        var current_abbr = abbreviations[i];
        var key = current_abbr.firstChild.nodeValue;
        var definition = current_abbr.getAttribute("title");
        defs[key] = definition;
    }
    //利用数组defs，给dlist 添加title和description节点
    for(key in defs) {
       var definition=defs[key];

        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        var ddes = document.createElement("dd");
        var ddes_text = document.createTextNode(definition);
        ddes.appendChild(ddes_text);
        dtitle.appendChild(dtitle_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddes);
    }
    //追加到<h2>标签里，将h2追加到body
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    header.appendChild(dlist);
    document.body.appendChild(header);
    
}

addLoadEvent(displayAbbreviations);