function createFallingElement() {
    const element = document.createElement('div');
    element.className = 'falling-element';
    element.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // Random horizontal position
    document.getElementById('container').appendChild(element);

    setTimeout(() => {
        element.remove(); // Remove the element after animation
    }, 4000); // Should match the animation duration
}

setInterval(createFallingElement, 2000); // Create elements every 2 seconds
