const div = document.getElementById("Animal-details");
let url = "http://localhost:3000/characters"  //this is the API which is hosted inside localhost dbjson
// this function fetches data from server
function getAllAnimals() {
 fetch(url)   //API that is hosted within the localhost dbjson
    .then((res) => res.json()) //the response brings a promise then converted in json format
    .then((data) => {
      console.log(data);
      //we are looping through the array data of each Animcharactersal
      data.forEach((characters) => {
        let span = document.createElement("span");
        span.textContent = characters.name;
        span.addEventListener("click", (e) => {
          let name = document.getElementById("name");
          name.textContent = characters.name;
          let img = document.getElementById("img");
          img.src = characters.image;
          let voteCounts = document.getElementById("count-vote");
          let votes = parseInt(characters.votes)
          voteCounts.textContent = votes
          let addVotes = document.querySelector("#add-votes")
          addVotes.addEventListener("click",function(){
            voteCounts.textContent = votes++
          })
        });
        div.appendChild(span);
      });
    });
}
getAllAnimals();



//resets the count to 0
let reset = document.getElementById("reset-button");
reset.addEventListener("click", (e) => {
  let totalVotes = document.getElementById("count-vote");
  totalVotes.innerHTML = 0;
});



