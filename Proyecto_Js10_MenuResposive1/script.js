const browse = document.querySelector("#menu");
const openBtn= document.querySelector("#btn-open");
const closeBtn= document.querySelector("#btn-close");
let menuOpened = false;

openBtn.addEventListener("click", () => {
    browse.classList.add("visible");
})

closeBtn.addEventListener("click", () => {
    browse.classList.remove("visible");
});
