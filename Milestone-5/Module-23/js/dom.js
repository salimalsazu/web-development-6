const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid black';
    section.style.marginBottom = '5px';
    section.style.borderRadius = "5px";
    section.style.background = 'lightgray';
}

const placeContainer = document.getElementById('places-container');
placeContainer.style.background = 'lightblue';
placeContainer.classList.add('text');


