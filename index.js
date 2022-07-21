let movies = [
    {
        name: "Falcon and the winter Soldier",
        des: "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/falcon.jpeg"
    },
    {
        name: "Wanda Vision",
        des: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
        image: "images/wanda.jpg"
    },
    {
        name: "Loki",
        des: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame",
        image: "images/loki.jpg"
    },
    {
        name: "Thor - Love and Thunder",
        des: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.",
        image: "images/thor.jpg"
    },
    {
        name: "Iron-Man",
        des: "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU).",
        image: "images/iron.jpg"
    }
];

const carousel = document.querySelector('.carousel');

let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // create DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


// video card
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover' , () =>{
        let video = item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    })
})