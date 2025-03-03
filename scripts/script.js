function loadSkeleton() {
    console.log($('#navbarTop').load('./components/nav_top.html'));
    console.log($('#navbarBottom').load('./components/nav_bottom.html'));
    console.log($('#footer').load('./components/footer.html'));
}
loadSkeleton();