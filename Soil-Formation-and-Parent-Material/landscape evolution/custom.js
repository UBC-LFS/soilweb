window.onload = function() {
    var oldWindowSize = 870;
    var scaleValue = jQuery( "#nav-image" ).width() / oldWindowSize;
    var map = jQuery("#image-map");
    var firstCoords = new Array();

	map.find("area").each(function() {
        var coords = jQuery(this).attr("coords");
        firstCoords.push(coords);
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
        scaleValue = jQuery( "#nav-image" ).width() / 870;
        var map = jQuery("#image-map");
        map.find("area").each(function(index) {
            var coords = firstCoords[index];
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

    var oldWindowSize2 = 870;
    var scaleValue2 = jQuery( "#nav-image-2" ).width() / oldWindowSize2;
    var map2 = jQuery("#image-map-2");
    var firstCoords2 = new Array();
    map2.find("area").each(function() {
        var coords = jQuery(this).attr("coords");
        firstCoords2.push(coords);
        coords = coords.split(",");
        var scaledCoords = "";
        for (var coord in coords) {
            scaledCoords += Math.floor(coords[coord] * scaleValue2) + ",";
        }

        scaledCoords = scaledCoords.slice(0, -1);
        jQuery(this).attr("coords", scaledCoords);
    });

    oldWindowSize2 = jQuery( "#nav-image-2" ).width();
    var scaleValue2 = 1;
    jQuery( window ).resize(function() {
        scaleValue2 = jQuery( "#nav-image-2" ).width() / 870;
        var map2 = jQuery("#image-map-2");
        map2.find("area").each(function(index) {
            var coords = firstCoords2[index];
            coords = coords.split(",");
            var scaledCoords = "";
            for (var coord in coords) {
                scaledCoords += Math.floor(coords[coord] * scaleValue2) + ",";
            }

            scaledCoords = scaledCoords.slice(0, -1);
            jQuery(this).attr("coords", scaledCoords);
        });

        oldWindowSize2 = jQuery( "#nav-image-2" ).width();
    });

jQuery( "#nav-image-2" ).hide();
jQuery( "#nav-image-3" ).hide();
jQuery( "#middle-table-1" ).click(function() {
    jQuery( "#nav-image" ).show();
    jQuery( "#nav-image-2" ).hide();
    jQuery( "#nav-image-3" ).hide();
});

jQuery( "#middle-table-2" ).click(function() {
    jQuery( "#nav-image" ).hide();
    jQuery( "#nav-image-2" ).show();
    jQuery( "#nav-image-3" ).hide();
});

jQuery( "#middle-table-3" ).click(function() {
    jQuery( "#nav-image" ).hide();
    jQuery( "#nav-image-2" ).hide();
    jQuery( "#nav-image-3" ).show();
});
    };