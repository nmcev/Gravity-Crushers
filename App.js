const scrollToTopButton = document.getElementById('scrollToTopButton');
const scrollToTheMiddle = document.getElementById('scrollToTheMiddle');
const mainSection = document.querySelector('.main');
const activityListItem = document.querySelector('.list .activity');

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