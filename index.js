var CSQuotesIndex = 0,
    CSQuotesArray = ["<p align=\"justify\">\"Computer science is no more about computers than astronomy is about telescopes.\"</p><br>Edsger Dijkstra","<p align=\"justify\">\"It had nothing to do with using [programs] for practical things, it had more to do with using them as a mirror of your thought process. To actually learn how to think. I think everyone in this country should learn to program a computer. Everyone should learn a computer language because it teaches you how to think. I think of computer science as a liberal art.\"</p><br>Steve Jobs", "<p align=\"justify\">\"There are only two hard problems in Computer Science: cache invalidation and naming things.\"</p><br>Phil Karlton", "<p align=\"justify\">\"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on eachother, like a wall of mini stones.\"</p><br>Donald Knuth"],
    CSQuoteSentence;
    
var CSPicturesIndex = 0,
    CSPicturesSentence;
    
    
    //CSPicturesArray = ['Steve.png', 'Knuth_b.jpg'],
    var CSPicturesArray = new Array();
    
    CSPicturesArray[0] = new Image();
	CSPicturesArray[0].src = 'Steve.png';
	
	CSPicturesArray[1] = new Image();
	CSPicturesArray[1].src = 'Knuth_b.jpg';
    
    
    
function CSQuoteNext() {
    'use strict';
    CSQuotesIndex += 1;
    CSQuoteSentence.style.opacity = 0;
    if (CSQuotesIndex > (CSQuotesArray.length - 1)) {
        CSQuotesIndex = 0;
    }
    setTimeout(CSQuoteSlide, 1000);
}

function CSPicturesNext() {
    'use strict';
    CSPicturesIndex += 1;
    CSPicturesSentence.style.opacity = 0;
    if (CSPicturesIndex > (CSPicturesArray.length - 1)) {
        CSPicturesIndex = 0;
    }
    setTimeout(CSPicturesSlide, 1000);
}








function CSQuoteSlide() {
    'use strict';
    CSQuoteSentence.innerHTML = CSQuotesArray[CSQuotesIndex];
    CSQuoteSentence.style.opacity = 1;
    setTimeout(CSQuoteNext, 10000);
}

function CSPicturesSlide() {
    'use strict';
    CSPicturesSentence.innerHTML = CSPicturesArray[CSPicturesIndex];
    CSPicturesSentence.style.opacity = 1;
    setTimeout(CSPicturesNext, 10000);
}




(function ($) {
    'use strict';
    $.get("header.html", function (data) {
        $("#header").append(data);
    });
}(jQuery));