console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function dogImages(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        const images = data.message;
        const imageContainer = document.getElementById('dog-image-container');

        images.forEach(imgURl => {
            const img = document.createElement('img');
            img.src = imgURl;
            img.alt = "Dog Images";
            img.style.width = "300px";

            imageContainer.appendChild(img)
        })
    })
    .catch(error => console.log("Error gettingimages:", error));
}

//DOG BREEDS

const breedUrl = "https://dog.ceo/api/breeds/list/all";

function dogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(dogs => {
        const breeds = Object.keys(dogs.message)
        const dogBreeds = document.getElementById('dog-breeds')

        breeds.forEach(breed =>{
            const li = document.createElement('li');
            li.textContent = breed

            li.addEventListener('click', () => {
                li.style.color = 'green';
                li.style.pointer = 'cursor';
            })
            dogBreeds.appendChild(li);
        })
    })
    .catch(error => console.log("Error fetching dog breeds:", error));
}

function filterBreeds(){
    const letter = document.getElementById('breed-dropdown').value;
    const filtered = breeds.filter(breed => breed.startWith(letter));

}

window.onload = () => {
    dogImages();
    dogBreeds();
}

