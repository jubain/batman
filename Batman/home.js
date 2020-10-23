/* var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080); */

/* function jumbotron() {
    anime({
        targets: '#linedrawing  .lines path',
        strokeDashoffset: [2, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
}; */

//for calculator
var animation = anime({
    targets: '#about-batman',
    translateX: '80%',
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false
});
var about_background = anime({
    targets: '.about-background',
    easing: 'easeInOutSine',
    backgroundColor: "#262626",
    autoplay: false
});
var scroll = anime({
    targets: '.slideShow',
    easing: 'easeInOutSine',
    position: "sticky",
    autoplay: false
});

/* var animation_heading = anime({
    targets: '#about-heading',
    translateX: '80%',
    opacity: 1,
    easing: 'easeInOutSine',
    autoplay: false
}); */
var slide_show = anime({
    targets: '.slideshow-container',
    opacity: 0.7,
    easing: 'easeInOutSine',
    autoplay: false
});
window.onscroll = function() {
    /* animation_heading.seek(window.pageYOffset * 1.2); */
    about_background.seek(window.pageYOffset);

    animation.seek(window.pageYOffset * 1.1);
    slide_show.seek(window.pageYOffset);
    console.log();
}

window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    if (scrolled >= 741) {
        document.getElementById("about-batman").style.color = "white";
    } else if (scrolled < 968) {
        document.getElementById("about-batman").style.color = "black";
    }
    console.log(scrolled);
})