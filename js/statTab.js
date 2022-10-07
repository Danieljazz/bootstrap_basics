
var stats_items = [{'name': 'strength', 'img': 'https://static.wikia.nocookie.net/fallout/images/a/af/FO76_emote_Strength.gif/revision/latest?cb=20201114072211', 'description': 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.'},
{'name': 'perception', 'img': 'https://static.wikia.nocookie.net/fallout/images/1/16/FO76_emote_Perception.gif/revision/latest?cb=20201114072429', 'description': 'Perception is your environmental awareness and "sixth sense" and affects weapon accuracyt in V.A.T.S.'},
{'name': 'endurance', 'img': 'https://static.wikia.nocookie.net/fallout/images/b/bf/FO76_emote_Endurance.gif/revision/latest?cb=20201114072521', 'description': 'Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.'},
{'name': 'charisma', 'img': 'https://static.wikia.nocookie.net/fallout/images/6/62/FO76_emote_Charisma.gif/revision/latest?cb=20201114072251', 'description': 'Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.'},
{'name': 'intelligence', 'img': 'https://static.wikia.nocookie.net/fallout/images/3/30/FO76_emote_Intelligence.gif/revision/latest?cb=20201114072345', 'description': 'Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.'},
{'name': 'agility', 'img': 'https://static.wikia.nocookie.net/fallout/images/9/97/FO76_emote_Agility.gif/revision/latest?cb=20201114072314', 'description': 'Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.'},
{'name': 'luck', 'img': 'https://static.wikia.nocookie.net/fallout/images/e/e3/FO76_emote_Luck.gif/revision/latest?cb=20201114072407', 'description': 'Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.'},
{'name': 'animal_friend', 'img': 'https://static.wikia.nocookie.net/fallout/images/5/56/Fo4_Animal_Friend.png/revision/latest?cb=20151115194851', 'description': 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.'},
{'name': 'big_leagues', 'img': 'https://static.wikia.nocookie.net/fallout/images/0/0f/Fo4_Big_Leagues.png/revision/latest?cb=20160903215452', 'description': 'Swing for the fences! Do 20% more melee weapon damage.'},
{'name': 'bloody_mess', 'img': 'https://static.wikia.nocookie.net/fallout/images/5/5d/Fo4_Bloody_Mess.png/revision/latest?cb=20151115205707', 'description': '+5% bonus damage means enemies sometimes explode into a gory red paste. Watch out for flying eyeballs!'},
{'name': 'pickpocket', 'img': 'https://static.wikia.nocookie.net/fallout/images/7/7a/Fo4_Pickpocket.png/revision/latest?cb=20151115230517', 'description': 'Your quick hands and sticky fingers make picking pockets 25% easier.'},
{'name': 'sniper', 'img': 'https://static.wikia.nocookie.net/fallout/images/8/8b/Fo4_Sniper.png/revision/latest?cb=20151115202842', 'description': "It's all about focus. You have improved control and can hold your breath longer when aiming with scopes."}]

// STAT TAB
// SPECIAL
console.log('hi')
var tabs = ['special-tab', 'perks-tab']

tabs.forEach(tab => {
    var itemClass = document.getElementById(tab)
    itemClass.addEventListener('mouseover', function(e){
        itemClass = e.target.className.replace(' stick-left', '')
        console.log(itemClass)
        stats_items.forEach(item =>{
        if(item['name'] === itemClass){
            imgId = 'special-img ' + tab
            descId = 'special-description-p ' + tab
        document.getElementById(imgId).src  = item['img'];
        document.getElementById(descId).innerText = item['description']
        }
        })
        
        })
})






// PERKS