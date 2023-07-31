var footerItems = document.getElementsByTagName("footer");
if (footerItems.length === 0) {
    var newFooter = document.createElement("footer");
//    var add_footer = document.createTextNode(result_string);
    newFooter.innerHTML = "<div><p style='padding: 20px 20px 0px 20px'>This work is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons Attribution-NonCommercial-ShareAlike  International License</a> unless otherwise indicated.</p></div>";
//    newpara.appendChild(add_footer);
} else {
    if (footerItems[0].innerHTML.includes("powered by")) footerItems[0].innerHTML = "";
    footerItems[footerItems.length - 1].innerHTML += "<div class='container' style='margin-top: 100px;'><p>This work is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons Attribution-NonCommercial-ShareAlike  International License</a> unless otherwise indicated.</p></div>";
}

// Title VSSLR logo
(function() {
    var hyperlink = document.createElement('a');
    hyperlink.setAttribute('href', 'https://www.soilweb.ca');
    hyperlink.setAttribute('class', 'logo-link');
    
    var image = document.createElement('img');
    image.setAttribute('src', 'https://forestfloor.soilweb.ca/wp-content/uploads/sites/12/2023/07/processes-logo.png');
    hyperlink.appendChild(image);
    
    var ele = document.getElementById('header-grid').querySelector('.brand');
    var parent = ele.parentNode;
    parent.insertBefore(hyperlink, ele);
})();
