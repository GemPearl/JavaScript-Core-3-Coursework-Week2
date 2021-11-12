const divEl = document.getElementById("main");
let h1El = document.createElement("h1");
divEl.appendChild(h1El);
let imgEl = document.createElement("img");

function getImage() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
            throw `${response.status}`;
        })
        .then((data) => {
            h1El.innerHTML = data.title;
            imgEl.setAttribute("src", data.img);
            divEl.appendChild(imgEl);
        })
        .catch((error) => console.log(error));;
}

getImage();