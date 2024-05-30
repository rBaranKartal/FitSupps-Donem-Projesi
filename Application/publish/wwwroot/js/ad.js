let slideIndex = 0;

function showAds() {
    const ads = document.querySelectorAll('.ad-content img');
    if (slideIndex >= ads.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = ads.length - 1; }
    const offset = -slideIndex * 100;
    document.querySelector('.ad-content').style.transform = `translateX(${offset}%)`;
}

function nextAd() {
    slideIndex++;
    showAds();
}

function prevAd() {
    slideIndex--;
    showAds();
}