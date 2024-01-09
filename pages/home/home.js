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
    const scrollingImage = document.getElementById('scroll-image');
    const imageContainer = document.querySelector('.Scroll');

    let currentPosition = 0;
    const scrollSpeed = 0.5; // Adjust the scrolling speed as needed

    function scrollImage() {
        currentPosition -= scrollSpeed;
        scrollingImage.style.left = currentPosition + 'px';

        // Reset the position when the image is completely off-screen
        new_end = currentPosition <= - (scrollingImage.width / 2);
        if (new_end) {
            // currentPosition = imageContainer.clientWidth;
            currentPosition = 0;
        }
    }

    // Set the interval to scroll the image
    const scrollInterval = setInterval(scrollImage, 10);
});