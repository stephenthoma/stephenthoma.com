var waypoint;
var largeHeaderClass = 'header-large';
var header = document.getElementsByClassName('header')[0];
var story = document.getElementsByClassName('story')[0];
function resizeHeader() {
    if (window.getComputedStyle(story)['margin-top'] !== '100px') { // Check not mobile
        if (document.body.scrollTop < 100) {
            // Resize when at top of page from small to large must
            header.classList.add(largeHeaderClass); // make large w/o scroll trigger
        }

        if ( waypoint === undefined ) {
            waypoint = new Waypoint({
                element: story,
                handler: resizeByDirection,
                offset: '10%'
            });
        } else {
            waypoint.enable();
        }
    } else { // Mobile
        header.classList.remove(largeHeaderClass);
        waypoint && waypoint.disable();
    }
}

function resizeByDirection(direction) {
    if (direction === 'down') {
        header.classList.remove(largeHeaderClass);
    } else if (direction === 'up') {
        header.classList.add(largeHeaderClass);
    }
}

document.addEventListener('DOMContentLoaded', resizeHeader);
(function() {
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function() {
                resizeTimeout = null;
                resizeHeader();
            }, 66);
        }
    }
}());
