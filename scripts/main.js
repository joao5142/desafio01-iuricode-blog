let temp = setTimeout(function () {
    const iconSvg = document.querySelectorAll('.svg');

    iconSvg.forEach(function (icon) {
        icon.addEventListener('click', function () {
            icon.classList.toggle('active');
        });
    });
}, 500);
