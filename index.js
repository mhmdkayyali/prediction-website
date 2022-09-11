const dogid = document.getElementById("dogid");
const submit = document.getElementById("submit");

submit.addEventListener("click", predicting)

fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => Response.json())
    .then(data => {
        if(data.message)
        dogid.innerHTML = `<img src="${data.message}"/>`
    })

// console.log(name)

function predicting(){
    // https://api.genderize.io/?name=nour
    let apiGender = "https://api.genderize.io/?name="
    let name = document.getElementById("name").value
    let genderApiKey = apiGender + name
    console.log(genderApiKey)
    fetch(genderApiKey)
        .then(Response => Response.json())
        .then(data => {
            document.getElementById("gender").innerHTML = data.gender
        })
    
    let apiAge = "https://api.agify.io/?name="
    let name1 = document.getElementById("name").value
    let ageApiKey = apiAge + name1
    console.log(ageApiKey)
    fetch(ageApiKey)
        .then(Response => Response.json())
        .then(data => {
            document.getElementById("age").innerHTML = data.age
        })


}
