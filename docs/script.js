document.querySelectorAll('.image-container1').forEach(container => {
    container.addEventListener('mouseenter', () => {
        container.querySelector('.hover-text').style.display = 'block';
    });

    container.addEventListener('mousemove', event => {
        const hoverText = container.querySelector('.hover-text');
        const x = event.clientX;
        const y = event.clientY;
        console.log('Mouse X:', x, 'Mouse Y:', y); 
        hoverText.style.left = `${x}px`;
        //hoverText.style.top = `${y}px`; // Adjust the vertical offset as needed.
    });

    container.addEventListener('mouseleave', () => {
        container.querySelector('.hover-text').style.display = 'none';
    });
});
