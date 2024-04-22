const API_URL = "https://jsonplaceholder.typicode.com/photos";
const galleryEl = document.getElementById("gallery");
const fetchDataBtnEl = document.getElementById("fetch-data");

async function fetchData() {
  const data = await fetch(API_URL).then((response) => response.json());

  for (let i = 0; i < data.slice(0, 100).length; i++) {
    galleryEl.innerHTML += `<div class="card"><h4>${data[i].title}</h4><img src="${data[i].thumbnailUrl}" /></div>`;
  }
}

fetchDataBtnEl.addEventListener("click", function () {
  fetchData();
});

// https://tinyurl.com/agh-tech-web-js-cwiczenia
