
window.addEventListener('DOMContentLoaded', () => {
    
    const news = document.querySelector('.news');
    const newsItem = Array.from(news.children);
    const btnNext = document.querySelectorAll('#btnNext');
    const btnPrev = document.querySelector('#btnPrev');

    newsItem.forEach((item, index) => {
        // скрываем все новочти кроме первой.
        if(index !== 0) {
            item.classList.add('hide');
        }

        // добовляем индексы для новостей
        item.dataset.index = index;

        // добовляем data - атрибут active для первой активной новости.
        newsItem[0].setAttribute('data-active', '');
    });

    btnNext.forEach(btn => {
        btn.addEventListener('click', () => {

            // скрываем текущую новость
            const currentNews = news.querySelector('[data-active]');
            const currentNewsIndex = +currentNews.dataset.index;
            currentNews.classList.add('hide');
            currentNews.removeAttribute('data-active');


            // // показываем следующую новость
            const nextNewsIndex = currentNewsIndex + 1 === newsItem.length ? 0 : currentNewsIndex + 1;
            const nextNews = news.querySelector(`[data-index="${nextNewsIndex}"]`);
            nextNews.classList.remove('hide');
            nextNews.setAttribute('data-active', '');
            
        });
    });

    
    btnPrev.addEventListener('click', () => {
    
        // скрываем текущую новость
        const currentNews = news.querySelector('[data-active]');
        const currentNewsIndex = +currentNews.dataset.index;
        currentNews.classList.add('hide');
        currentNews.removeAttribute('data-active');
    
        // показывваем следующий слайд
        const nextNewsIndex = currentNewsIndex === 0 ? newsItem.length - 1 : currentNewsIndex - 1;
        const nextNews = news.querySelector(`[data-index="${nextNewsIndex}"]`);
        nextNews.classList.remove('hide');
        nextNews.setAttribute('data-active', '');
    
    });

});

