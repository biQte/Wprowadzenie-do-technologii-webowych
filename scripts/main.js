document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

document.querySelector('#arrow-up').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('navbar');

    window.scrollTo({
        top: target,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    var arrowUp = document.getElementById('arrow-up');
    if (window.scrollY > 100) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
});
