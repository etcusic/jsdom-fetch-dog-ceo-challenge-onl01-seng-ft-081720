console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getPhotos(object){
    const div = document.getElementById('dog-image-container')
    object.forEach(function(value, key){
        let child = document.createElement("img")
        child.setAttribute("src", `${value}`)
        div.appendChild(child)
    })
}

function getBreeds(object){
    const ul = document.getElementById('dog-breeds')
    let items = object
    for (const item in items) {
        let child = document.createElement("li")
        ul.appendChild(child)
        child.innerHTML = item
    }
}

function fetcher(url, func, string){
    fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(json){
        func(json[string])
    })
}

function otherFetcher(){
    fetch(breedUrl)
    .then(function(response){
        return response.json()
    }).then(function(json){
        getBreeds(json["message"])
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetcher(imgUrl, getPhotos, "message")
    otherFetcher()
})

