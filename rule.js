let btn = document.querySelector('header button');
let searchText = document.querySelector('header input[type="text"]');
let searchResults = document.getElementById("searchResults");
btn.addEventListener("click", function () {
   console.log("clicked");

    searchResults.innerHTML = "";
    fetchGiphyAPI(searchText.value);

   console.log(searchText.value); 

});
function fetchGiphyAPI(keyword) {
    console.log(keyword);
    if (!keyword) {
        return;
    }
    var url = "https://api.giphy.com/v1/gifs/search";
    var params = "api_key=TOze5bC8cmXEXK63iA8eDayvnKwE6QNJ&limit=5&q=" + encodeURIComponent(keyword);
    var xhr = new XMLHttpRequest();
           

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
           
            processResponse(this.responseText);
        }
    });

    xhr.open("GET", url + "?" + params);
    xhr.send();
}
function processResponse(responseText) {
    var resp = JSON.parse(responseText);

    for (item of resp.data) {
        let imgElement = document.createElement("img");
        imgElement.src = item.images.downsized_medium.url;
        imgElement.alt = item.title;
        searchResults.appendChild(imgElement);
    }
}