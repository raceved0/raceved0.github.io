(function ($) {
    "use strict";
    var $container = $(".parallax");
    var $divs = $container.find("div.parallax-background");
    var thingBeingScrolled = $(window);
    var liHeight = $divs.eq(0).closest("li").height();
    var difHeight = ($divs.eq(0).height() - liHeight)/2;
    var len = $divs.length;
    var i, div, li, offset, scroll, top, transform;
    
    var offsets = $divs.get().map(function (div, d) {
            return $(div).offset();
    });
    
    var render = function () {
        top = thingBeingScrolled.scrollTop();
        for (i = 0; i < len; i += 1) {
            div = $divs[i];
            offset = top - offsets[i].top;
            scroll = ~~(offset / liHeight * difHeight);
            transform = 'translate3d(0px, ' + scroll + 'px, 0px)';
            div.style.webkitTransform = transform;
            div.style.MozTransform = transform;
            div.style.msTransform = transform;
            div.style.OTransform = transform;
            div.style.transform = transform;
       }
   };
   (function loop() {
       requestAnimationFrame(loop);
       render();
   })();
})(jQuery);