function app() {
    
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card');



    function filter (category, items) {
        items.forEach(item => {
            const isItemFilter = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if(isItemFilter && !isShowAll) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
        });
    }
    

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const currentCate = button.dataset.filter; 
            filter(currentCate, cards);
        });
    });
}


app();