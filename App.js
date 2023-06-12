const scrollToTopButton = document.getElementById('scrollToTopButton');
const scrollToTheMiddle = document.getElementById('scrollToTheMiddle');
const mainSection = document.querySelector('.main');
const activityListItem = document.querySelector('.list .activity');
const dynamicHeader = document.getElementById('dynamic-header');
const headerTexts = [
    "Gravity Crushers",
    "Board Blazers",
    "Grind Kings"
];
let currentHeaderText = headerTexts[0];


scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
scrollToTheMiddle.addEventListener('click', () => {
    window.scrollTo({
        top: mainSection.offsetTop,
        behavior: 'smooth'
    });
});
activityListItem.addEventListener('click', () => {
    window.scrollTo({
        top: mainSection.offsetTop,
        behavior: 'smooth'
    });
});


dynamicHeader.textContent = currentHeaderText;
dynamicHeader.classList.add('fade-in');

function changeHeaderText() {
    const currentIndex = headerTexts.indexOf(currentHeaderText);

    const nextIndex = (currentIndex + 1) % headerTexts.length;

    dynamicHeader.classList.remove('fade-in');
    dynamicHeader.classList.add('fade-out');

    setTimeout(() => {
        dynamicHeader.textContent = headerTexts[nextIndex];
        dynamicHeader.classList.remove('fade-out');
        dynamicHeader.classList.add('fade-in');
        currentHeaderText = headerTexts[nextIndex];
    }, 500); // Adjust the duration to match the transition in the CSS
}

setInterval(changeHeaderText, 3000);