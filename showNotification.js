function showNotification(canvas, showDuration, callback, firstLine, firstLineSize, secondLine, secondLineSize, message, specificAudio, specificImg) {
    var context = canvas.getContext("2d");
    
    var images = document.getElementsByTagName("img");
    var sounds = document.getElementsByTagName("audio");
    var randomImage = specificImg || images[rng(0, images.length - 1)];
    
    var randomAudio = specificAudio || sounds[rng(0, sounds.length - 1)];
    
    var shouldPlayBandit = rng(1, 100);
    
    if (shouldPlayBandit >= 98) {
        randomAudio = cancerBandit;
    }
    
    randomAudio.mediaGroup = 'choo';
    
    var dxStart = Math.floor((rng(0, 4) * .1) * canvasSizeX)
    var dyStart = Math.floor((rng(2, 4) * .1) * canvasSizeY)
    var dxSize = Math.floor(.6 * canvasSizeX)
    var dySize = message ? Math.floor(.4 * canvasSizeY) : Math.floor(.2 * canvasSizeY)
    
    var boxColor = 'rgba(' + rngColor() + ',';
    var firstLineColor = 'rgba(' + rngColor() + ',';
    var secondLineColor = 'rgba(' + rngColor() + ',';
    var messageColor = 'rgba('  + rngColor() + ',';
    
    function drawNotification(alpha) {
        context.globalAlpha = alpha;
        context.fillStyle = boxColor + alpha + ')';
        context.fillRect(
            dxStart,
            dyStart,
            dxSize,
            dySize);
            
        context.drawImage(randomImage, dxStart + 5, dyStart + 5, 100, 100);        
        context.font = firstLineSize + "px Comic Sans MS";
        context.fillStyle = firstLineColor + alpha + ')';
        context.fillText(firstLine, dxStart + 110, dyStart + 55);
        context.font = secondLineSize + "px Comic Sans MS";
        context.fillStyle = secondLineColor + alpha + ')';
        context.fillText(secondLine, dxStart + 110, dyStart + 110);
        if (message) {
            context.fillStyle = messageColor + alpha + ')';
            context.font = "30px Comic Sans MS";
            wrapText(context, "Message: " + message, dxStart + 5, dyStart + 160, dxSize, 35, 4);
        }
        context.globalAlpha = 1;
    }
    
    fade(canvas, 0, 1, drawNotification, 3, 0.015, function () {
        var interval = setInterval(function() {
            if (timeOnScreen >= showDuration) {
                fade(canvas, 1, 0, drawNotification, 3, 0.015, callback);
                clearInterval(interval);
            }
            else {
                drawNotification(1);
            }
            timeOnScreen += 100;
        }, 100);
    });

    if (_.isFunction(randomAudio)) {
        randomAudio();
    }
    else {
        randomAudio.volume = 0.20;
        randomAudio.play();
    }
    
    setTimeout(function () {
        if (message) {
            responsiveVoice.speak(message, "US English Female", { volume: 0.4, rate: 0.9 });
        }
    }, 3000);
    
    var timeOnScreen = 0;
}