  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-17301459-14', 'soilx.ca');
  ga('send', 'pageview');
  
  
// Title VSSLR logo
(function() {
    var hyperlink = document.createElement('a');
    hyperlink.setAttribute('href', 'https://www.soilweb.ca');
    hyperlink.setAttribute('class', 'logo-link');
    
    var image = document.createElement('img');
    image.setAttribute('src', 'https://ar-soilweb.sites.olt.ubc.ca/files/2023/07/processes-logo.png');
    hyperlink.appendChild(image);
    
    var ele = document.getElementById('menu-menu-2020');
    var parent = ele.parentNode;
    parent.insertBefore(hyperlink, ele);
})();