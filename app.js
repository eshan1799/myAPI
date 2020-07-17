const url = "https://api.unsplash.com/"
fetch(url)
.then(addPic)
.catch(error => console.warn("Somthing's not right...", error))

function addPic(data){
    const footer = document.getElementById('addHere');
    const image = document.createElement('img');
    image.setAttribute("href", `${data}.raw`)
}