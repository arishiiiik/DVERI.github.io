
// Галерея дверей, при нажатии меняется изображение
document.querySelectorAll('.thumbnails img').forEach((thumbnail) => {
    thumbnail.addEventListener('click', function() {
        const mainPhoto = document.querySelector('.main-photo img');
        mainPhoto.src = this.src.replace('thumb', 'main');
    });
});


// Модальное окно
$(document).on('click', '.next-modal', function(e) {
    e.preventDefault();
    $.fancybox.open({
        src: '#modal2',
        opts: {
            animationDuration: 100,
            smallBtn: true,
            toolbar: true
        }
    });
});  