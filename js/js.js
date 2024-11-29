document.querySelectorAll('.slide').forEach(slide => {
    slide.addEventListener('mouseover', () => {
        slide.style.boxShadow = '0 0 20px 10px rgba(0, 255, 255, 0.8)';
        slide.style.filter = 'brightness(1.3)'; 
        slide.style.transition = 'box-shadow 0.3s ease, filter 0.3s ease';
    });
    
    slide.addEventListener('mouseout', () => {
        slide.style.boxShadow = 'none';
        slide.style.filter = 'brightness(1)';
    });
});
