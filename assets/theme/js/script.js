!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.ws">Mobirise Website Builder</a> v4.10.7';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(a){var f=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(a,b,d,e,h){return 1>(b/=h/2)?e/2*b*b*b+d:e/2*((b-=2)*b*b+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};a.fn.footerReveal=function(){function c(){b.outerHeight()<=e.outerHeight()?(b.css({"z-index":-999,position:"fixed",bottom:0}),b.css({width:d.outerWidth()}),d.css({"margin-bottom":b.outerHeight()})):(b.css({"z-index":"",position:"",bottom:""}),b.css({width:""}),d.css({"margin-bottom":""}))}
var b=a(this),d=b.prev(),e=a(window);c();e.on("load resize",function(){c()});return this};(function(a,b){var d=function(a,b,c){var d;return function(){var f=this,k=arguments;d?clearTimeout(d):c&&a.apply(f,k);d=setTimeout(function(){c||a.apply(f,k);d=null},b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",d(a)):this.trigger(b)}})(jQuery,"smartresize");a.isMobile=function(c){var b=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};
c="undefined"==a.type(c)?"*":c.toLowerCase();"*"==c?b=a.map(d,function(a){return a}):c in d&&b.push(d[c]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),"i")))};var p=function(){var c=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),b=c[0],d=parseInt(window.innerHeight/2,10),b=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);c.remove();return b==d}();a(function(){function c(){a(this).css("height",
9*a(this).parent().width()/16)}function b(b){setTimeout(function(){a(b).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function d(b){a(b).outerFind("[data-bg-video]").each(function(){var b=a(this).attr("data-bg-video"),c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),k=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",
backgroundPosition:"center"});a("> *:eq(0)",this).before(k);if(c&&(/youtube/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtube/g.test(c[3]))b="http"+("https:"===location.protocol?"s":"")+":",b+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg",a("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg");
break;default:f&&k.css("background-image",'url("images/no-video.jpg")').show()}}else k.css("background-image",'url("'+this.src+'")').show()}).attr("src",b),!a.fn.YTPlayer||f||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:c[6],containment:"self",showControls:!1,mute:!0});else{if(c&&/vimeo/g.test(c[3])){var d=new XMLHttpRequest;d.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0);d.onreadystatechange=function(){if(4===this.readyState)if(200<=
this.status&&400>this.status){var a=JSON.parse(this.responseText);k.css("background-image",'url("'+a[0].thumbnail_large+'")').show()}else f&&k.css("background-image",'url("images/no-video.jpg")').show()};d.send();d=null;!a.fn.vimeo_player||f||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:b,containment:"self",showControls:!1,mute:!0})}}else f&&k.css("background-image",'url("images/video-placeholder.jpg")').show()})}a("html").addClass(a.isMobile()?
"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var d=[b,b];d[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,d)&&(b=d[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):
p||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(c)});a(document).on("add.cards changeParameter.cards",function(b){var d=a(b.target).outerFind(".mbr-section--16by9");d.length?d.attr("data-16by9","true").each(c):a(b.target).outerFind("[data-16by9]").css("height",
"").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&(a(window).on("update.parallax",function(b){setTimeout(function(){var b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")},0)}),f?(a(document).on("add.cards",function(c){b(c.target);a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",function(c,d,e,h){if("bg"===d)switch(a(c.target).jarallax("destroy").css("position",""),h){case "type":!0===e.parallax&&b(c.target);
break;case "value":"image"===e.type&&!0===e.parallax&&b(c.target);break;case "parallax":!0===e.parallax&&b(c.target)}a(window).trigger("update.parallax")})):b(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));var e,h,n=0,g=null,l=!a.isMobile();a(window).scroll(function(){h&&clearTimeout(h);var b=a(window).scrollTop(),c=b<=n||l;n=b;if(g){var d=b>g.breakPoint;c?d!=g.fixed&&(l?(g.fixed=d,a(g.elm).toggleClass("is-fixed")):h=setTimeout(function(){g.fixed=d;
a(g.elm).toggleClass("is-fixed")},40)):(g.fixed=!1,a(g.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){e&&clearTimeout(e);e=setTimeout(function(){g&&(g.fixed=!1,a(g.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){g={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||
315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});if(f)a(document).on("add.cards",function(a){d(a.target)});else d(document.body);a(document).on("changeParameter.cards",function(b,c,e,h){if("bg"===c)switch(h){case "type":a(b.target).find(".mbr-background-video-preview").remove();"video"===e.type&&d(b.target);break;case "value":"video"===e.type&&(a(b.target).find(".mbr-background-video-preview").remove(),
d(b.target))}});f||a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();f||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("carousel")){do if(c.hash){var d=/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(c).parents().hasClass("navbar-fixed-top")?60:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||
a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(c=c.parentNode)}}catch(e){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(f&&h){var a=f/h;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var g=e.height()/e.width();g>a&&(a=100*(g-a)/a,d.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),e=c.parent(),h=d[0].width,
f=d[0].height;d.one("load",function(){h=d[0].width;f=d[0].height;b()});a(window).on("resize",b);b()})});if(!f){if(a.fn.socialLikes)a(document).on("add.cards",function(c){a(c.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(b,c,e){999<e&&a(".social-likes__counter",b.target).html(Math.floor(e/1E3)+"k")}).socialLikes({initHtml:!1})});a(document).on("add.cards",function(c){a(c.target).hasClass("mbr-reveal")&&a(c.target).footerReveal()});a(document).ready(function(){if(!a.isMobile()&&
a("input[name=animation]").length){var c=function(a){if(!a.parents().is(".carousel-item")||"none"!==a.parents(".carousel-item").css("display"))return!1;var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animated").lenght)return!1;if(1<b.attr("data-visible")){b=b.attr("data-visible");if(a.parents().is(".cloneditem-"+(b-1))&&a.parents(".cloneditem-"+(b-1)).attr("data-cloned-index")>=b)return!0;a.removeClass("animated hidden");return!1}return!0},b=function(a){var b=0;
do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();var d=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")}).addClass("hidden animated"),
e=a(window);e.on("scroll resize",function(){var e=document.documentElement.scrollTop||document.body.scrollTop,f=e+window.innerHeight-50;a.each(d,function(){var d=a(this),l=d[0],k=l.offsetHeight,l=b(l);if((l+k>=e&&l<=f||c(d))&&d.hasClass("hidden"))d.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass("animated fadeInUp")})})});e.trigger("scroll")}});a(".nav-dropdown").length&&a(".nav-dropdown").swipe({swipeLeft:function(c,
b,d,e,f){a(".navbar-close").click()}})}a(document).ready(function(){if(a(".mbr-arrow-up").length){var c=a("#scrollToTop"),b=a("body,html"),d=a(window);c.css("display","none");d.scroll(function(){0<a(this).scrollTop()?c.fadeIn():c.fadeOut()});c.click(function(){b.animate({scrollTop:0},400);return!1})}});if(!f)a(".mbr-arrow").on("click",function(c){c=a(c.target).closest("section").next();c.hasClass("engine")&&(c=c.closest("section").next());c=c.offset();a("html, body").stop().animate({scrollTop:c.top},
800,"linear")});if(a("nav.navbar").length){var m=a("nav.navbar").height();a(".mbr-after-navbar.mbr-fullscreen").css("padding-top",m+"px")}if(!f&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))a(document).on("add.cards",function(c){var b=a(c.target);if(b.hasClass("mbr-fullscreen"))a(window).on("load resize",function(){b.css("height","auto");b.outerHeight()<=a(window).height()&&b.css("height","1px")});if(b.hasClass("mbr-slider")||b.hasClass("mbr-gallery"))b.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",
width:"30px"}),b.hasClass("mbr-slider")&&b.find(".full-screen .slider-fullscreen-image").css("height","1px")});a(document).ready(function(){if(!f){var c=function(b){var c=a(b).parents("section").find("iframe")[0],e=a(c).attr("src");b.parents("section").css("z-index","1");-1!==e.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");if(-1!==e.indexOf("vimeo")){var f=new Vimeo.Player(a(c));f.play()}a(b).parents("section").find(a(b).attr("data-modal")).css("display",
"table").click(function(){-1!==e.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");-1!==e.indexOf("vimeo")&&f.pause();a(this).css("display","none").off("click");b.parents("section").css("z-index","0")})};a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
-1!==b.indexOf("youtu")?a(this).attr("src","https://youtube.com/embed/"+c[6]+"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a(this).attr("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0")});a("[data-modal]").click(function(){c(a(this))})}});if(!f&&!a.isMobile()){var m=a("section.menu"),q=a(window).width();!m.find(".navbar").hasClass("collapsed")&&991<q&&(m.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&
a(this).find("a")[0].click()}),m.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}f||0!=a(".mbr-slider.carousel").length&&a(".mbr-slider.carousel").each(function(){var c=a(this),b=c.find(".carousel-control"),d=c.find("carousel-indicators li");c.on("slide.bs.carousel",function(){b.bind("click",function(a){a.stopPropagation();a.preventDefault()});d.bind("click",
function(a){a.stopPropagation();a.preventDefault()});c.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){b.unbind("click");d.unbind("click");c.carousel({keyboard:!0});1<c.find(".carousel-item.active").length&&(c.find(".carousel-item.active").eq(1).removeClass("active"),c.find(".carousel-control li.active").eq(1).removeClass("active"))})});if(f)a(document).on("add.cards",function(c){a(c.target).find(".form-with-styler").length&&(c=a(c.target).find(".form-with-styler"),a(c).find('select:not("[multiple]")').each(function(){a(this).styler()}),
a(c).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")}),a(c).find("input[type=date]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(c).find("input[type=time]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"H:i",datepicker:!1})}))});else a("section .form-with-styler").each(function(){a(this).find('select:not("[multiple]")').each(function(){a(this).styler()});
a(this).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")});var c;c=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)?!0:!1;!c&&a(this).datetimepicker&&(a(this).find("input[type=date]").each(function(){a(this).datetimepicker({format:"Y-m-d",
timepicker:!1})}),a(this).find("input[type=time]").each(function(){a(this).datetimepicker({format:"H:i",datepicker:!1})}))});a(document).on("change",'input[type="range"]',function(c){a(c.target).parents(".form-group").find(".value")[0].innerHTML=c.target.value})})(jQuery);
