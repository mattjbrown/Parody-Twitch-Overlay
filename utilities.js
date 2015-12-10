function rng(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function rngColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return r + ',' + g + ',' + b;
}

function wrapText(context, text, x, y, maxWidth, lineHeight, maxLines) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length && maxLines > 0; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
        maxLines--;
      }
      else {
        line = testLine;
      }
    }
    if (maxLines > 0) {
        context.fillText(line, x, y);
    }
}

function fade(canvas, initialAlpha, eventualAlpha, drawStuff, interval, dAlpha, callback) {
    var context = canvas.getContext("2d");

    var alpha = initialAlpha;
    
    var intervalThing = setInterval(function () {
        var drawnAlpha = alpha > 0 ? alpha : 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawStuff(drawnAlpha);
        if (alpha > 1 || alpha < 0) {
            callback();
            clearInterval(intervalThing);
        }        
        alpha += initialAlpha > eventualAlpha ? -1 * dAlpha : dAlpha;
        
    }, interval);
}