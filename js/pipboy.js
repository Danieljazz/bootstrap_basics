var weapons = [{
    'name': '44_pistol',
    'damage': 48,
    'ammo': 231,
    'fire_rate': 6,
    'range': 119,
    'accuracy': 66,
    'weight': 4.2,
    'caps_value': 99},
    {
    'name': 'assalut_rifle',
    'damage': 30,
    'ammo': 230,
    'fire_rate': 40,
    'range': 119,
    'accuracy': 72,
    'weight': 13.1,
    'caps_value': 144}, 
    {
    'name': 'reba',
    'damage': 37,
    'ammo': 20,
    'fire_rate': 3,
    'range': 131,
    'accuracy': 71,
    'weight': 9.6,
    'caps_value': 55}];

var specials = [{'name': 'strength', 'img': 'https://static.wikia.nocookie.net/fallout/images/a/af/FO76_emote_Strength.gif/revision/latest?cb=20201114072211', 'description': 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.'},
                {'name': 'perception', 'img': 'https://static.wikia.nocookie.net/fallout/images/1/16/FO76_emote_Perception.gif/revision/latest?cb=20201114072429', 'description': 'Perception is your environmental awareness and "sixth sense" and affects weapon accuracyt in V.A.T.S.'},
                {'name': 'endurance', 'img': 'https://static.wikia.nocookie.net/fallout/images/b/bf/FO76_emote_Endurance.gif/revision/latest?cb=20201114072521', 'description': 'Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.'},
                {'name': 'charisma', 'img': 'https://static.wikia.nocookie.net/fallout/images/6/62/FO76_emote_Charisma.gif/revision/latest?cb=20201114072251', 'description': 'Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.'},
                {'name': 'intelligence', 'img': 'https://static.wikia.nocookie.net/fallout/images/3/30/FO76_emote_Intelligence.gif/revision/latest?cb=20201114072345', 'description': 'Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.'},
                {'name': 'agility', 'img': 'https://static.wikia.nocookie.net/fallout/images/9/97/FO76_emote_Agility.gif/revision/latest?cb=20201114072314', 'description': 'Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.'},
                {'name': 'luck', 'img': 'https://static.wikia.nocookie.net/fallout/images/e/e3/FO76_emote_Luck.gif/revision/latest?cb=20201114072407', 'description': 'Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.'}]
// STAT TAB
    // SPECIAL
    var specialsItem = document.getElementsByClassName('specials-items')[0]

specialsItem.addEventListener('mouseover', function(e){
    itemClass = e.target.className.replace(' stick-left', '')
    console.log(itemClass)
    specials.forEach(item =>{
        if(item['name'] === itemClass){
            document.getElementById('special-img').src  = item['img'];
            document.getElementById('special-description-p').innerText = item['description']
        }
    })
    
})
    // PERKS



//INV tab
// weapon stat update
var weapon_container = document.getElementsByClassName('item-list')[0]
let item_list = document.querySelectorAll('#weapons-tab > ul > li > a')
//console.log(item_list)
item_list.forEach(item =>{
    item.addEventListener('click', function(){
        for(const item of item_list){
            item.classList.remove('active');
        }
        this.classList.add('active');
    });
});
weapon_container.addEventListener('mouseover', function(e){
    //console.log(e.target.className);
    var chosen_weapon = (e.target.className).replace(' active', '');
    console.log(chosen_weapon)
    weapons.forEach(w => {
        if (chosen_weapon === w['name']){
            console.log(w);
            var stat_container = document.getElementsByClassName('item-stats')[0];
            stat_container.getElementsByClassName('damage')[0].nextElementSibling.getElementsByClassName('value')[0].innerHTML = w['damage'];
            stat_container.getElementsByClassName('ammo')[0].nextElementSibling.innerHTML = w['ammo'];
            stat_container.getElementsByClassName('fire_rate')[0].nextElementSibling.innerHTML = w['fire_rate'];
            stat_container.getElementsByClassName('range')[0].nextElementSibling.innerHTML = w['range'];
            stat_container.getElementsByClassName('accuracy')[0].nextElementSibling.innerHTML = w['accuracy'];
            stat_container.getElementsByClassName('weight')[0].nextElementSibling.innerHTML = w['weight'];
            stat_container.getElementsByClassName('caps_value')[0].nextElementSibling.innerHTML = w['caps_value'];
        }
    });
    
})