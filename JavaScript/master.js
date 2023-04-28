let btn = document.querySelector("button")
let input = document.querySelector("input")
let form = document.querySelector("form")
let errorIcon = document.querySelector(".error-icon")

let regExp = /[\w-.]+@[\w-]+\.[\w-]{2,4}/ig

btn.addEventListener("click" , (e) => {
    if (input.value === "" || input.value.match(regExp) === null) {
        e.preventDefault()
        input.classList.add("error")
        form.classList.add("error")
        errorIcon.classList.add("error")
    }
})