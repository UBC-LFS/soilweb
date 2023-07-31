// Title VSSLR logo
(function() {
    var hyperlink = document.createElement('a');
    hyperlink.setAttribute('href', 'https://www.soilweb.ca');
    hyperlink.setAttribute('class', 'logo-link');
    
    var image = document.createElement('img');
    image.setAttribute('src', 'https://lfs-pinusradiata.sites.olt.ubc.ca/files/2023/07/processes-logo.png');
    hyperlink.appendChild(image);
    
    var ele = document.getElementById('ubc7-unit-name').getElementsByTagName('a')[0];
    var parent = ele.parentNode;
    parent.insertBefore(hyperlink, ele);
})();
