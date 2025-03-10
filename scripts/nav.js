function navOpen() {
    document.getElementById("sidebar").style.display = "block";
}

function navClose() {
    document.getElementById("sidebar").style.display = "none";
}

function navCurrent() {
    let window = this;
    let current = window.location.pathname;
    console.log(current);
    selectedButton = document.querySelector(`#navbot a[href*="${current}"]`)
    selectedButton.classList.add("border-2");

}

navCurrent();