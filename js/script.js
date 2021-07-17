document.addEventListener("DOMContentLoaded", function () {

const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let email = document.querySelector("input").value

    localStorage.setItem("email", JSON.stringify(email))

    alert("Seu email " + localStorage.getItem("email") + " foi cadastrado com sucesso!")
})

})
