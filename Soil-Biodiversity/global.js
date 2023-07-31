var footerItems = document.getElementsByTagName("footer");
if (footerItems.length === 0) {
    
    var newFooter = document.createElement("footer");
//    var add_footer = document.createTextNode(result_string);
    newFooter.innerHTML = "<div><p style='padding: 20px 20px 0px 20px'>This work is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons Attribution-NonCommercial-ShareAlike  International License</a> unless otherwise indicated.</p></div>";
//    newpara.appendChild(add_footer);
} else {
    
    for (var i = 0; i < footerItems.length; i++) {
        if (footerItems[i].innerHTML.includes("powered by")) footerItems[i].innerHTML = "";
    }
    footerItems[footerItems.length - 1].innerHTML += "<div class='site-footer''><p>This work is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons Attribution-NonCommercial-ShareAlike  International License</a> unless otherwise indicated.</p></div>";
    
}


// Title VSSLR logo
(function() {
    var hyperlink = document.createElement('a');
    hyperlink.setAttribute('href', 'https://www.soilweb.ca');
    hyperlink.setAttribute('class', 'logo-link');
    
    var image = document.createElement('img');
    image.setAttribute('src', 'https://biology.soilweb.ca/wp-content/uploads/sites/4/2023/07/processes-logo.png');
    hyperlink.appendChild(image);
    
    var ele = document.getElementById('site-branding').querySelector('.site-title');
    var parent = ele.parentNode;
    parent.insertBefore(hyperlink, ele);
})();
