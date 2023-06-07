// var map, kmllayer, fusionLayer;

function initMap() {

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(49.246069, -123.138542),
        zoom: 12,
        maxZoom: 15,
        minZoom: 11
    });
      
    var stylez = [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          { saturation: -100 }
        ]
      }
    ];

    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
    map.mapTypes.set('grayscale', mapType);
    map.setMapTypeId('grayscale');
      
    /*
    FusionTablesLayer was dipreciated since 2019
    https://workspaceupdates.googleblog.com/2018/12/google-fusion-tables-to-be-shut-down-on.html

    var fusionLayer = new google.maps.FusionTablesLayer({
    query: {
    select: '\'Geocodable address\'',
    from: '1N1o4vH-_ENy_NzApLriGaTb-mOFeckMymhT0WRU'
    },
    options: {
       styleId: 2,
       templateId: 2,
    }
    });*/

    // Adding a New Layer, Step 1 (of 6)
    // This code pulls a KML layer in from an external source
    // Copy and paste one of these lines, change the URL, and change the number to the next in sequence
    var kmlLayer_1 = new google.maps.KmlLayer({
      
        // This address is not working as of 11/29/2015. It has been replaced with the one below it, which should not be taken as permanent.
        // url: 'http://vansoilmap.neevmedia.com/kml/Delta-Tsawwassen.kml?rand='+(new Date()).valueOf(),
        // url: 'http://sidl.es/content/vancouversoilskml/Alluvium2.kml?rand='+(new Date()).valueOf(),
        url: 'https://raw.githubusercontent.com/UBC-LFS/soilweb/main/Vancouver-Soil-Map/Google-Map/Delta-Tsawwassen.kml',
        preserveViewport: true
    });

    var kmlLayer_2 = new google.maps.KmlLayer({
        // This address is not working as of 11/29/2015. It has been replaced with the one below it, which should not be taken as permanent.
        // url: 'http://vansoilmap.neevmedia.com/kml/Bose-Heron.kml?rand='+(new Date()).valueOf(),
        // url: 'http://sidl.es/content/vancouversoilskml/Bose-Heron.kml?rand='+(new Date()).valueOf(),
        url: 'https://raw.githubusercontent.com/UBC-LFS/soilweb/main/Vancouver-Soil-Map/Google-Map/Bose-Heron.kml',
        preserveViewport: true
    });

    var kmlLayer_3 = new google.maps.KmlLayer({
        // This address is not working as of 11/29/2015. It has been replaced with the one below it, which should not be taken as permanent.
        // url: 'http://vansoilmap.neevmedia.com/kml/Langley-Cloverdale.kml?rand='+(new Date()).valueOf(),
        // url: 'http://sidl.es/content/vancouversoilskml/Langley-Cloverdale.kml?rand='+(new Date()).valueOf(),
        url: 'https://raw.githubusercontent.com/UBC-LFS/soilweb/main/Vancouver-Soil-Map/Google-Map/Langley-Cloverdale.kml',
        preserveViewport: true
    });

    var kmlLayer_4 = new google.maps.KmlLayer({
        // This address is not working as of 11/29/2015. It has been replaced with the one below it, which should not be taken as permanent.
        // url: 'http://vansoilmap.neevmedia.com/kml/WhatcomScat.kml?rand='+(new Date()).valueOf(),
        // url: 'http://sidl.es/content/vancouversoilskml/Whatcom-Scat.kml?rand='+(new Date()).valueOf(),
        url: 'https://raw.githubusercontent.com/UBC-LFS/soilweb/main/Vancouver-Soil-Map/Google-Map/Whatcom-Scat.kml',
        preserveViewport: true
    });

    /*var kmlLayer_5 = new google.maps.KmlLayer({
        // This address is not working as of 11/29/2015. It has been replaced with the one below it, which should not be taken as permanent.
        // url: 'http://vansoilmap.neevmedia.com/kml/VancouverCommunityGardens.kml?rand='+(new Date()).valueOf(),
        url: 'http://sidl.es/content/vancouversoilskml/VancouverCommunityGardens.kml?rand='+(new Date()).valueOf(),
        preserveViewport: true
    });*/

    // Adding a New Layer, Step 2
    // This code selects a button you choose as a control for the layer
    // Copy and paste one of the kmlClick lines and change it to the number you made previously
    //var fusionClick = document.getElementById('map-control-1');
    var kmlClick_1 = document.getElementById('map-control-2');
    var kmlClick_2 = document.getElementById('map-control-3');
    var kmlClick_3 = document.getElementById('map-control-4');
    var kmlClick_4 = document.getElementById('map-control-5');
    //var kmlClick_5 = document.getElementById('map-control-6');
      
    // Adding a New Layer, Step 3
    // This code keeps track of the layer's on-off status
    // Copy and paste one of the kmlLayer lines and change it to the number your made previously
    //var fusionLayerStatus = 0;
    var kmlLayer_1Status = 1;
    var kmlLayer_2Status = 1;
    var kmlLayer_3Status = 1;
    var kmlLayer_4Status = 1;
    //var kmlLayer_5Status = 0;

    // Adding a New Layer, Step 4
    // This code sets the KML layers to display by default
    // Copy and paste one of the lines below and change it to the number you made previously
    kmlLayer_1.setMap(map);
    kmlLayer_2.setMap(map);
    kmlLayer_3.setMap(map);
    kmlLayer_4.setMap(map);
      
      
    // Adding a New Layer, Step 5
    // This code sets up the button control for the layer
    // Copy and paste one of the blocks below and change it to the number you made previously
    /*fusionClick.onclick= function(){
        if(fusionLayerStatus == 1) {
            fusionLayer.setMap();
            fusionLayerStatus = 0;
         // fusionClickfull.checked = true;
        } else if(fusionLayerStatus == 0){
            fusionLayer.setMap(map);
            fusionLayerStatus = 1;
         // fusionClickfull.checked = false;
        }
    };*/
      
    kmlClick_1.onclick= function(){
        if(kmlLayer_1Status == 1) {
           kmlLayer_1.setMap();
            kmlLayer_1Status = 0;
            document.getElementById("label1").style.backgroundColor = "#f7f7f7";
        } else{
            kmlLayer_1.setMap(map);
            kmlLayer_1Status = 1;
            document.getElementById("label1").style.backgroundColor = "#e4d8f4";
            if(fusionLayerStatus == 1) {
              fusionLayer.setMap(map);
            }
        }
    };

      
    kmlClick_2.onclick= function(){
        if(kmlLayer_2Status == 1) {
            kmlLayer_2.setMap();
            kmlLayer_2Status = 0;
            document.getElementById("label2").style.backgroundColor = "#f7f7f7";
        } else if(kmlLayer_2Status == 0){
            kmlLayer_2.setMap(map);
            kmlLayer_2Status = 1;
            document.getElementById("label2").style.backgroundColor = "#cbdce8";
            if(fusionLayerStatus == 1) {
              fusionLayer.setMap();
              fusionLayer.setMap(map);
            }
        }
    };
      
    kmlClick_3.onclick= function(){
        if(kmlLayer_3Status == 1) {
            kmlLayer_3.setMap();
            kmlLayer_3Status = 0;
            document.getElementById("label3").style.backgroundColor = "#f7f7f7";
        } else if(kmlLayer_3Status == 0){
            kmlLayer_3.setMap(map);
            kmlLayer_3Status = 1;
            document.getElementById("label3").style.backgroundColor = "#f0d5d4";
            if(fusionLayerStatus == 1) {
              fusionLayer.setMap(map);
            }
        }
    };
      
    kmlClick_4.onclick= function(){
        if(kmlLayer_4Status == 1) {
            kmlLayer_4.setMap();
            kmlLayer_4Status = 0;
            document.getElementById("label4").style.backgroundColor = "#f7f7f7";
        } else if(kmlLayer_4Status == 0){
            kmlLayer_4.setMap(map);
            kmlLayer_4Status = 1;
            document.getElementById("label4").style.backgroundColor = "#deeccf";
            if(fusionLayerStatus == 1) {
              fusionLayer.setMap(map);
            }
        }
    };

    /*kmlClick_5.onclick= function(){
        if(kmlLayer_5Status == 1) {
            kmlLayer_5.setMap();
            kmlLayer_5Status = 0;
        } else if(kmlLayer_5Status == 0){
            kmlLayer_5.setMap(map);
            kmlLayer_5Status = 1;
            if(fusionLayerStatus == 1) {
              fusionLayer.setMap(map);
            }
        }
    };*/
  
}

window.initMap = initMap;

//google.maps.event.addDomListener(window, 'load', initialize);

// Adding a New Layer, Step 6
// Add a control HTML element (like a button) into wherever you want the user to control the layer
// Make sure the name matches the one you set in step 2!
// And you're done!