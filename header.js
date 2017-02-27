function onScrollEventHandler() {
    "use strict";
    var scrollPostion = window.pageYOffset;
    if (scrollPostion >= -200 && scrollPostion <= 25) {
        document.getElementById("header").style.boxShadow = "0px 0px 0px #a4a4a4";
    } else {
        document.getElementById("header").style.boxShadow = "0px 6px 18px #525252";
    }
    return true;
}

if (window.addEventListener) {
    window.addEventListener('scroll', onScrollEventHandler, false);
} else if (window.attachEvent) {		//Windows Explorer before IE9
    window.attachEvent('onscroll', onScrollEventHandler);
}

/*code.org Logo*/
function letter_Over(id) {
    "use strict";
    var id2 = id++,
        x = document.getElementById(id2),
        y = document.getElementById(id);
    if (event.MOUSEOVER) {
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
    }
}

function letter_Out(id) {
    "use strict";
    var id2 = id--,
        x = document.getElementById(id),
        y = document.getElementById(id2);
    if (event.MOUSEOUT) {
        y.style.visibility = "hidden";
        x.style.visibility = "visible";
    }
}

//http://www.jslint.com/		Check JS code
