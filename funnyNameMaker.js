var prefixes = ['eg', 'master', 'beyond', 'pro', 'XxX', '420', 'yoloswag', 'mlg', 'Go', 'emp', 'gdq', 'jrta'];

var firstWord = ['boss', 'runner', 'weed', 'yiff', 'cyber', 'the', 'crippe', 'bone', 'flowey', 'rocket', 'siglemic', 'Q', 'wheres', 'whens', 'dave', 'bob', 'bulge', 'skeleton', 'king', 'bat', 'cat', 'pat', 'zach', 'cloud', 'dabe', 'prinny', 'bolt', 'wrecking', 'triswag', 'hung', 'king', 'cancer', 'laughing', 'crying', 'raging', 'god', 'blaze', 'iateyour', 'dia', 'liquid', 'solid', 'talon', 'wheel', '1'];

var secondWord = ['money', 'crab', 'man', 'guy', 'lady', 'it', 'noko', 'bot', 'summit', 'cloud', 'zach', 'wright', 'fury', 'pain', 'sorrow', 'joy', 'fear', 'end', 'bona', 'horse', 'crew', 'mom', 'bandit', 'piss', 'pie', 'marathon', 'monitor', 'bathtub', 'octopus', 'raven', 'wolf', 'ocelot', 'snake', 'framps', 'flamps', 'blamps', 'gramps', 'dad', 'flare', 'ross', 'flame', 'tits', 'joshua', 'boner', 'lord', 'king', 'crew', 'bracer', 'teepo', 'kong', 'bong', 'darcy', 'hex', 'drought', 'den', 'write', 'spore'];

var suffixes = ['gpx', 'XxX', '420', '_____', 'X', 'pnor', 'mon', 'fan', 'sempai', 'sama', 'chan', 'kun', '#'];

function makeFunnyName() {    
    var hasPrefix = rng(1, 100) > 75;
    var hasSuffix = rng(1, 100) > 75;
    var underscores = rng(1, 100) > 75;
    
    var name = '';
    
    if (hasPrefix) {
        name += prefixes[rng(0, prefixes.length - 1)];
        name += underscores ? '_' : '';
    }
    name += firstWord[rng(0, firstWord.length - 1)];
    name += underscores ? '_' : '';
    name += secondWord[rng(0, secondWord.length - 1)];
    if (hasSuffix) {
        var suffix = suffixes[rng(0, suffixes.length - 1)];
        name += underscores ? '_' : '';
        name += suffix === '#' ? rng(0, 9999) : suffix;
    }
    
    return name;
}