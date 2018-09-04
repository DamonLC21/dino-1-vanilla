document.addEventListener('DOMContentLoaded',function(){
const getURL = 'https://dino-1-server.herokuapp.com/'
let form = document.querySelector('.job-form')

fetch(getURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(item => createList(item))
    })

const createList = (data) => {
    let container = document.querySelector("#job-listings")
    let list = document.createElement("li")
    let h4 = document.createElement("h4")
    let small = document.createElement("small")
    let small2 = document.createElement("small")
    let p = document.createElement("p")
    h4.innerText = data.title
    small.innerText = data.pay
    p.innerText = data.description 
    small2.innerText = `${data.interested.length} dinos are interested in this job`
    list.append(h4,small,p,small2)
    container.prepend(list)
}


const newListing = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    createList({
      title: data.get("title"),
      pay: data.get("pay"),
      description: data.get("description"),
      interested: []
    });
    event.target.reset();
  }

form.addEventListener("submit", newListing)

})
