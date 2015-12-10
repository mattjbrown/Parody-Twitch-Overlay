var marquee = 0;

function showCrapAroundScreen(canvas, scrollCanvas) {
    var topDonation = _.max(donationList, function (donation) { return parseFloat(donation.amount); });
    var mostRecentDonation = donationList[donationList.length - 1];
    var donationTotal = 0;
    donationList.forEach(function (donation) {
        donationTotal += parseFloat(donation.amount) || 0;
    });
    
    var context = canvas.getContext("2d");
    
    var dxStart = 5;
    var dyStart = canvasSizeY - 65;
    
    context.clearRect(dxStart, 5, canvas.width, 70);
    context.clearRect(dxStart, dyStart - 30, canvas.width, 80);
    
    context.font = "30px Comic Sans MS";
    context.fillStyle = 'rgb(255, 255, 255)';
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    
    var topDonationMessage = topDonation && topDonation.amount > 0 ? topDonation.name + ' $' + topDonation.amount : 'None';
    
    context.fillText('Top Donation: ' + topDonationMessage, dxStart, dyStart);
    context.strokeText('Top Donation: ' + topDonationMessage, dxStart, dyStart);
    
    var mostRecentDonationMessage = mostRecentDonation ? mostRecentDonation.name + ' $' + mostRecentDonation.amount : 'None';
    
    context.fillText('Most Recent: ' + mostRecentDonationMessage, dxStart, dyStart + 35);
    context.strokeText('Most Recent: ' + mostRecentDonationMessage, dxStart, dyStart + 35);
    
    context.fillText('AGDQ Donation Goal: ' + donationTotal + ' / ' + 800, 5, 35);
    context.strokeText('AGDQ Donation Goal: ' + donationTotal + ' / ' + 800, 5, 35);
    
    context.textAlign = 'right';
    context.fillText('Sub Goal: ' + subscriberList.length + ' / ' + subGoal, canvasSizeX - 5, 35);
    context.strokeText('Sub Goal: ' + subscriberList.length + ' / ' + subGoal, canvasSizeX - 5, 35);
    context.fillText('Follower Goal: ' + followerList.length + ' / ' + followerGoal, canvasSizeX - 5, 70);
    context.strokeText('Follower Goal: ' + followerList.length + ' / ' + followerGoal, canvasSizeX - 5, 70);
    context.textAlign = 'left';
    
    //--- Move to own thing, separate canvas ---
    
    var donationsByAmount = _.sortBy(donationList, 'amount');
    
    var message = '';
    donationsByAmount.forEach(function(donation) {
        message += donation.name + ': $';
        message += donation.amount + '  ';
    });
    
    var scrollContext = scrollCanvas.getContext("2d");
    scrollContext.clearRect(0, 0, scrollCanvas.width, scrollCanvas.height);
    
    var expectedMessageWidth = scrollContext.measureText(message).width;
    var desiredGap = 200;
    var roomToDrawAgain = marquee < (expectedMessageWidth + desiredGap) * -1;
    
    scrollContext.font = "30px Comic Sans MS";
    scrollContext.fillStyle = 'rgb(255, 255, 255)';
    scrollContext.lineWidth = 1;
    scrollContext.strokeStyle = 'black';
    scrollContext.textAlign = 'left';
    scrollContext.fillText(message, scrollCanvas.width + marquee--, dyStart + 35);
    scrollContext.strokeText(message, scrollCanvas.width + marquee--, dyStart + 35);
    
    if (roomToDrawAgain) {
        scrollContext.fillText(message, scrollCanvas.width + expectedMessageWidth + desiredGap + marquee, dyStart + 35);
        scrollContext.strokeText(message, scrollCanvas.width + expectedMessageWidth + desiredGap + marquee, dyStart + 35);
    }
    
    if (marquee < (expectedMessageWidth + scrollCanvas.width + desiredGap) * -1) {
        marquee = -1 * scrollCanvas.width;
    }
}