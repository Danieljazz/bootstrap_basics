var liItems = document.querySelectorAll('#stat-tab-item-list >  ul > li > a')
var itemStatContainer = document.querySelectorAll('#general-stat-container > div > div')
liItems.forEach( statItem =>{
    statItem.addEventListener('click', function(e){
        document.getElementById('general-stat-container').getElementsByClassName('generals')[0]
        var activeElement = e.target.classList
        console.log(activeElement)
        for(const item of liItems){
            item.classList.remove('active-green-bg')
        };
        for(const item of itemStatContainer){
            //console.log(item.classList)
            item.classList.remove('active-container')
        };
        var itemContainerClassName = this.classList.remove('stat-tab')
        //console.log(itemContainerClassName)
        var itemContainer = document.getElementById('general-stat-container').getElementsByClassName(activeElement)[0]
        //console.log(itemContainer.c)
        itemContainer.classList.add('active-container')
        this.classList.add('active-green-bg');
        
    });
});

