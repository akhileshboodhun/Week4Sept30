var myData = "";

async function getData() {
    showLoading();
    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";
    await fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            processData(data);
            funct1(data);
        })
        .catch((err) => handleError(err));
}

function processData(data) {
    myData = data["Mauritius"].slice(-1);
    console.table(myData);

}


function handleError(err) {
    console.warn("Data not reachable");
}


function funct1(data) {

    myData = data["Mauritius"].slice(-1)[0];
    console.log(myData["date"]);
    document.getElementsByClassName("title")[0].innerHTML += '<p>' + myData["date"] + '</p>';
    document.getElementById("confirmed").innerHTML += '<p>' + myData["confirmed"] + '</p>';
    document.getElementById("deaths").innerHTML += '<p>' + myData["deaths"] + '</p>';
    document.getElementById("recovered").innerHTML += '<p>' + myData["recovered"] + '</p>';
}

$ = (query) => document.querySelector(query);

function showLoading() {
    document.getElementsByClassName("loading")[0].style.display = "block";
    document.getElementsByClassName("covid")[0].style.display = "none";
}

function hideLoading() {
    document.getElementsByClassName("loading")[0].style.display = "none";
    document.getElementsByClassName("covid")[0].style.display = "block";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function ready() {

    await getData();
    await sleep(2000);
    hideLoading();
}

ready();