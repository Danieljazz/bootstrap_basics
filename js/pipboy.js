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

var apparel = [{'name': 'leather-left-arm','dmg-resist-shield': 1, 'dmg-resist-thunder': 3, 'weight': 2, 'value': 8},
               {'name': 'leather-right-arm','dmg-resist-shield': 1, 'dmg-resist-thunder': 3, 'weight': 2, 'value': 8},
               {'name': 'leather-right-leg','dmg-resist-shield': 2, 'dmg-resist-thunder': 5, 'weight': 2, 'value': 10},
               {'name': 'mining-helmet','dmg-resist-shield': 2, 'dmg-resist-thunder': 2, 'weight': 2, 'value': 8},
               {'name': 'raider-chest-piece','dmg-resist-shield': 1, 'dmg-resist-thunder': 3, 'weight': 2, 'value': 8},
               {'name': 'raider-left-leg','dmg-resist-shield': 1, 'dmg-resist-thunder': 3, 'weight': 2, 'value': 8},
               {'name': 'vault-111-jumpsuit','dmg-resist-shield': 2, 'dmg-resist-thunder': 5, 'weight': 2, 'value': 10},
               {'name': 'wedding-ring','dmg-resist-shield': 2, 'dmg-resist-thunder': 2, 'weight': 2, 'value': 8},
               {'name': 'wedding-goggles','dmg-resist-shield': 2, 'dmg-resist-thunder': 2, 'weight': 2, 'value': 8}]

var tabs = ['weapons-tab', 'apparel-tab', 'aid-tab', 'misc-tab', 'junk-tab', 'mods-tab', 'ammo-tab']


//INV tab
var weapon_container = document.getElementsByClassName('item-list')[0]
var apparel_container = document.getElementById('apparel-tab');


let item_list = document.querySelectorAll('#weapons-tab > ul > li > a')

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
    // console.log(chosen_weapon)
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

apparel_container.addEventListener('mouseover', function(e){
    var chosen_apparel = e.target.className
    apparel.forEach(a => {
        if (chosen_apparel === a['name']){
            console.log(a);
            var stat_container = document.getElementsByClassName('apparel-tab item-stats')[0];
            document.getElementsByClassName('apparel-tab item-stats')[0].getElementsByClassName('shield-value')[0].getElementsByClassName('value')[0].innerHTML = a['dmg-resist-shield'];
            stat_container.getElementsByClassName('thunder-value')[0].getElementsByClassName('value')[0].innerHTML = a['dmg-resist-thunder'];
            stat_container.getElementsByClassName('apparel-weight')[0].nextElementSibling.innerHTML = a['weight'];
            stat_container.getElementsByClassName('apparel-value')[0].nextElementSibling.innerHTML = a['value'];
        }
    });
    
})