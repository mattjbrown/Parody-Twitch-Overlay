var welcome = new Audio();
welcome.src = 'groups/welcome.mp3';

var pre = [
    new Audio('groups/p_fake.mp3'),
    new Audio('groups/p_blue.mp3'),
    new Audio('groups/p_bat.mp3'),
    new Audio('groups/p_cat.mp3'),
    new Audio('groups/p_swag.mp3'),
    new Audio('groups/p_wacky.mp3'),
    new Audio('groups/p_insane.mp3'),
    new Audio('groups/p_wheres.mp3'),
    new Audio('groups/p_whens.mp3'),
    new Audio('groups/p_tsundere.mp3'),
    new Audio('groups/p_yandere.mp3'),
    new Audio('groups/p_deredere.mp3'),
    new Audio('groups/p_little.mp3'),
    new Audio('groups/p_trihard.mp3'),
    new Audio('groups/p_magical.mp3'),
    new Audio('groups/p_secret.mp3'),
    new Audio('groups/p_final.mp3'),
    new Audio('groups/p_big.mp3')
];

var first = [
    new Audio('groups/f_bolt.mp3'),
    new Audio('groups/f_man.mp3'),
    new Audio('groups/f_bat.mp3'),
    new Audio('groups/f_cat.mp3'),
    new Audio('groups/f_pie.mp3'),
    new Audio('groups/f_darcy.mp3'),
    new Audio('groups/f_narcy.mp3'),
    new Audio('groups/f_swag.mp3'),
    new Audio('groups/f_hsports.mp3'),
    new Audio('groups/f_cancer.mp3'),
    new Audio('groups/f_wigglers.mp3'),
    new Audio('groups/f_sellout.mp3'),
    new Audio('groups/f_clown.mp3'),
    new Audio('groups/f_wobblers.mp3'),
    new Audio('groups/f_ellizardo.mp3'),
    new Audio('groups/f_bracers.mp3'),
    new Audio('groups/f_joshua.mp3'),
    new Audio('groups/f_teepo.mp3'),
    new Audio('groups/f_elize.mp3'),
    new Audio('groups/f_visualnovel.mp3'),
    new Audio('groups/f_umineko.mp3'),
    new Audio('groups/f_mumble.mp3'),
    new Audio('groups/f_illuminati.mp3'),
    new Audio('groups/f_twitchbux.mp3'),
    new Audio('groups/f_souls.mp3'),
    new Audio('groups/f_prinny.mp3'),
    new Audio('groups/f_fantasy.mp3'),
    new Audio('groups/f_boss.mp3')
];

var last = [
    new Audio('groups/l_crew.mp3'),
    new Audio('groups/l_group.mp3'),
    new Audio('groups/l_clan.mp3'),
    new Audio('groups/l_family.mp3'),
    new Audio('groups/l_wall.mp3'),
    new Audio('groups/l_guild.mp3'),
    new Audio('groups/l_brigade.mp3'),
    new Audio('groups/l_team.mp3'),
    new Audio('groups/l_bandits.mp3'),
    new Audio('groups/l_squad.mp3'),
    new Audio('groups/l_posse.mp3'),
    new Audio('groups/l_league.mp3'),
    new Audio('groups/l_fanclub.mp3'),
    new Audio('groups/l_supportgroup.mp3'),
    new Audio('groups/l_bookclub.mp3'),
    new Audio('groups/l_hotline.mp3'),
    new Audio('groups/l_mercinaries.mp3'),
    new Audio('groups/l_army.mp3'),
    new Audio('groups/l_network.mp3')
];

function makeFunnyGroupName() {    
    var hasPrefix = rng(1, 100) > 70;
    var audios = [];
    
    audios.push(welcome);

    if (hasPrefix) {
        audios.push(pre[rng(0, pre.length - 1)]);
    }
    audios.push(first[rng(0, first.length - 1)]);
    audios.push(last[rng(0, last.length - 1)]);
    
    var duration = 0;
    setTimeout(function () {
        for (i = 0; i < audios.length; i++) {
            playAfter(audios[i], duration);
            duration += audios[i].duration * 1000 - 50;
        }
    }, 100);
}

function playAfter(audio, duration) {
    setTimeout(function () {
        audio.volume = .2;
        audio.play();
    }, duration);
}