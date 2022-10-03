
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