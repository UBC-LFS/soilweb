 // tabbed content
    jQuery(".tab_content").hide();
    jQuery(".tab_content:first").show();

  /* if in tab mode */
    jQuery("ul.tabs li").click(function() {
		
      jQuery(".tab_content").hide();
      var activeTab = jQuery(this).attr("rel");
      jQuery("#"+activeTab).fadeIn();	
		
      jQuery("ul.tabs li").removeClass("active");
      jQuery(this).addClass("active");
      jQuery(this).next().show();

	if( jQuery(this).attr("id") == "tabtitle1" ) {
		jQuery( "#tab1" ).show();
	}
	if( jQuery(this).attr("id") == "tabtitle2" ) {
		jQuery( "#tab2" ).show();
	}
	if( jQuery(this).attr("id") == "tabtitle3" ) {
		jQuery( "#tab3" ).show();
	}
        if( jQuery(this).attr("id") == "tabtitle4" ) {
		jQuery( "#tab4" ).show();
	}


	  jQuery(".tab_drawer_heading").removeClass("d_active");
	  jQuery(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
      jQuery("#"+activeTab).addClass("bleck");
	  
    });
	/* if in drawer mode */
	jQuery(".tab_drawer_heading").click(function() {
      
      jQuery(".tab_content").hide();
      var d_activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+d_activeTab).fadeIn();
	  
      jQuery(".tab_drawer_heading").removeClass("d_active");
      jQuery(this).addClass("d_active");
	  
	  jQuery("ul.tabs li").removeClass("active");
	  jQuery("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	jQuery('ul.tabs li').last().addClass("tab_last");
	