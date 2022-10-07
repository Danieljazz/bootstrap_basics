var radio_list = document.querySelectorAll('#radio-tab > ul > li > a')

radio_list.forEach(item =>{
    item.addEventListener('click', function(){
        for(const item of radio_list){
            item.classList.remove('active-green-bg');
        }
        this.classList.add('active-green-bg');
    });
});