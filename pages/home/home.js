document.addEventListener("mousemove", parallax);
function parallax(event) {
    const image = this.querySelector("#hero-portrait");
    const overlay = this.querySelector('#overlay');
    const position = image.getAttribute("value");
    const x = -((event.pageX / window.innerWidth)) * 40;
    const y = -((event.pageY / window.innerHeight)-0.5) * 20;

    image.style.background = `url("assets/bio-photo.png") bottom right ${x}px / cover`;
    // overlay.style.bottom = `${y}px`;
    overlay.style.right = `${x}px`;
}


document.addEventListener('DOMContentLoaded', () => {
    const scrollingImages = document.querySelectorAll('.Scroll > img');
    const imageContainer = document.querySelector('.Scroll');

    let vals = []
    scrollingImages.forEach(image => {
        vals.push({
            initial: 80,
            currentPosition: 0,
            scrollSpeed: 0.5
        });
    });

    vals[1].scrollSpeed = 0.3;

    function scrollImage() {
        scrollingImages.forEach((image, i) => {
            vals[i].currentPosition += vals[i].scrollSpeed;
            image.style.left = vals[i].initial - vals[i].currentPosition + 'px';

            // Reset the position when the image is completely off-screen
            let new_end = vals[i].currentPosition  >= (image.width/2);
            if (new_end) {
                // currentPosition = imageContainer.clientWidth;
                vals[i].currentPosition = 0;
            }
        })
    }

    // Set the interval to scroll the image
    const scrollInterval = setInterval(scrollImage, 10);
});