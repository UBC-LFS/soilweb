window.onload = function() {
    var oldWindowSize = 655;
    var scaleValue = jQuery( "#nav-image" ).width() / oldWindowSize;
    var map = jQuery("#image-map");

    map.find("area").each(function() {
        var coords = jQuery(this).attr("coords");
        coords = coords.split(",");
        var scaledCoords = "";
        for (var coord in coords) {
            scaledCoords += Math.floor(coords[coord] * scaleValue) + ",";
        }
        scaledCoords = scaledCoords.slice(0, -1);
        jQuery(this).attr("coords", scaledCoords);
    });

    oldWindowSize = jQuery( "#nav-image" ).width();

    var scaleValue = 1;
    jQuery( window ).resize(function() {
        scaleValue = jQuery( "#nav-image" ).width() / oldWindowSize;
        var map = jQuery("#image-map");

        map.find("area").each(function() {
           var coords = jQuery(this).attr("coords");
           coords = coords.split(",");
           var scaledCoords = "";
           for (var coord in coords) {
            scaledCoords += Math.floor(coords[coord] * scaleValue) + ",";
           }
           scaledCoords = scaledCoords.slice(0, -1);
           jQuery(this).attr("coords", scaledCoords);
        });
    	oldWindowSize = jQuery( "#nav-image" ).width();
    });
};

var zindex = 0;
jQuery( "#brunisol-map" ).hover(function() {
    jQuery( "#brunisol").show();
    jQuery( "#brunisol").css( "z-index", zindex);
    zindex++;
});

jQuery( "#chernozem-map" ).hover(function() {
    jQuery( "#chernozem").show();
    jQuery( "#chernozem").css( "z-index", zindex);
    zindex++;
});

jQuery( "#vertisol-map" ).hover(function() {
    jQuery( "#vertisol").show();
    jQuery( "#vertisol").css( "z-index", zindex);
    zindex++;
});

jQuery( "#cryosol-map" ).hover(function() {
    jQuery( "#cryosol").show();
    jQuery( "#cryosol").css( "z-index", zindex);
    zindex++;
});

jQuery( "#gleysol-map" ).hover(function() {
    jQuery( "#gleysol").show();
    jQuery( "#gleysol").css( "z-index", zindex);
    zindex++;
});

jQuery( "#luvisol-map" ).hover(function() {
    jQuery( "#luvisol").show();
    jQuery( "#luvisol").css( "z-index", zindex);
    zindex++;
});

jQuery( "#solonetz-map" ).hover(function() {
    jQuery( "#solonetz").show();
    jQuery( "#solonetz").css( "z-index", zindex);
    zindex++;
});

jQuery( "#organic-map" ).hover(function() {
    jQuery( "#organic").show();
    jQuery( "#organic").css( "z-index", zindex);
    zindex++;
});

jQuery( "#podzol-map" ).hover(function() {
    jQuery( "#podzol").show();
    jQuery( "#podzol").css( "z-index", zindex);
    zindex++;
});

jQuery( "#regosol-map" ).hover(function() {
    jQuery( "#regosol").show();
    jQuery( "#regosol").css( "z-index", zindex);
    zindex++;
});
