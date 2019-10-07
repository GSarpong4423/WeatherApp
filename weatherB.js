let apiId = '';
let units = 'imperial';
let searchMethod;


//this function is calling URL with the variables I set up. Then waiting for info then changing to JSON. calling init with resultfrom the server
function searchWeather(searchTerm) {
    fetch('api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units={units}').then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
        
    }
function init(resultFromServer) {
    console.log(resultFromServer)
}
//setting up the button
document.getElementById('searchBtn').addlistener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    //if search term exist
    if(searchTerm)
        // call searchTerm
        seacrchWeather(searchTerm);
})