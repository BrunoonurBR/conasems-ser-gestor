!function(e){function a(e,t){var i=e.find(".premium-progressbar-container"),a=i.data("settings"),n=a.progress_length,o=a.speed,r=a.type;if("line"===r){var s=i.find(".premium-progressbar-bar");a.gradient&&s.css("background","linear-gradient(-45deg, "+a.gradient+")"),s.animate({width:n+"%"},o)}else if("circle"===r)100<n&&(n=100),i.prop({counter:0}).animate({counter:n},{duration:o,easing:"linear",step:function(e){var t=3.6*e;i.find(".premium-progressbar-right-label span").text(Math.ceil(e)+"%"),i.find(".premium-progressbar-circle-left").css("transform","rotate("+t+"deg)"),180<t&&(i.find(".premium-progressbar-circle").css({"-webkit-clip-path":"inset(0)","clip-path":"inset(0)"}),i.find(".premium-progressbar-circle-right").css("visibility","visible"))}});else{s=i.find(".premium-progressbar-bar-wrap");var l=i.outerWidth(),d=a.dot||25,m=a.spacing||10,c=Math.ceil(l/(d+m)),u=c*(n/100),p=Math.floor(u),f=100*(u-p);s.attr("data-circles",c),s.attr("data-total-fill",p),s.attr("data-partial-fill",f);for(var v="progress-segment",h=0;h<c;h++){v="progress-segment";var g="";h<p?g="<div class='segment-inner'></div>":h===p&&(g="<div class='segment-inner'></div>"),s.append("<div class='"+v+"'>"+g+"</div>")}"frontend"!==t&&b(e)}}function t(e,t){var i=e.find(".premium-progressbar-container").data("settings").type;"dots"===i&&a(e,"frontend"),elementorFrontend.waypoint(e,function(){("dots"!==i?a:b)(t(this))},{offset:Waypoint.viewportHeight()-150,triggerOnce:!0})}function i(l,d){var t,i,m=l.find(".premium-video-box-container"),e=l.find(".premium-video-box-playlist-container"),a=m.find(".premium-video-box-video-container"),c=m.find(".premium-video-box-inner-wrap"),u=c.find(".premium-video-box-image-container"),n=m.data("type"),o=m.data("thumbnail"),r=m.data("sticky"),s=m.data("sticky-play"),p=m.data("hover");if(e.length){if(!a.length)return;a.each(function(e,t){var i,a=d(t),n=a.closest(".premium-video-box-container"),o=a.closest(".premium-video-box-trigger");i=a.data("src"),i+="&autoplay=1",d(o).on("click",function(){var e=d("<iframe/>");e.attr({src:i,frameborder:"0",allowfullscreen:"1",allow:"autoplay;encrypted-media;"}),a.css("background","#000"),a.html(e),n.find(".premium-video-box-image-container, .premium-video-box-play-icon-container").remove()})})}else"self"===n?(t=a.find("video"),i=t.attr("src")):(i=a.data("src"),o&&-1===i.indexOf("autoplay=1")?i+="&autoplay=1":m.data("play-viewport")?elementorFrontend.waypoint(m,function(){f()}):f()),m.on("click",function(){f()}),"yes"===r&&"yes"!==s&&v();function f(){if(!m.hasClass("playing")){if(m.addClass("playing"),"yes"===s&&v(),"self"===n)d(t).get(0).play(),a.css({opacity:"1",visibility:"visible"});else{var e=d("<iframe/>");e.attr({src:i,frameborder:"0",allowfullscreen:"1",allow:"autoplay;encrypted-media;"}),a.css("background","#000"),a.html(e)}m.find(".premium-video-box-image-container, .premium-video-box-play-icon-container, .premium-video-box-description-container").remove(),"vimeo"===n&&m.find(".premium-video-box-vimeo-wrap").remove()}}function v(){var i=m.data("hide-desktop"),a=m.data("hide-tablet"),n=m.data("hide-mobile"),o=m.data("sticky-margin");if(m.off("click").on("click",function(e){var t=e.target.className;if(0<=t.toString().indexOf("premium-video-box-sticky-close")||0<=t.toString().indexOf("premium-video-box-sticky-close"))return!1;f()}),void 0!==elementorFrontend.waypoint)var t=elementorFrontend.waypoint(m,function(e){if("down"===e){if(m.removeClass("premium-video-box-sticky-hide").addClass("premium-video-box-sticky-apply premium-video-box-filter-sticky"),l.hasClass("elementor-motion-effects-parent")&&l.removeClass("elementor-motion-effects-perspective").find(".elementor-widget-container").addClass("premium-video-box-transform"),m.data("mask")&&(l.find(".premium-video-box-mask-filter").removeClass("premium-video-box-mask-filter"),m.find(":first-child").removeClass("premium-video-box-mask-media"),u.removeClass(p).removeClass("premium-video-box-mask-media").css({transition:"width 0.2s, height 0.2s","-webkit-transition":"width 0.2s, height 0.2s"})),d(document).trigger("premium_after_sticky_applied",[l]),c.data("video-animation")&&" "!=c.data("video-animation")){c.css("opacity","0");var t=c.data("delay-animation");setTimeout(function(){c.css("opacity","1").addClass("animated "+c.data("video-animation"))},1e3*t)}}else m.removeClass("premium-video-box-sticky-apply  premium-video-box-filter-sticky").addClass("premium-video-box-sticky-hide"),l.hasClass("elementor-motion-effects-parent")&&l.addClass("elementor-motion-effects-perspective").find(".elementor-widget-container").removeClass("premium-video-box-transform"),m.data("mask")&&(m.parent().addClass("premium-video-box-mask-filter"),m.find(":first-child").eq(0).addClass("premium-video-box-mask-media"),u.addClass("premium-video-box-mask-media")),u.addClass(p).css({transition:"all 0.2s","-webkit-transition":"all 0.2s"}),c.removeClass("animated "+c.data("video-animation"))},{offset:"0%",triggerOnce:!1});function r(e){var t=elementorFrontend.getCurrentDeviceMode();""!==i&&t==i||""!==a&&t==a||""!==n&&t==n?s(e):e[0].enable()}function s(e){e[0].disable(),m.removeClass("premium-video-box-sticky-apply premium-video-box-sticky-hide")}function e(){m.hasClass("premium-video-box-sticky-apply")&&c.draggable({start:function(){d(this).css({transform:"none",top:d(this).offset().top+"px",left:d(this).offset().left+"px"})},containment:"window"})}l.find(".premium-video-box-sticky-close").off("click.closetrigger").on("click.closetrigger",function(e){t[0].disable(),m.removeClass("premium-video-box-sticky-apply premium-video-box-sticky-hide"),l.hasClass("elementor-motion-effects-parent")&&l.addClass("elementor-motion-effects-perspective").find(".elementor-widget-container").removeClass("premium-video-box-transform"),m.data("mask")&&(m.parent().addClass("premium-video-box-mask-filter"),m.find(":first-child").eq(0).addClass("premium-video-box-mask-media"),u.addClass("premium-video-box-mask-media"))}),r(t),e(),window.addEventListener("scroll",e),d(window).resize(function(e){r(t)}),d(document).on("premium_after_sticky_applied",function(e,t){var i=t.find(".premium-video-box-sticky-infobar");if(0!==i.length){var a=i.outerHeight();if((t.hasClass("premium-video-sticky-center-left")||t.hasClass("premium-video-sticky-center-right"))&&(a=Math.ceil(a/2),c.css("top","calc( 50% - "+a+"px )")),(t.hasClass("premium-video-sticky-bottom-left")||t.hasClass("premium-video-sticky-bottom-right"))&&""!==o){var n=(a=Math.ceil(a))+o;c.css("bottom",n)}}})}}function n(e,s){var a=e.find(".premium-gallery-container"),l=a.data("settings"),t=l.img_size,i=elementorFrontend.getCurrentDeviceMode(),n=l.load_more,o=null,r=null,d=!1,m=l.minimum,c=l.click_images,u=m,p=l.ltr_mode,f=l.shuffle,v=e.find(".premium-gallery-cats-container li");if("metro"===t){var h=a.width(),g=Math.floor(h/12),y=null;function b(){i=elementorFrontend.getCurrentDeviceMode(),h=a.width(),g=Math.floor(h/12),y="","tablet"===i?y="_tablet":"mobile"===i&&(y="_mobile"),a.find(".premium-gallery-item").each(function(e,t){var i=s(t).data("metro")["cells"+y],a=s(t).data("metro")["vcells"+y];""!=i&&null!=i||(i=s(t).data("metro").cells),""!=a&&null!=a||(a=s(t).data("metro").vcells),s(t).css({width:Math.ceil(i*g),height:Math.ceil(a*g)})}),o=g}b(),t="masonry",s(window).resize(function(){b(),w.isotope({itemSelector:".premium-gallery-item",masonry:{columnWidth:o}})})}var w=a.isotope({itemSelector:".premium-gallery-item",percentPosition:!0,animationOptions:{duration:750,easing:"linear"},filter:l.active_cat,layoutMode:t,originLeft:p,masonry:{columnWidth:o},sortBy:l.sort_by});if(w.imagesLoaded().progress(function(){w.isotope("layout")}),s(document).ready(function(){w.isotope("layout"),w.isotope({filter:l.active_cat});var e=new URL(window.location.href);if(e){var t=e.searchParams.get(l.flag);if(t)v.eq(t).find("a").trigger("click")}}),n){var k=a.find(".premium-gallery-gradient-layer"),x=null;if(setTimeout(function(){x=k.outerHeight()},200),a.parent().find(".premium-gallery-load-more div").addClass("premium-gallery-item-hidden"),a.find(".premium-gallery-item").length>m){function C(e){var t=a.data("isotope");k.outerHeight(x),a.find(".premium-gallery-item-hidden").removeClass("premium-gallery-item-hidden"),a.parent().find(".premium-gallery-load-more").removeClass("premium-gallery-item-hidden");var i=t.filteredItems.slice(e,t.filteredItems.length).map(function(e){return e.element});s(i).addClass("premium-gallery-item-hidden"),w.isotope("layout"),0==i&&(k.addClass("premium-gallery-item-hidden"),a.parent().find(".premium-gallery-load-more").addClass("premium-gallery-item-hidden"))}a.parent().find(".premium-gallery-load-more").removeClass("premium-gallery-item-hidden"),a.parent().on("click",".premium-gallery-load-less",function(){u-=c}),a.parent().on("click",".premium-gallery-load-more-btn:not(.premium-gallery-load-less)",function(){d?(u=m,d=!1):u=u,u+=c,s.ajax({url:C(u),beforeSend:function(){a.parent().find(".premium-gallery-load-more div").removeClass("premium-gallery-item-hidden")},success:function(){a.parent().find(".premium-gallery-load-more div").addClass("premium-gallery-item-hidden")}})})}}"yes"!==l.light_box&&a.find(".premium-gallery-video-wrap").each(function(e,o){var r=s(o).data("type");s(o).closest(".premium-gallery-item").on("click",function(){var e=s(this);if(e.find(".pa-gallery-img-container").css("background","#000"),e.find("img, .pa-gallery-icons-caption-container, .pa-gallery-icons-wrapper").css("visibility","hidden"),"style3"!==l.skin&&e.find(".premium-gallery-caption").css("visibility","hidden"),"hosted"!==r){var t=e.find(".premium-gallery-iframe-wrap"),i=t.data("src");i=i.replace("&mute","&autoplay=1&mute");var a=s("<iframe/>");a.attr({src:i,frameborder:"0",allowfullscreen:"1",allow:"autoplay;encrypted-media;"}),t.html(a),a.css("visibility","visible")}else{var n=s(o).find("video");n.get(0).play(),n.css("visibility","visible")}})}),v.find("a").click(function(e){return e.preventDefault(),d=!0,v.find(".active").removeClass("active"),s(this).addClass("active"),r=s(this).attr("data-filter"),w.isotope({filter:r}),f&&w.isotope("shuffle"),n&&C(m),!1}),"default"===l.lightbox_type&&e.find(".premium-img-gallery a[data-rel^='prettyPhoto']").prettyPhoto({theme:l.theme,hook:"data-rel",opacity:.7,show_title:!1,deeplinking:!1,overlay_gallery:l.overlay,custom_markup:"",default_width:900,default_height:506,social_tools:""})}function o(e,a){var n=e.find(".premium-counter");elementorFrontend.waypoint(n,function(){var e=n.data(),t=n.find(".premium-counter-init"),i=n.find(".icon");a(t).numerator(e),a(i).addClass("animated "+i.data("animation"))})}function r(e,t){var s=e.find(".premium-fancy-text-wrapper"),l=s.data("settings");if("typing"===l.effect){var i=[];l.strings.forEach(function(e){i.push(e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"))}),s.find(".premium-fancy-text").typed({strings:i,typeSpeed:l.typeSpeed,backSpeed:l.backSpeed,startDelay:l.startDelay,backDelay:l.backDelay,showCursor:l.showCursor,cursorChar:l.cursorChar,loop:l.loop})}else if("slide"===l.effect)s.find(".premium-fancy-text").vTicker({speed:l.speed,showItems:l.showItems,pause:l.pause,mousePause:l.mousePause,direction:"up"});else if("auto-fade"===l.effect){var a=s.find(".premium-fancy-list-items"),n=a.length;if(0===n)return;var o=l.duration/n,r=0;a.each(function(e,t){t.style.animationDelay=r+"ms",r+=o})}else{!function(){var t=s.find(".premium-fancy-list-items"),i=1,e=l.delay||2500,a=l.count;if(a)var n=1,o=s.find(".premium-fancy-list-items").length;var r=setInterval(function(){var e="";"custom"===l.effect&&(e="animated "+l.animation),t.eq(i).addClass("premium-fancy-item-visible "+e).removeClass("premium-fancy-item-hidden"),t.filter(function(e){return e!==i}).addClass("premium-fancy-item-hidden").removeClass("premium-fancy-item-visible "+e),i++,t.length===i&&(i=0),a&&o*a===++n&&clearInterval(r)},e)}()}}function s(e,l){var t=e.find(".premium-countdown"),a=t.data("settings"),d=e.data("id"),i=a.label1,n=a.label2,o=i.split(","),r=n.split(","),s="evergreen"===a.timerType?a.until.date:a.until,m="",c={y:{index:0,oldVal:""},o:{index:1,oldVal:""},w:{index:2,oldVal:""},d:{index:3,oldVal:""},h:{index:4,oldVal:""},m:{index:5,oldVal:""},s:{index:6,oldVal:""}};if(t.find("#countdown-"+d).hasClass("premium-countdown-flip")&&a.format.split("").forEach(function(e){var t=e.toLowerCase();m+='<div class="premium-countdown-block premium-countdown-'+t+'"><div class="pre_time-mid"> <div class="premium-countdown-figure"><span class="top">{'+t+'nn}</span><span class="top-back"><span>{'+t+'nn}</span></span><span class="bottom">{'+t+'nn}</span><span class="bottom-back"><span>{'+t+'nn}</span></span></div><span class="premium-countdown-label">{'+t+'l}</span></div><span class="countdown_separator">{sep}</span></div>'}),t.find("#countdown-"+d).countdown({layout:m,labels:r,labels1:o,until:new Date(s),format:a.format,padZeroes:!0,timeSeparator:a.separator,onTick:function(e){var i,r,s;i=0,t.find("#countdown-"+d+" .countdown-amount").each(function(e,t){i<l(t).outerWidth()&&(i=l(t).outerWidth())}),t.find("#countdown-"+d+" .countdown-amount").css("width",i),t.find("#countdown-"+d).hasClass("premium-countdown-flip")&&(r=e,s=c,a.format.split("").forEach(function(e){var t=e.toLowerCase(),i=s[t].index,a=s[t].oldVal;if(r[i]!==a){s[t].oldVal=r[i];var n=l("#countdown-"+d).find(".premium-countdown-"+t+" .top"),o=l("#countdown-"+d).find(".premium-countdown-"+t+" .top-back");TweenMax.to(n,.8,{rotationX:"-180deg",transformPerspective:300,ease:Quart.easeOut,onComplete:function(){TweenMax.set(n,{rotationX:0})}}),TweenMax.to(o,.8,{rotationX:0,transformPerspective:300,ease:Quart.easeOut,clearProps:"all"})}}))},onExpiry:function(){"onExpiry"===a.event&&t.find("#countdown-"+d).html(a.text)},serverSync:function(){return new Date(a.serverSync)}}),a.reset&&t.find(".premium-countdown-init").countdown("option","until",new Date(s)),"expiryUrl"===a.event&&t.find("#countdown-"+d).countdown("option","expiryUrl",elementorFrontend.isEditMode()?"":a.text),times=t.find("#countdown-"+d).countdown("getTimes"),times.every(function(e){return 0==e}))if("onExpiry"===a.event)t.find("#countdown-"+d).html(a.text);else if("expiryUrl"===a.event&&!elementorFrontend.isEditMode()){0<l("body").find("#elementor").length?t.find("#countdown-"+d).html("<h1>You can not redirect url from elementor Editor!!</h1>"):elementorFrontend.isEditMode()||(window.location.href=a.text)}}function l(e,c){var u=e.find(".premium-carousel-wrapper"),p=c(u).data("settings");function n(e){var t=u.find(".slick-slide");"init"===e&&(t=t.not(".slick-current")),t.find(".animated").each(function(e,t){var i=c(t).data("settings");if(i&&(i._animation||i.animation)){var a=i._animation||i.animation;c(t).removeClass("animated "+a).addClass("elementor-invisible")}})}if(elementorFrontend.isEditMode()&&u.find(".item-wrapper").each(function(e,i){var t=c(i).data("template");void 0!==t&&c.ajax({type:"GET",url:PremiumSettings.ajaxurl,dataType:"html",data:{action:"get_elementor_template_content",templateID:t}}).success(function(e){var t=JSON.parse(e).data;void 0!==t.template_content&&(c(i).html(t.template_content),u.find(".premium-carousel-inner").slick("refresh"))})}),u.on("init",function(e){e.preventDefault(),setTimeout(function(){n("init")},500),c(this).find("item-wrapper.slick-active").each(function(){var e=c(this);e.addClass(e.data("animation"))}),c(".slick-track").addClass("translate")}),u.find(".premium-carousel-inner").slick({vertical:p.vertical,slidesToScroll:p.slidesToScroll,slidesToShow:p.slidesToShow,responsive:[{breakpoint:p.tabletBreak,settings:{slidesToShow:p.slidesTab,slidesToScroll:p.slidesTab}},{breakpoint:p.mobileBreak,settings:{slidesToShow:p.slidesMob,slidesToScroll:p.slidesMob}}],useTransform:!0,fade:p.fade,infinite:p.infinite,speed:p.speed,autoplay:p.autoplay,autoplaySpeed:p.autoplaySpeed,draggable:p.draggable,touchMove:p.touchMove,rtl:p.rtl,adaptiveHeight:p.adaptiveHeight,pauseOnHover:p.pauseOnHover,centerMode:p.centerMode,centerPadding:p.centerPadding,arrows:p.arrows,prevArrow:u.find(".premium-carousel-nav-arrow-prev").html(),nextArrow:u.find(".premium-carousel-nav-arrow-next").html(),dots:p.dots,customPaging:function(){return u.find(".premium-carousel-nav-dot").html()}}),u.on("afterChange",function(e,t,i){var a,n,o=t.options.slidesToScroll,r=(a=t.options.slidesToShow,(n=c(window).width())>p.tabletBreak&&(a=p.slidesDesk),n<=p.tabletBreak&&(a=p.slidesTab),n<=p.mobileBreak&&(a=p.slidesMob),a),s=t.options.centerMode,l=i+r-1;if(u.find(".slick-active .elementor-invisible").each(function(e,t){var i=c(t).data("settings");if(i&&(i._animation||i.animation)){var a=i._animation_delay?i._animation_delay:0,n=i._animation||i.animation;setTimeout(function(){c(t).removeClass("elementor-invisible").addClass(n+" animated")},a)}}),1===o){if(!0==!s){var d=c(this).find("[data-slick-index='"+l+"']");"null"!=p.animation&&d.find("p, h1, h2, h3, h4, h5, h6, span, a, img, i, button").addClass(p.animation).removeClass("premium-carousel-content-hidden")}}else for(var m=o+i;0<=m;m--)d=c(this).find("[data-slick-index='"+m+"']"),"null"!=p.animation&&d.find("p, h1, h2, h3, h4, h5, h6, span, a, img, i, button").addClass(p.animation).removeClass("premium-carousel-content-hidden")}),u.on("beforeChange",function(e,t,i){n();var a=c(this).find("[data-slick-index='"+i+"']");"null"!=p.animation&&a.siblings().find("p, h1, h2, h3, h4, h5, h6, span, a, img, i, button").removeClass(p.animation).addClass("premium-carousel-content-hidden")}),p.vertical){var t=-1;elementorFrontend.elements.$window.on("load",function(){u.find(".slick-slide").each(function(){c(this).height()>t&&(t=c(this).height())}),u.find(".slick-slide").each(function(){c(this).height()<t&&c(this).css("margin",Math.ceil((t-c(this).height())/2)+"px 0")})})}var i={element:c("a.ver-carousel-arrow"),getWidth:function(){return this.element.outerWidth()/2},setWidth:function(e){"vertical"==(e=e||"vertical")?this.element.css("margin-left","-"+this.getWidth()+"px"):this.element.css("margin-top","-"+this.getWidth()+"px")}};i.setWidth(),i.element=c("a.carousel-arrow"),i.setWidth("horizontal"),c(document).ready(function(){p.navigation.map(function(e,t){e&&c(e).on("click",function(){var e=u.find(".premium-carousel-inner").slick("slickCurrentSlide");t!==e&&u.find(".premium-carousel-inner").slick("slickGoTo",t)})})})}function d(e,t){var i=e.find(".premium-banner"),a=i.find("img");if(i.data("box-tilt")){var n=i.data("box-tilt-reverse");UniversalTilt.init({elements:i,settings:{reverse:n},callbacks:{onMouseLeave:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0)"},onDeviceMove:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0.3)"}}})}i.find(".premium-banner-ib").hover(function(){a.addClass("active")},function(){a.removeClass("active")})}function m(e,t){var i=e.find(".premium-modal-box-container"),a=i.data("settings"),n=i.find(".premium-modal-box-modal-dialog");if(a&&("pageload"===a.trigger&&t(document).ready(function(e){setTimeout(function(){i.find(".premium-modal-box-modal").modal()},1e3*a.delay)}),n.data("modal-animation")&&" "!=n.data("modal-animation"))){var o=n.data("delay-animation");new Waypoint({element:n,handler:function(){setTimeout(function(){n.css("opacity","1").addClass("animated "+n.data("modal-animation"))},1e3*o),this.destroy()},offset:Waypoint.viewportHeight()-150})}}function c(a,n){var o=a.find(".premium-blog-wrap"),t=o.find(".premium-blog-post-outer-container"),i=o.data("scroll"),e=o.data("carousel"),r=o.data("grid"),s=o.data("layout"),l=o.data("pagination"),d=o.data("infinite"),m=a.find(".category.active").data("filter"),c=a.find(".premium-blog-filter").length,u=1,p=!0,f=t.data("total"),v=2;if(1===t.first().find(".premium-blog-meta-separator").length?t.find(".fa-user").length||t.find(".premium-blog-meta-separator").remove():t.find(".fa-user").length||t.each(function(e,t){n(t).find(".premium-blog-meta-separator").first().remove()}),c&&a.find(".premium-blog-filters-container li a").click(function(e){e.preventDefault(),a.find(".premium-blog-filters-container li .active").removeClass("active"),n(this).addClass("active"),m=n(this).attr("data-filter"),u=1,d?(D(!1),v=2,P()):D(i)}),c&&"*"!==m?D(!1):"masonry"!==s||e||o.imagesLoaded(function(){o.isotope({itemSelector:".premium-blog-post-outer-container",percentPosition:!0,filter:m,animationOptions:{duration:750,easing:"linear",queue:!1}})}),e){var h=o.data("play"),g=o.data("speed"),y=o.data("fade"),b=o.data("center"),w=o.data("slides-spacing"),k=o.data("arrows"),x=o.data("dots"),C=o.data("col"),_=o.data("col-tablet"),T=o.data("col-mobile"),S=o.data("scroll-slides"),F=null,M=null;r||(C=_=T=1),k?(F='<a type="button" data-role="none" class="carousel-arrow carousel-prev" aria-label="Next" role="button" style=""><i class="fas fa-angle-left" aria-hidden="true"></i></a>',M='<a type="button" data-role="none" class="carousel-arrow carousel-next" aria-label="Next" role="button" style=""><i class="fas fa-angle-right" aria-hidden="true"></i></a>'):F="",o.slick({infinite:!0,slidesToShow:C,slidesToScroll:S||C,responsive:[{breakpoint:1025,settings:{slidesToShow:_,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:T,slidesToScroll:1}}],autoplay:h,rows:0,autoplaySpeed:g,nextArrow:M,prevArrow:F,fade:y,centerMode:b,centerPadding:w+"px",draggable:!0,dots:x,customPaging:function(){return'<i class="fas fa-circle"></i>'}})}function A(){var a=new Array;o.find(".premium-blog-content-wrapper").each(function(e,t){var i=n(t).outerHeight();a.push(i)});var e=Math.max.apply(null,a);o.find(".premium-blog-content-wrapper").css("height",e+"px")}function P(){var e=jQuery(window).outerHeight()/1.25;n(window).scroll(function(){c&&(t=o.find(".premium-blog-post-outer-container"),f=t.data("total")),v<=f&&n(window).scrollTop()+e>=a.find(".premium-blog-post-outer-container:last").offset().top&&1==p&&(u=v,D(!1),v++,p=!1)})}function D(e){void 0===m&&(m="*"),n.ajax({url:PremiumSettings.ajaxurl,dataType:"json",type:"POST",data:{action:"pa_get_posts",page_id:o.data("page"),widget_id:a.data("id"),page_number:u,category:m,nonce:PremiumSettings.nonce},beforeSend:function(){o.append('<div class="premium-loading-feed"><div class="premium-loader"></div></div>'),e&&n("html, body").animate({scrollTop:o.offset().top-50},"slow")},success:function(e){if(e.data){o.find(".premium-loading-feed").remove();var t=e.data.posts,i=e.data.paging;if(d?(p=!0,c&&1===u?o.html(t):o.append(t)):(o.html(t),a.find(".premium-blog-footer").html(i)),"even"===s)o.data("equal")&&A();else o.imagesLoaded(function(){o.isotope("reloadItems"),o.isotope({itemSelector:".premium-blog-post-outer-container",animate:!1})})}},error:function(e){console.log(e)}})}"even"===s&&o.data("equal")&&A(),l&&a.on("click",".premium-blog-pagination-container .page-numbers",function(e){if(e.preventDefault(),!n(this).hasClass("current")){var t=parseInt(a.find(".premium-blog-pagination-container .page-numbers.current").html());u=n(this).hasClass("next")?t+1:n(this).hasClass("prev")?t-1:n(this).html(),D(i)}}),d&&P()}function u(e,t){var i=e.find(".premium-image-scroll-container"),a=i.find(".premium-image-scroll-overlay"),n=i.find(".premium-image-scroll-vertical"),o=i.data("settings"),r=i.find("img"),s=o.direction,l=o.reverse,d=null;function m(){r.css("transform",("vertical"===s?"translateY":"translateX")+"( -"+d+"px)")}function c(){r.css("transform",("vertical"===s?"translateY":"translateX")+"(0px)")}function u(){d="vertical"===s?r.height()-i.height():r.width()-i.width()}"scroll"===o.trigger?(i.addClass("premium-container-scroll"),"vertical"===s?n.addClass("premium-image-scroll-ver"):i.imagesLoaded(function(){a.css({width:r.width(),height:r.height()})})):("yes"===l&&i.imagesLoaded(function(){i.addClass("premium-container-scroll-instant"),u(),m()}),"vertical"===s&&n.removeClass("premium-image-scroll-ver"),i.mouseenter(function(){i.removeClass("premium-container-scroll-instant"),u(),("yes"===l?c:m)()}),i.mouseleave(function(){("yes"===l?m:c)()}))}function p(e,t){var i=e.find(".premium-cf7-container").find('input[type="text"], input[type="email"], textarea, input[type="password"], input[type="date"], input[type="number"], input[type="tel"], input[type="file"], input[type="url"]');i.wrap("<span class='wpcf7-span'>"),i.on("focus blur",function(){t(this).closest(".wpcf7-span").toggleClass("is-focused")})}function f(e,i){var t=e.find(".multiple-persons");if(t.length){if(t.data("carousel")){var a=t.data("play"),n=t.data("speed"),o=t.data("rtl"),r=t.data("col"),s=t.data("col-tablet"),l=t.data("col-mobile");t.slick({infinite:!0,slidesToShow:r,slidesToScroll:r,responsive:[{breakpoint:1025,settings:{slidesToShow:s,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:l,slidesToScroll:1}}],autoplay:a,rows:0,autoplaySpeed:n,rtl:!!o,nextArrow:'<a type="button" data-role="none" class="carousel-arrow carousel-next" aria-label="Next" role="button" style=""><i class="fas fa-angle-right" aria-hidden="true"></i></a>',prevArrow:'<a type="button" data-role="none" class="carousel-arrow carousel-prev" aria-label="Next" role="button" style=""><i class="fas fa-angle-left" aria-hidden="true"></i></a>',draggable:!0,pauseOnHover:!0})}if(!t.hasClass("premium-person-style1")&&"yes"===t.data("persons-equal")){var d=new Array;t.find(".premium-person-container").each(function(e,t){i(t).imagesLoaded(function(){}).done(function(){var e=i(t).find(".premium-person-image-container").outerHeight();d.push(e)})}),t.imagesLoaded(function(){}).done(function(){var e=Math.max.apply(null,d);t.find(".premium-person-image-wrap").css("height",e+"px")})}}}function v(e,a){var t=e.find(".premium-title-container"),i=t.find(".premium-title-text");if(t.hasClass("style9")&&e.find(".premium-title-style9").each(function(){var e=a(this),t=1e3*e.attr("data-blur-delay");e.attr("data-animation-blur","process"),e.find(".premium-title-style9-letter").each(function(e,t){var i;e+=1,i=a("body").hasClass("rtl")?.2/e+"s":e/20+"s",a(t).css({"-webkit-animation-delay":i,"animation-delay":i})}),setInterval(function(){e.attr("data-animation-blur","done"),setTimeout(function(){e.attr("data-animation-blur","process")},150)},t)}),t.hasClass("style8")){var n=1e3*i.attr("data-shiny-delay"),o=1e3*i.attr("data-shiny-dur");!function e(){i.get(0).setAttribute("data-animation","shiny"),setTimeout(function(){i.removeAttr("data-animation")},o),setTimeout(e,n)}()}}function h(e,i){var a=e.find(".premium-icon-list-box");a.find(".premium-icon-list-content").each(function(e,t){if(a.data("list-animation")&&" "!=a.data("list-animation"))new Waypoint({element:t,handler:function(){var e=i(this.element),t=e.data("delay");setTimeout(function(){e.next(".premium-icon-list-divider , .premium-icon-list-divider-inline").css("opacity","1"),e.next(".premium-icon-list-divider-inline , .premium-icon-list-divider").addClass("animated "+a.data("list-animation")),e.css("opacity","1"),e.addClass("animated "+a.data("list-animation"))},t),this.destroy()},offset:Waypoint.viewportHeight()-150})})}function g(e,n){var o=e.find(".premium-button-style6-bg");0!==o.length&&e.hasClass("premium-mouse-detect-yes")&&e.on("mouseenter mouseleave",".premium-button-style6",function(e){var t=n(this).offset(),i=e.pageX-t.left,a=e.pageY-t.top;o.css({top:a,left:i})})}function y(e,a){if(e.hasClass("premium-mask-yes")){if("premium-addon-title.default"===e.data("widget_type")){var t=".premium-title-header";e.find(t).find(".premium-title-icon, .premium-title-img").addClass("premium-mask-span")}else t=".premium-dual-header-first-header";e.find(t).find("span:not(.premium-title-style7-stripe-wrap):not(.premium-title-img)").each(function(e,t){var i="";a(this).text().split(" ").forEach(function(e){""!==e&&(i+=' <span class="premium-mask-span">'+e+"</span>")}),a(this).text("").append(i)}),elementorFrontend.waypoint(e,function(){a(e).addClass("premium-mask-active")},{offset:Waypoint.viewportHeight()-150,triggerOnce:!0})}}var b=function(e){var t=e.find(".premium-progressbar-container").data("settings"),n=e.find(".premium-progressbar-bar-wrap"),i=n.data(),o=t.speed,r=0,s=i.totalFill,l=i.circles,d=i.partialFill;!function e(t){var i=n.find(".progress-segment").eq(t),a=100;t===s&&(a=d);i.find(".segment-inner").animate({width:a+"%"},o/l,function(){++r<=s&&e(r)})}(r)};e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-dual-header.default",y),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-video-box.default",i),elementorFrontend.hooks.addAction("frontend/element_ready/premium-img-gallery.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-fancy-text.default",r),elementorFrontend.hooks.addAction("frontend/element_ready/premium-counter.default",o),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-title.default",v),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-title.default",y),elementorFrontend.hooks.addAction("frontend/element_ready/premium-countdown-timer.default",s),elementorFrontend.hooks.addAction("frontend/element_ready/premium-carousel-widget.default",l),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-banner.default",d),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-modal-box.default",m),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-blog.default",c),elementorFrontend.hooks.addAction("frontend/element_ready/premium-image-scroll.default",u),elementorFrontend.hooks.addAction("frontend/element_ready/premium-contact-form.default",p),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-person.default",f),elementorFrontend.hooks.addAction("frontend/element_ready/premium-icon-list.default",h),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-button.default",g),elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-image-button.default",g),elementorFrontend.isEditMode()?elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-progressbar.default",a):elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-progressbar.default",t)})}(jQuery);