window.onload = function() {
    // Tüm sekmeleri gizle
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Sadece Ürünler sekmesini göster
    var productsTab = document.getElementById('products');
    productsTab.style.display = 'block';
};

function showTab(tabId) {
    // Tüm sekmeleri gizle
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Seçilen sekme hariç diğerlerini gizle
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}