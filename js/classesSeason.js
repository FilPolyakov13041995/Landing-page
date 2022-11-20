
class Season {
    constructor(img, imgClass, alt, title) {
        this.img = img;
        this.imgClass = imgClass;
        this.alt = alt;
        this.title = title;
    }

    render() {
        const seasonGrid = document.querySelector('.season__grid');
        seasonGrid.insertAdjacentHTML('beforeend', `
            <div class="season__grid-item">
                <figure>
                    <img src=${this.img} class=${this.imgClass} alt=${this.alt}>
                    <figcaption>${this.title}</figcaption>
                </figure>
            </div>
        `);
    }
}
new Season(
    "img-season/4-5-final.jpg",
    "img__fluid",
    "4-5 final",
    "Вторая лига. 4-5 место(финал) ЖЮ - Стэнлес"
).render();
new Season(
    "img-season/5-8-2.jpg",
    "img__fluid",
    "5-8-2",
    "Вторая лига. 5-8 место(второй матч) ЖЮ - Неман-Белкард"
).render();
new Season(
    "img-season/5-8-1.jpg",
    "img__fluid",
    "5-8-1",
    "Вторая лига. 5-8 место(первый матч) Неман-Белкард - ЖЮ"
).render();
new Season(
    "img-season/1-4-otvet.jpg",
    "img__fluid",
    "1/4",
    "Вторая лига. Финальный этап. 1/4(второй матч) Крумкачи - ЖЮ"
).render();
new Season(
    "img-season/1-4.jpg",
    "img__fluid",
    "1/4",
    "Вторая лига. Финальный этап. 1/4(первый матч) ЖЮ - Крумкачи"
).render();
new Season(
    "img-season/1-8-otvet.jpg",
    "img__fluid",
    "1/8",
    "Вторая лига. Финальный этап. 1/8(второй матч) ЖЮ - Новая Припять"
).render();
new Season(
    "img-season/1-8-1.jpg",
    "img__fluid",
    "1/8",
    "Вторая лига. Финальный этап. 1/8(первый матч) Новая Припять - ЖЮ"
).render();
new Season(
    "img-season/final-zona.jpg",
    "img__fluid",
    "1/2",
    "Вторая лига. Финал минской области. Виктория - ЖЮ"
).render();
new Season(
    "img-season/1-2-2.jpg",
    "img__fluid",
    "1/2",
    "Вторая лига. Полуфинал минской области(второй матч) ЖЮ - Бобовня"
).render();
new Season(
    "img-season/1-2-1.jpg",
    "img__fluid",
    "1/4",
    "Вторая лига. Полуфинал минской области(первый матч) Бобовня - ЖЮ"
).render();
new Season(
    "img-season/14.jpg",
    "img__fluid",
    "14",
    "Вторая лига. Минская область. 14 тур. Виктория - ЖЮ"
).render();
new Season(
    "img-season/13.jpg",
    "img__fluid",
    "13",
    "Вторая лига. Минская область. 13 тур. ЖЮ - Березино"
).render();
new Season(
    "img-season/12.jpg",
    "img__fluid",
    "12",
    "Вторая лига. Минская область. 12 тур. Фалько - ЖЮ"
).render();
new Season(
    "img-season/11.jpg",
    "img__fluid",
    "11",
    "Вторая лига. Минская область. 11 тур. ЖЮ - Вилия"
).render();
new Season(
    "img-season/10.jpg",
    "img__fluid",
    "10",
    "Вторая лига. Минская область. 10 тур. ЖЮ - Крупки ДРСУ-164"
).render();
new Season(
    "img-season/9.jpg",
    "img__fluid",
    "9",
    "Вторая лига. Минская область. 9 тур. Колос - ЖЮ"
).render();
new Season(
    "img-season/8.jpg",
    "img__fluid",
    "8",
    "Вторая лига. Минская область. 8 тур. ЖЮ - Единство"
).render();
new Season(
    "img-season/7.jpg",
    "img__fluid",
    "7",
    "Вторая лига. Минская область. 7 тур. ЖЮ - Виктория"
).render();
new Season(
    "img-season/6.jpg",
    "img__fluid",
    "6",
    "Вторая лига. Минская область. 6 тур. Березино - ЖЮ"
).render();
new Season(
    "img-season/1-16-kubok.jpg",
    "img__fluid",
    "1/16 Torpedo",
    "Кубок Беларуси 2022/2023. 1/16. ЖЮ - Торпедо-БелАЗ"
).render();
new Season(
    "img-season/5.jpg",
    "img__fluid",
    "5",
    "Вторая лига. Минская область. 5 тур. ЖЮ - Фалько"
).render();
new Season(
    "img-season/4.jpg",
    "img__fluid",
    "4",
    "Вторая лига. Минская область. 4 тур. Вилия - ЖЮ"
).render();
new Season(
    "img-season/3.jpg",
    "img__fluid",
    "3",
    "Вторая лига. Минская область. 3 тур. Крупки ДРСУ-164 - ЖЮ"
).render();
new Season(
    "img-season/1-32-kubok.jpg",
    "img__fluid",
    "1/32 Belcard",
    "Кубок Беларуси 2022/2023. 1/32. Неман-Белкард - ЖЮ"
).render();
new Season(
    "img-season/2.jpg",
    "img__fluid",
    "2",
    "Вторая лига. Минская область. 2 тур. ЖЮ - Колос"
).render();
new Season(
    "img-season/1-64-kubok.jpg",
    "img__fluid",
    "1/64 Berezino",
    "Кубок Беларуси 2022/2023. 1/64. ЖЮ - Березино"
).render();
new Season(
    "img-season/1.jpg",
    "img__fluid",
    "1",
    "Вторая лига. Минская область. 1 тур. Единство - ЖЮ"
).render();
new Season(
    "img-season/Viliya128.jpg",
    "img__fluid",
    "1/128 Vilia",
    "Кубок Беларуси 2022/2023. 1/128. Вилия - ЖЮ"
).render();