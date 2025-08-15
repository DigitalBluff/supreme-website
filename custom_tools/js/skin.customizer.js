// Interactive change skin custom styles
function themerex_skin_customizer(option, val) {

	var custom_style = '';

	if (option == 'bg_color') {

		jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
		jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper, #custom_options #co_bg_images_list .co_image_wrapper').removeClass('active');
		jQuery('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', clr);

	} else if (option == 'bg_pattern') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_pattern_' + val);

	} else if (option == 'bg_image') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_image_' + val);

	} else if (option == 'main_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// main color styles
		custom_style += '\
            .main_color, .hover_wrap .hover_link, .hover_wrap .hover_view, .isotope_wrap .isotope_item_grid .post_item .hover_wrap .hover_content a.hover, .isotope_wrap .isotope_item_square .post_item .hover_wrap .hover_content a.hover, .isotope_wrap .isotope_item_portfolio .post_item .hover_wrap .hover_content a.hover, .isotope_wrap .isotope_item_alternative .post_item .hover_wrap .hover_content a.hover, .hover_icon:before, .post_format_link .post_descr a, .pagination_viewmore > a, .reviews_block .reviews_item .reviews_stars_hover, .post_item .post_rating .reviews_stars_bg, .post_item .post_rating .reviews_stars_hover, .post_item .post_rating .reviews_value, .widget_area ul li:before, .widget_area.bg_tint_dark ul li:before, .widget_area.bg_tint_dark button:before, .widget_area .widget_search .search_button:hover:before, .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active, .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active .sc_accordion_icon:before, .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover .sc_accordion_icon:before, .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title.ui-state-active .sc_accordion_icon:before, .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title:hover .sc_accordion_icon:before, input[type="submit"], input[type="button"], button, .sc_button, .sc_dropcaps.sc_dropcaps_style_1 .sc_dropcaps_item, .sc_socials a span, .sc_emailer .sc_emailer_button:hover, blockquote.sc_quote.style_1:before, .sc_icon, .sc_list_style_iconed li:before, .sc_list_style_iconed .sc_list_icon, .sc_testimonials .sc_slider_controls_wrap a, .sc_tabs.sc_tabs_style_3 .sc_tabs_titles li a:hover, .sc_tabs.sc_tabs_style_3 .sc_tabs_titles li.ui-state-active a, .sc_title_icon, .widget_area .widget_twitter ul li:before, .sc_contact_form_topic .sc_contact_form_button button, .sc_contact_form .sc_contact_form_button button:hover, .sc_contact_form .sc_contact_form_button button:active\
            {\
				color:'+clr+';\
			}\
            .sc_button_bg_underline, .sc_button_bg_underline:hover, .sc_button_bg_underline:active, header .sidebar_cart .widget_shopping_cart_content .cart_list li a.remove:hover\
            {\
				color: '+clr+' !important;\
			}\
            .main_color_bgc, .hover_wrap .hover_link:hover, .hover_wrap .hover_view:hover, .post_format_status .post_descr, .isotope_wrap .isotope_item_grid .post_item .hover_wrap .hover_content a.hover:hover, .isotope_wrap .isotope_item_square .post_item .hover_wrap .hover_content a.hover:hover, .isotope_wrap .isotope_item_portfolio .post_item .hover_wrap .hover_content a.hover:hover, .isotope_wrap .isotope_item_alternative .post_item .hover_wrap .hover_content a.hover:hover, .pagination_viewmore > a:hover, .viewmore_loader, .mfp-preloader span, .sc_video_frame.sc_video_active:before, .post_featured .post_nav_item:before, .post_featured .post_nav_item .post_nav_info, .reviews_block .reviews_max_level_100 .reviews_stars_hover, .reviews_block .reviews_item .reviews_slider, .scroll_to_top, .sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title, .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title .sc_accordion_icon:before, input[type="submit"]:hover, input[type="button"]:hover, button:hover, .sc_button:hover, .sc_dropcaps.sc_dropcaps_style_2 .sc_dropcaps_item, .sc_dropcaps.sc_dropcaps_style_3 .sc_dropcaps_item, .sc_highlight_style_1, .sc_popup:before, .sc_price_block .sc_price_block_head, [class*="sc_skills_bar"] .sc_skills_item .sc_skills_count, .sc_skills_counter .sc_skills_item.sc_skills_style_3 .sc_skills_count, .sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_count, .sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_info, .sc_testimonials .sc_slider_controls_wrap a:hover, .sc_scroll_bar .swiper-scrollbar-drag:before, .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a:hover, .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li.ui-state-active a, .sc_team .sc_team_item .sc_team_item_info, .bg_tint_light .sc_slider_swiper .sc_slider_pagination_wrap span, .sc_title_divider .sc_title_divider_before, .sc_title_divider .sc_title_divider_after, .sc_contact_form_topic .sc_contact_form_button button:hover, .sc_contact_form_topic .sc_contact_form_button button:active, .contact_info .info_icon:before\
            {\
				background-color: '+clr+';\
            }\
            .custom_options #co_toggle\
            {\
                background-color: '+clr+' !important;\
            }\
            ::selection\
            {\
                background-color: '+clr+';\
            }\
            ::-moz-selection\
            {\
                background-color: '+clr+';\
            }\
            .main_color_bg, .photostack nav span:hover, .photostack nav span.current, .sc_contact_form .sc_contact_form_button button\
            {\
                background: '+clr+';\
            }\
            .main_color_border, td, th, pre.code, #toc .toc_item.current, #toc .toc_item:hover, .hover_wrap .hover_link, .hover_wrap .hover_view, .isotope_wrap .isotope_item_grid .post_item .hover_wrap .hover_content a.hover, .isotope_wrap .isotope_item_square .post_item .hover_wrap .hover_content a.hover, .isotope_wrap .isotope_item_portfolio .post_item .hover_wrap .hover_content a.hover, .isotope_wrap .isotope_item_alternative .post_item .hover_wrap .hover_content a.hover, .post_format_link .post_descr a:hover, .pagination_viewmore > a, .widget_area .widget_calendar td a, .widget_area .widget_calendar .today .day_wrap, .widget_area .widget_product_tag_cloud a, .widget_area .widget_tag_cloud a, .sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title .sc_accordion_icon:before, input[type="submit"], input[type="button"], button, .sc_button, input[type="submit"]:hover, input[type="button"]:hover, button:hover, .sc_button:hover, .sc_dropcaps.sc_dropcaps_style_1 .sc_dropcaps_item, .sc_socials a, .sc_icon_shape_square, .sc_icon_shape_round, [class*="sc_skills_bar"] .sc_skills_item .sc_skills_count, .sc_testimonials .sc_slider_controls_wrap a, .widget_area .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a, .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a:hover, .sc_tabs.sc_tabs_style_2 .sc_tabs_titles li.ui-state-active a, .bg_tint_light .sc_slider_swiper .sc_slider_pagination_wrap span:hover, .bg_tint_light .sc_slider_swiper .sc_slider_pagination_wrap .swiper-active-switch, .bg_tint_dark .sc_slider_swiper .sc_slider_pagination_wrap span:hover, .bg_tint_dark .sc_slider_swiper .sc_slider_pagination_wrap .swiper-active-switch, .sc_title_underline:after, .sc_contact_form .sc_contact_form_button button, .sc_contact_form_topic .sc_contact_form_button button, .sc_contact_form .sc_contact_form_button button:hover, .sc_contact_form .sc_contact_form_button button:active, .sc_contact_form_topic .sc_contact_form_button button:hover, .sc_contact_form_topic .sc_contact_form_button button:active\
            {\
				border-color: '+clr+'; \
            }\
            .sc_button_bg_underline:hover, .sc_button_bg_underline:active\
            {\
				border-color: '+clr+' !important; \
            }\
            .sc_tabs.sc_tabs_style_1 .sc_tabs_titles li.ui-state-active a, .sc_tabs.sc_tabs_style_1 .sc_tabs_titles li a:hover\
            {\
				border-bottom-color: '+clr+'; \
            }\
		';
	} else if (option == 'accent_color') {

        var clr = val;
        var rgb = themerex_hex2rgb(clr);
        // accent color styles
        custom_style += '\
            a, a:hover, .accent_color, a.accent_color:hover, .menu_user_wrap, .menu_user_wrap .menu_user_nav li > a, .isotope_wrap .isotope_item_grid .post_item .hover_wrap .hover_content .info, .isotope_wrap .isotope_item_square .post_item .hover_wrap .hover_content .info, .isotope_wrap .isotope_item_portfolio .post_item .hover_wrap .hover_content .info, .isotope_wrap .isotope_item_alternative .post_item .hover_wrap .hover_content .info, .isotope_wrap .isotope_item_grid .post_item .hover_wrap .hover_content .info a, .isotope_wrap .isotope_item_square .post_item .hover_wrap .hover_content .info a, .isotope_wrap .isotope_item_portfolio .post_item .hover_wrap .hover_content .info a, .isotope_wrap .isotope_item_alternative .post_item .hover_wrap .hover_content .info a, .content .post_info .post_info_counters span, .content .post_info a.post_counters_views, .widget_area .post_info .post_info_counters .post_counters_item:before, .widget_area .post_info .post_info_counters .post_counters_likes.disabled, .post_info .post_info_counters .post_counters_item:before, .post_info .post_info_counters .post_counters_likes.disabled, .widget_area .post_item .post_info .post_info_author, .widget_area .post_item .post_info .post_info_posted_by, .post_info .post_info_posted_by, .post_info .post_info_posted_by a, .top_socials .sc_socials a > span, .sc_image_wrap figcaption, .sc_image_wrap figcaption a, .sc_tabs.sc_tabs_style_1 .sc_tabs_titles li a\
            {\
				color:'+clr+';\
			}\
            .timeline.flatLine #t_line_left:hover, .timeline.flatLine #t_line_right:hover, #content .timeline.flatLine #t_line_left:hover, #content .timeline.flatLine #t_line_right:hover\
            {\
				color: '+clr+' !important;\
			}\
            .accent_color_bgc, .pagination_single a:hover, .pagination_slider .pager_cur:hover, .pagination_slider .pager_cur:focus, .pagination_pages > .active, .pagination_pages > a:hover, .pagination_wrap .pager_next:hover, .pagination_wrap .pager_prev:hover, .pagination_wrap .pager_last:hover, .pagination_wrap .pager_first:hover, .tribe-events-calendar thead th, a.tribe-events-read-more, .tribe-events-button, .tribe-events-nav-previous a, .tribe-events-nav-next a, .tribe-events-widget-link a, .tribe-events-viewmore a, .sc_blogger.layout_date .sc_blogger_item .sc_blogger_date, .sc_skills_counter .sc_skills_item.sc_skills_style_2 .sc_skills_info\
            {\
				background-color: '+clr+';\
            }\
            .accent_color_bg\
            {\
                background: '+clr+';\
            }\
            .timeline.flatLine a.t_line_node:after, #content .timeline.flatLine a.t_line_node:after, .timeline.flatLine .t_node_desc span, #content .timeline.flatLine .t_node_desc span\
            {\
                background: '+clr+' !important;\
            }\
            .accent_color_border, a:hover, .search_wrap .search_results a:hover, .pagination > a, .sc_blogger.layout_date .sc_blogger_item .sc_blogger_date\
            {\
				border-color: '+clr+'; \
            }\
            .timeline.flatLine .t_node_desc span:after, #content .timeline.flatLine .t_node_desc span:after\
            {\
				border-top-color: '+clr+' !important; \
            }\
            .top_panel_image_hover\
            {\
				 background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.8);\
            }\
		';
    }




    else {
        themerex_custom_options_show_loader();
        //location.reload();
        var loc = jQuery('#co_site_url').val();
        var params = THEMEREX_GLOBALS['co_add_params']!=undefined ? THEMEREX_GLOBALS['co_add_params'] : {};
        params[option] = val;
        var pos = -1, pos2 = -1, pos3 = -1;
        for (var option in params) {
            val = params[option];
            pos = pos2 = pos3 = -1;
            if ((pos = loc.indexOf('?')) > 0) {
                if ((pos2 = loc.indexOf(option, pos)) > 0) {
                    if ((pos3 = loc.indexOf('&', pos2)) > 0)
                        loc = loc.substr(0, pos2) + option+'='+val + loc.substr(pos3);
                    else
                        loc = loc.substr(0, pos2) + option+'='+val;
                } else
                    loc += '&'+option+'='+val;
            } else
                loc += '?'+option+'='+val;
        }
        window.location.href = loc;
        return;
    }

    if (custom_style != '') {
        var styles = jQuery('#themerex-customizer-styles-'+option).length > 0 ? jQuery('#themerex-customizer-styles-'+option) : '';
        if (styles.length == 0)
            jQuery('head').append('<style id="themerex-customizer-styles-'+option+'" type="text/css">'+custom_style+'</style>');
        else
            styles.html(custom_style);
    }
}
