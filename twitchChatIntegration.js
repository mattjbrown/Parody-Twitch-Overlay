var options = {
    options: {
        debug: true
    },
    connection: {
        random: "chat",
        reconnect: true
    },
    channels: ["#ivangpx"]
};

var client = new irc.client(options);

// Connect the client to the server..
client.connect();

client.on("chat", function (channel, user, message, self) {
    getCommandDetails(message);
});

function queueUpRandomCommand() {
    var commandType = rng(0, 2);
    
    if (commandType === 0) {
        var cash = rng(1, 200);
        getCommandDetails('!donate ' + cash + ' ' + lastMessage);
    }
    if (commandType === 1) {
        getCommandDetails('!subscribe');
    }
    if (commandType === 2) {
        getCommandDetails('!follow');
    }
}

function getCommandDetails(message) {
    var commandBits = message.split(" ");
    
    var command = commandBits.shift();
    
    if (command === '!donate') {
        var amount = commandBits.shift();
        var message = commandBits.join(" ");
        var name = makeFunnyName();
        
        if (amount) {
            var donation = { 
                amount: amount,
                name: name,
                message: message || ''
            };
            donationList.push(donation);

            commandQueue.push({ 
                func: showNotification,
                params: [
                    8000,
                    '$' + donation.amount + ' from',
                    60,
                    donation.name,
                    60,
                    donation.message
                ]
            });
        }
    }
    
    else if (command === '!subscribe') {        
        var sub = {
            name: makeFunnyName(),
            months: rng(1, 10)
        };
        subscriberList.push(sub);
        
        var subText = sub.months === 1 ? "just subscribed!" : "resubscribed for " + sub.months + " months in a row!"
        subTrainLength++;
        
        commandQueue.push({ 
            func: showNotification,
            params: [ 
                3000,
                sub.name,
                60,
                subText,
                30,
                null,
                makeFunnyGroupName
            ]
        });
    }
    
    else if (command === '!follow') {
        var follower = {
            name: makeFunnyName()
        };
        followerList.push(follower);
        
        commandQueue.push({
            func: showNotification,
            params: [
                3000,
                follower.name,
                60,
                "just followed!",
                30
            ]
        });
    }
    
    else {
        lastMessage = message;
    }
}