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

function removeClass(element, elClass){
    element.className = element.className.replace(elClass, ' ');
    console.log('class removed');
}

function addClass(element, parentClass, elClass){
    var current = document.getElementsByClassName(parentClass)[0].getElementsByClassName(elClass)[0]
    console.log('Ten element ma active', current.classList);
    if (current.length > 0){
        removeClass(current[0], ' active');
    }
    element.className += " active";
}

// weapon stat update
var weapon_container = document.getElementsByClassName('item-list')[0]
let item_list = document.querySelectorAll('#weapons-tab > ul > li > a')
console.log(item_list)
item_list.forEach(item =>{
    item.addEventListener('click', function(){
        for(const item of item_list){
            item.classList.remove('active');
        }
        this.classList.add('active');
    });
});
// weapon_container.addEventListener('click', function(e){
//     console.log(e.target)
//    this.classList.add('active');
// });
weapon_container.addEventListener('mouseover', function(e){
    console.log(e.target.className);
    var chosen_weapon = e.target.className;
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