let barBtn = "hide"
let menuBar = document.querySelector(".menuBar")
let menuLink = document.querySelector("#menuLink")

menuBar.addEventListener("click", () => {
    if(barBtn === "hide") {
        barBtn = "active"
        menuLink.classList.remove("hide")
        menuLink.classList.add("active")
        menuBar.classList.remove("fa-bars")
        menuBar.classList.add("fa-xmark")
    }

    else{
        barBtn = "hide"
        menuLink.classList.remove("active")
        menuLink.classList.add("hide")
        menuBar.classList.remove("fa-xmark")
        menuBar.classList.add("fa-bars")
    }
})