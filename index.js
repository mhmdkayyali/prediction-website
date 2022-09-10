const dogid = document.getElementById("dogid");
const submit = document.getElementById("submit");

submit.addEventListener("click", predicting)

function predicting (){
fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => Response.json())
    .then(data => {
        if(data.message)
        dogid.innerHTML = `<img src="${data.message}"/>`
    })
}
