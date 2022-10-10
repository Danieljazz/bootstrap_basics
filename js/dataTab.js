var liItems = document.querySelectorAll('#stat-tab-item-list >  ul > li > a')

liItems.forEach( statItem =>{
    statItem.addEventListener('click', function(){
        for(const item of liItems){
            item.classList.remove('active-green-bg')
        };
        this.classList.add('active-green-bg');
    });
});
