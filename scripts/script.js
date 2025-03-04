function loadSkeleton() {
    console.log($('#navbarTop').load('./components/nav_top.html'));
    console.log($('#navbarTopNonUser').load('./components/nav_top_non_user.html'));
    console.log($('#navbarBottom').load('./components/nav_bottom.html'));
    console.log($('#footer').load('./components/footer.html'));
}
loadSkeleton();