window.onload = function() {
    var oldWindowSize = 950;
	var scaleValue = jQuery( "#nav-image" ).width() / oldWindowSize;
	var map = jQuery("#image-map");

	map.find("area").each(function() {
        var coords = jQuery(this).attr("coords");
        coords = coords.split(",");
        var scaledCoords = "";
        for (var coord in coords) {
            console.log(coords[coord], scaleValue);
            scaledCoords += Math.floor(coords[coord] * scaleValue) + ",";
            console.log(scaledCoords);
        }
        console.log(scaledCoords);
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