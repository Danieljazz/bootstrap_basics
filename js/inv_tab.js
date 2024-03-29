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

var miscItems = [{'name': 'atomic-command', 'weight': 0, 'value': 300},
                {'name': 'bobby-pin','weight': 0, 'value': 1}]

var junkItems = [{'name': 'baseball', 'weight': 0.6, 'value': 4},
                {'name': 'desk-fan','weight': 3, 'value': 4},
                {'name': 'duct-tape', 'weight': 0.1, 'value': 12},
                {'name': 'fancy-hairbrush','weight': 0.5, 'value': 9},
                {'name': 'ladel', 'weight': 0.5, 'value': 2},
                {'name': 'oven-mitt','weight': 1, 'value': 1},
                {'name': 'paint-can', 'weight': 5, 'value': 10},
                {'name': 'resarch-test-tube','weight': 0.1, 'value': 1},
                {'name': 'silver-table-knife', 'weight': 0.1, 'value': 4},
                {'name': 'tin-can','weight': 0.1, 'value': 1},
                {'name': 'toy-rocketship', 'weight': 0.5, 'value': 7},
                {'name': 'unused-flip-lighter','weight': 0.5, 'value': 21},
                {'name': 'wonderglue','weight': 0.1, 'value': 20}]               

var ammoItems = [{'name': '308_round', 'weight': 0, 'value': 3},
                 {'name': '10_mm_round','weight': 0, 'value': 2},
                 {'name': '556_round', 'weight': 0, 'value': 2},
                 {'name': '5_mm_round','weight': 0, 'value': 3},
                 {'name': 'fusion_cell', 'weight': 0, 'value': 3},
                 {'name': 'mini_nuke','weight': 0, 'value': 100},
                 {'name': 'shotgun_shell', 'weight': 0, 'value': 3}] 

var defaultTableItems = miscItems.concat(junkItems, ammoItems);
var defaultTableTabs = ['misc-tab', 'junk-tab', 'ammo-tab']


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

defaultTableTabs.forEach( tab => {
    var tabContainer = document.getElementById(tab)
    tabContainer.addEventListener('mouseover', function(e){
        var itemClass = e.target.className;
        defaultTableItems.forEach(item => {
        if (itemClass === item['name']){
            var itemStatContainer = document.getElementsByClassName(tab, 'item-stats')[0]
            itemStatContainer.getElementsByClassName('weight')[0].nextElementSibling.innerHTML = item['weight']
            itemStatContainer.getElementsByClassName('item-value')[0].nextElementSibling.innerHTML = item['value']
            console.log(itemClass);}
        })
        
    });
});