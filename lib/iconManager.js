/*!
 * iconManager JavaScript Library v0.1
 *
 * Copyright (c) 2013 snufkon (Twitter: @snufkon)
 * Licensed under the MIT license + "keep this comment block even if you modify it".
 *
 * History:
 *  01-11-2013 new created
 */

var iconManager = function() {
    var ctx;
    
    var draw = function() {
	var imageData = ctx.getImageData(0, 0, 19, 19);
	chrome.browserAction.setIcon({
	    imageData: imageData
	});
    };

    var setBackground = function() {
	ctx.fillStyle = "rgb(167, 0, 0)";
	ctx.fillRect(0, 0, 19, 19);
    };

    var setPeriodName = function() {
	var text = localStorage['periodName'] ? localStorage['periodName'] : '年';
	ctx.font = "bold 1.0em MS明朝";
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillStyle = "rgb(255, 102, 0)";
	ctx.fillText(text, 9.5, 11.0, 19.0);
    };

    return {
	setCanvas: function(id) {
	    var canvas = document.getElementById(id);
	    if (!canvas || !canvas.getContext) return;
	    ctx = canvas.getContext('2d');
	},
	drawOnIcon: function() {
	    setBackground();
	    setPeriodName();
	    draw();
	},
	drawOffIcon: function() {
	    ctx.clearRect(0, 0, 19, 19);
	    setPeriodName();
	    draw();
	},
	setPeriodNumBadge: function() {
	    var num = localStorage['periodNum'] ? localStorage['periodNum'] : 1;
	    chrome.browserAction.setBadgeText({text: String(num)});
	}
    };
}();

