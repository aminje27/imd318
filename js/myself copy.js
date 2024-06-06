document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playlist = document.getElementById('playlist');
    var links = playlist.getElementsByTagName('a');

    audioPlayer.src = links[0].href;
    audioPlayer.play();

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            audioPlayer.src = this.href;
            audioPlayer.play();
            var current = document.querySelector('.active');
            if (current) current.classList.remove('active');
            this.parentNode.classList.add('active');
        });
    }

    audioPlayer.addEventListener('ended', function() {
        var current = document.querySelector('.active');
        var next = current ? current.nextElementSibling : null;
        if (!next) next = playlist.firstElementChild;
        var link = next.getElementsByTagName('a')[0];
        link.click();
    });
});
