document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelectorAll('.fade-in').forEach(function(element) {
            element.classList.add('active');
        });
    }, 500); // Agrega un retraso de 0.5 segundos


    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');

    // Autoplay audio
    audio.muted = true; // Keep muted for autoplay policies
    audio.play();

    playButton.addEventListener('click', function() {
        // Unmute and play the audio
        audio.muted = false;
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    // Smooth scrolling
    $('a.nav-link').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
