function selectVariant(imageSrc, colorName) {
    // CHANGE MAIN PRODUCT IMAGE
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    mainImage.alt = `Don't Be Late Tee in ${colorName}`;

    // UPDATE COLOR VARIATION
    document.getElementById('selectedColor').textContent = colorName;

    // SYNC COLOR VARIATION ON COLOR SWATCHES
    document.querySelectorAll('.swatch-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === colorName);
    });

    // OPACITY ON ACTIVE & INACTIVE THUMBNAILS
    document.querySelectorAll('.thumb-card').forEach(thumb => {
        thumb.classList.toggle('active', thumb.dataset.color === colorName);
    });
}