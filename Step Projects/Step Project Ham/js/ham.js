//JS for text

const tabs = document.querySelectorAll(".filter-title");
const projectItemCntainer = document.querySelectorAll(".project-item");

for(let i = 0; i < tabs.length; i++) {
    tabs[i].dataset.index = i;
    projectItemCntainer[i].dataset.key = i;

    tabs[i].addEventListener('click', () => {

        for(let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }

        for(let j = 0; j < projectItemCntainer.length; j++) {
            projectItemCntainer[j].style.display = "none";
        }

        projectItemCntainer[i].style.display = "block";
        tabs[i].classList.add('active');
    })
}

projectItemCntainer.forEach((e) => {
    if(e.dataset.key == 0) {
        return;
    }
    e.style.display = "none";
});


//JS for images

const imageTitleContainer = document.getElementById('image-titles');
const images = document.querySelectorAll('.image-item');

imageTitleContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('image-title')) {
        const title = e.target;
        const type = title.dataset.filterby || 'image-item';
        const isActive = title.classList.contains('active');

        if(!isActive) {
            document.querySelector('.image-title.active').classList.remove('active');
            title.classList.add('active');
            filterByClassName(images,type);
        }
    }
});

function filterByClassName(elements, className) {
    for(let element of elements) {
        element.hidden = !element.classList.contains(className);
    }
}

// JS for Load More Button

$(".image-hidden").slice(0,0).show();

$(".load-more-link").on('click', function(e) {
    e.preventDefault();

    $(".image-hidden:hidden").slice(0,12).slideDown();
    if($(".image-hidden:hidden").length == 0){
        $(".load-more-link").fadeOut();
    }
}) 
