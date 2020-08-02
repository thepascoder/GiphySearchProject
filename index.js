let searchForm = document.getElementById('query-form');
let query = document.getElementById('query');
let getGifBtn = document.getElementById('submit_button');
let gifContainer = document.getElementById('gifContainer');
let options = document.querySelector('#types');
let errText = document.getElementById('errModal');
let imgTag = document.getElementById('img');
let reloadBtn = document.getElementById("reload_button");
let searchQueryBox = document.getElementById("searchQeryBox");
let queryList = document.getElementById("queryList");

// might add some more features later in the future hence the multiple decleared variables

reloadBtn.addEventListener('click', function () {
    location.reload(true);
})


getGifBtn.addEventListener('click', function () {
    if (query.value !== '') {
    let wordSearched = document.createElement('span');
    wordSearched.classList.add('spa');
    let srhValue = document.createTextNode(query.value);
    wordSearched.appendChild(srhValue);
    queryList.appendChild(wordSearched);   
    }
})

getGifBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(options.value);
    if (query.value === '') {
        errText.style.backgroundColor = 'rgba(228, 10, 10, 0.7)';
        errText.innerHTML = 'Ermm you didn\'t put in an input :)';
    }
    else {
        fetch(`https://api.giphy.com/v1/${options.value}/search?q=${query.value}&api_key=Z22ZuLdskzpqgBb5VK9uV2awTp4f1zNG&limit=20`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                imgTag.src = data.data[0].images.original.url;
            })
            .catch((err) => {
                errText.style.backgroundColor = 'rgba(228, 10, 10, 0.7)';
                errText.innerHTML = 'Oops, seems  like there is no internet conection :(';
                console.error('there has been a problem with your fetch operation :', err);
            });
    }
});