
const tabs = document.querySelectorAll('.tabs-title');
const itemContainer = document.querySelectorAll('.item');

for(let i = 0; i < tabs.length; i++) {
    tabs[i].dataset.index = i;
    itemContainer[i].dataset.key = i;

    tabs[i].addEventListener('click', () => {

        for(let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }

        for(let j = 0; j < itemContainer.length; j++) {
            itemContainer[j].style.display = "none";
        }

        itemContainer[i].style.display = "block";
        tabs[i].classList.add('active');
    })
}

itemContainer.forEach((e) => {
    if(e.dataset.key == 0) {
        return;
    }
    e.style.display = "none";
});

