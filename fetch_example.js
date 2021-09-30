var myData = "";

function getData() {
    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";
    fetch(API_ENDPOINT)
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
    console.log(myData);
    document.getElementById("confirmed").innerHTML += '<p>' + myData["confirmed"] + '</p>';
    document.getElementById("deaths").innerHTML += '<p>' + myData["deaths"] + '</p>';
    document.getElementById("recovered").innerHTML += '<p>' + myData["recovered"] + '</p>';
}

getData();