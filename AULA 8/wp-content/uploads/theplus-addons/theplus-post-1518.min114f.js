/*tabs & tours*/(function(a){"use strict";var b=function(a,b){var c=a.find(".theplus-tabs-wrapper"),d=c.data("tab-hover"),f="#"+c.attr("id").toString();b(f+" ul.plus-tabs-nav li .plus-tab-header").each(function(a){var c=b(this).closest(".theplus-tabs-wrapper").data("tab-default");if(c==a){b(this).removeClass("inactive").addClass("active");var d=b(this).closest(".theplus-tabs-wrapper").data("connection");""!=d&&d!=null&&b("."+d).length&&setTimeout(function(){plus_tabs_connection(parseInt(c+1),d)},150);var e=b(this).closest(".theplus-tabs-wrapper").data("row-bg-conn");""!=e&&e!=null&&b("#"+e).length&&background_accordion_tabs_conn(c+1,e)}}),b(f+" .theplus-tabs-content-wrapper .plus-tab-content").each(function(a){var c=b(this).closest(".theplus-tabs-wrapper").data("tab-default");c==a&&(b(this).removeClass("inactive").addClass("active"),(b(f+" .list-isotope-metro .post-inner-loop").length||b(f+" .list-isotope .post-inner-loop").length)&&setTimeout(function(){b(f+" .list-isotope-metro .post-inner-loop",f+" .list-isotope .post-inner-loop").isotope("layout")},10))}),"no"==d&&b(f+" ul.plus-tabs-nav li .plus-tab-header").on("click",function(){var a=b(this).data("tab"),c=b(this).closest(".theplus-tabs-wrapper"),d=b(c).children("ul.plus-tabs-nav").children("li").children(".plus-tab-header"),e=b(c).children(".theplus-tabs-content-wrapper").children(".plus-tab-content");b(c).find(">.theplus-tabs-nav-wrapper .plus-tab-header").removeClass("active default-active").addClass("inactive"),b(this).addClass("active").removeClass("inactive"),b(c).find(">.theplus-tabs-content-wrapper>.plus-tab-content").removeClass("active").addClass("inactive"),b(">.theplus-tabs-content-wrapper>.plus-tab-content[data-tab='"+a+"']",c).addClass("active").removeClass("inactive"),b(e).each(function(){b(this).removeClass("default-active")}),b(">.theplus-tabs-content-wrapper>.plus-tab-content[data-tab='"+a+"'] .pt_plus_before_after",c).length&&size_Elements();var g=b(this).closest(".theplus-tabs-wrapper").data("connection");if(""!=g&&null!=g&&b("."+g).length){var h=b(this).data("tab");plus_tabs_connection(h,g)}var i=b(this).closest(".theplus-tabs-wrapper").data("row-bg-conn");if(""!=i&&null!=i&&b("#"+i).length){var h=b(this).data("tab");background_accordion_tabs_conn(h,i)}if(b(f+" .list-carousel-slick > .post-inner-loop").length&&b(f+" .list-carousel-slick > .post-inner-loop").slick("setPosition"),b(f+" .elementor-background-video-embed").length&&setTimeout(function(){var d=b(".theplus-tabs-content-wrapper",c).find("[data-tab='"+a+"'] .elementor-background-video-embed").closest(".elementor-background-video-container").outerWidth(),e=b(".theplus-tabs-content-wrapper",c).find("[data-tab='"+a+"'] .elementor-background-video-embed").closest(".elementor-background-video-container").outerHeight(),g=["16","9"],j=g[0]/g[1],i=d/e>j,k=i?d:e*j,l=i?d/j:e;100==l&&(k="100%",l="100%"),b(f+" .elementor-background-video-embed").width(k).height(l)},50),b(f+" iframe.pt-plus-bg-video").length&&setTimeout(function(){var a=b(f+" iframe.pt-plus-bg-video").closest(".columns-video-bg").outerWidth(),c=b(f+" iframe.pt-plus-bg-video").closest(".columns-video-bg").outerHeight(),d=["16","9"],e=d[0]/d[1],g=a/c>e,i=g?a:c*e,j=g?a/e:c;b(f+" iframe.pt-plus-bg-video").width(i).height(j)},100),b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro .post-inner-loop").length){var j=b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro"),k=j.data("id"),l=j.attr("data-metro-columns"),m=j.attr("data-metro-style");theplus_backend_packery_portfolio(k,l,m),b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro .post-inner-loop").isotope("layout")}if(b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope .post-inner-loop").length&&setTimeout(function(){b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope .post-inner-loop").isotope("layout")},30),b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").length){var n=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-description .tp-unfold-description-inner").outerHeight(),o=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").data("content-max-height"),p=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").data("id");n<=o?(b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-last-toggle").css("display","none"),b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-description").append("<style>.tp-unfold-wrapper."+p+" .tp-unfold-description:after{min-height:0 !important;}</style>")):b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-last-toggle").css("display","flex")}}),"yes"==d&&b(f+" ul.plus-tabs-nav li .plus-tab-header").mouseover(function(){var a=b(this).data("tab"),c=b(this).closest(".theplus-tabs-wrapper"),d=b(c).children("ul.plus-tabs-nav").children("li").children(".plus-tab-header"),e=b(c).children(".theplus-tabs-content-wrapper").children(".plus-tab-content");b(c).find(">.theplus-tabs-nav-wrapper .plus-tab-header").removeClass("active default-active").addClass("inactive"),b(this).addClass("active").removeClass("inactive"),b(c).find(">.theplus-tabs-content-wrapper>.plus-tab-content").removeClass("active").addClass("inactive"),b(">.theplus-tabs-content-wrapper>.plus-tab-content[data-tab='"+a+"']",c).addClass("active").removeClass("inactive"),b(e).each(function(){b(this).removeClass("default-active")}),b(">.theplus-tabs-content-wrapper>.plus-tab-content[data-tab='"+a+"'] .pt_plus_before_after",c).length&&size_Elements();var g=b(this).closest(".theplus-tabs-wrapper").data("connection");if(""!=g&&null!=g&&b("."+g).length){var h=b(this).data("tab");plus_tabs_connection(h,g)}var i=b(this).closest(".theplus-tabs-wrapper").data("row-bg-conn");if(""!=i&&null!=i&&b("#"+i).length){var h=b(this).data("tab");background_accordion_tabs_conn(h,i)}if(b(f+" .list-carousel-slick > .post-inner-loop").length&&b(f+" .list-carousel-slick > .post-inner-loop").slick("setPosition"),b(f+" .elementor-background-video-embed").length&&setTimeout(function(){var d=b(".theplus-tabs-content-wrapper",c).find("[data-tab='"+a+"'] .elementor-background-video-embed").closest(".elementor-background-video-container").outerWidth(),e=b(".theplus-tabs-content-wrapper",c).find("[data-tab='"+a+"'] .elementor-background-video-embed").closest(".elementor-background-video-container").outerHeight(),g=["16","9"],j=g[0]/g[1],i=d/e>j,k=i?d:e*j,l=i?d/j:e;100==l&&(k="100%",l="100%"),b(f+" .elementor-background-video-embed").width(k).height(l)},50),b(f+" iframe.pt-plus-bg-video").length&&setTimeout(function(){var a=b(f+" iframe.pt-plus-bg-video").closest(".columns-video-bg").outerWidth(),c=b(f+" iframe.pt-plus-bg-video").closest(".columns-video-bg").outerHeight(),d=["16","9"],e=d[0]/d[1],g=a/c>e,i=g?a:c*e,j=g?a/e:c;b(f+" iframe.pt-plus-bg-video").width(i).height(j)},100),b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro .post-inner-loop").length){var j=b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro"),k=j.data("id"),l=j.attr("data-metro-columns"),m=j.attr("data-metro-style");theplus_backend_packery_portfolio(k,l,m),b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro .post-inner-loop").isotope("layout")}if(b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope .post-inner-loop").length&&setTimeout(function(){b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope .post-inner-loop").isotope("layout")},30),b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").length){var n=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-description .tp-unfold-description-inner").outerHeight(),o=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").data("content-max-height"),p=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").data("id");n<=o?(b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-last-toggle").css("display","none"),b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-description").append("<style>.tp-unfold-wrapper."+p+" .tp-unfold-description:after{min-height:0 !important;}</style>")):b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-last-toggle").css("display","flex")}}),0<b(".theplus-tabs-wrapper.swiper-container").length&&new Swiper(".theplus-tabs-wrapper.swiper-container",{slidesPerView:"auto",mousewheelControl:!0,freeMode:!0}),b(f).hasClass("mobile-accordion")&&(b(window).on("resize",function(){600>=b(window).innerWidth()&&b(f).addClass("mobile-accordion-tab")}),b(f+" .theplus-tabs-content-wrapper .elementor-tab-mobile-title").on("click",function(){var a=b(this).data("tab"),c=b(this).closest(".theplus-tabs-wrapper"),d=b(c).children(".theplus-tabs-content-wrapper").children(".elementor-tab-mobile-title"),e=b(c).children(".theplus-tabs-content-wrapper").children(".plus-tab-content");b(c).find(">.theplus-tabs-content-wrapper .elementor-tab-mobile-title").removeClass("active default-active").addClass("inactive"),b(this).addClass("active").removeClass("inactive"),b(c).find(">.theplus-tabs-content-wrapper>.plus-tab-content").removeClass("active").addClass("inactive"),b(">.theplus-tabs-content-wrapper>.plus-tab-content[data-tab='"+a+"']",c).addClass("active").removeClass("inactive"),b(e).each(function(){b(this).removeClass("default-active")});var g=b(this).closest(".theplus-tabs-wrapper").data("connection");if(""!=g&&null!=g&&b("."+g).length){var h=b(this).data("tab");plus_tabs_connection(h,g)}var i=b(this).closest(".theplus-tabs-wrapper").data("row-bg-conn");if(""!=i&&null!=i&&b("#"+i).length){var h=b(this).data("tab");background_accordion_tabs_conn(h,i)}if(b(f+" .list-carousel-slick > .post-inner-loop").length&&b(f+" .list-carousel-slick > .post-inner-loop").slick("setPosition"),b(f+" .elementor-background-video-embed").length&&setTimeout(function(){var d=b(".theplus-tabs-content-wrapper",c).find("[data-tab='"+a+"'] .elementor-background-video-embed").closest(".elementor-background-video-container").outerWidth(),e=b(".theplus-tabs-content-wrapper",c).find("[data-tab='"+a+"'] .elementor-background-video-embed").closest(".elementor-background-video-container").outerHeight(),g=["16","9"],j=g[0]/g[1],i=d/e>j,k=i?d:e*j,l=i?d/j:e;100==l&&(k="100%",l="100%"),b(f+" .elementor-background-video-embed").width(k).height(l)},50),b(f+" iframe.pt-plus-bg-video").length&&setTimeout(function(){var a=b(f+" iframe.pt-plus-bg-video").closest(".columns-video-bg").outerWidth(),c=b(f+" iframe.pt-plus-bg-video").closest(".columns-video-bg").outerHeight(),d=["16","9"],e=d[0]/d[1],g=a/c>e,i=g?a:c*e,j=g?a/e:c;b(f+" iframe.pt-plus-bg-video").width(i).height(j)},100),b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro .post-inner-loop").length){var j=b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro"),k=j.data("id"),l=j.attr("data-metro-columns"),m=j.attr("data-metro-style");theplus_backend_packery_portfolio(k,l,m),b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope-metro .post-inner-loop").isotope("layout")}if(b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope .post-inner-loop").length&&setTimeout(function(){b(f+" .plus-tab-content[data-tab='"+a+"'] .list-isotope .post-inner-loop").isotope("layout")},30),b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").length){var n=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-description .tp-unfold-description-inner").outerHeight(),o=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").data("content-max-height"),p=b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-wrapper").data("id");n<=o?(b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-last-toggle").css("display","none"),b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-description").append("<style>.tp-unfold-wrapper."+p+" .tp-unfold-description:after{min-height:0 !important;}</style>")):b(f+" .plus-tab-content[data-tab='"+a+"'] .tp-unfold-last-toggle").css("display","flex")}}));var g=window.location.hash;if(""!=g&&g!=null&&!b(g).hasClass("active")&&b(g).length){b("html, body").animate({scrollTop:b(g).offset().top},1500),b(g+".plus-tab-header").trigger("click");var h=b(g).data("tab");b(".elementor-tab-mobile-title[data-tab='"+h+"']").trigger("click")}};a(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/tp-tabs-tours.default",b)})})(jQuery);function plus_tabs_connection(a,b){var c=jQuery;if(""!=b&&1==c("."+b).length){var d=c("."+b+" > .post-inner-loop").slick("slickCurrentSlide");d!=a-1&&c("."+b+" > .post-inner-loop").slick("slickGoTo",a-1)}}