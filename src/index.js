console.log("%c HI", "color: firebrick");

//Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// fetch(imgUrl)
//   .then(function (response) {
//     // console.log(response.json())
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json);
//   });

const dogImageContainer = document.getElementById("dog-image-container");
const fetchImages = async () => {
  const res = await fetch(imgUrl);
  const data = res.json().then((data) =>
    data.message.map((message) => {
      //   console.log(message);
      const imageP = document.createElement("p");
      imageP.innerHTML = `<img src="${message}" />`;
      dogImageContainer.appendChild(imageP);
    })
  );
};

//Challenge 2, Challenge 3, Challenge 4
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedListPart = document.getElementById("dog-breeds");

const fetchBreed = async (selectedLetter) => {
  breedListPart.innerHTML = "";
  const res = await fetch(breedUrl);
  const data = res.json().then((data) => {
    console.log(selectedLetter);
    Object.keys(data.message).map((message) => {
      if (selectedLetter === undefined) {
        const breedList = document.createElement("li");
        breedList.innerHTML = `<p>${message}</p>`;
        breedListPart.appendChild(breedList);
        breedList.addEventListener("click", () => {
          breedList.style.color = "green";
        });
      } else {
        if (message.charAt(0) === selectedLetter) {
          const breedList = document.createElement("li");
          breedList.innerHTML = `<p>${message}</p>`;
          breedListPart.appendChild(breedList);
        }
      }
    });
  });
};

const dropdown = document.querySelector("#breed-dropdown");
dropdown.addEventListener("change", () => {
  const value = dropdown.options[dropdown.selectedIndex].value;
  // console.log(value);
  // selectedLetter = value;
  fetchBreed(value);
});
