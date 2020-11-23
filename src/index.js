console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getPhotos(object){
    const div = document.getElementById('dog-image-container')
    object.forEach(function(value, key){
        let child = document.createElement("img")
        child.setAttribute("src", `${value}`)
        div.appendChild(child)
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetch(imgUrl)
    .then(function(response){
        return response.json()
    }).then(function(json){
        getPhotos(json["message"])
    })
})







const breedUrl = 'https://dog.ceo/api/breeds/list/all'

