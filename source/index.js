const div = document.getElementById("Animal-details");
let url = "http://localhost:3000/characters"  //this is the API which is hosted inside localhost dbjson
// this function fetches data from server
function getAllAnimals() {
  let post = fetch(url)   //API that is hosted within the localhost dbjson
    .then((res) => res.json()) //the response brings a promise then converted in json format
    .then((data) => {
      //we are looping through the array data of each Animal
      data.forEach((Animal) => {
        let span = document.createElement("span");
        span.textContent = Animal.name;
        span.addEventListener("click", (e) => {
          let pname = document.getElementById("name");
          pname.textContent = Animal.name;
          let img = document.getElementById("img");
          img.src = Animal.image;
          let voteCounts = document.getElementById("count-vote");
          voteCounts.textContent = Animal.votes;
        });
        div.appendChild(span);
      });
    });
}
getAllAnimals();


// form submit
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // counts votes and returns when clicked
  let countVote = document.getElementById("votes").value;
  console.log(countVote);
  let totalVotes = document.getElementById("count-vote");
  // add votes to the previous votes on each Animal
  let total = parseInt(totalVotes.innerHTML) + parseInt(countVote);
  totalVotes.innerHTML = total;
  form.reset();
});


//resets the count to 0
let reset = document.getElementById("reset-button");
reset.addEventListener("click", (e) => {
  let totalVotes = document.getElementById("count-vote");
  totalVotes.innerHTML = 0;
});
