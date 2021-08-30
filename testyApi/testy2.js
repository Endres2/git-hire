var searchBtn = document.querySelector("#search-button");
var citiesList = document.querySelector("#cities-list");
var resultContentEl = document.querySelector('#result-content');
var resultText = document.querySelector("#result-text");
var cityHead = document.querySelector("#city-head");
var cityBtn = document.querySelector("#city-button");


function printResults(newJobs) {
    console.log(newJobs);

    var resultCard = document.createElement('div');
    resultCard.classList.add('card', 'mb-3', 'p-3');

    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    var titleContentEl = document.createElement('p');
    titleContentEl.innerHTML =
        '<strong>Job Title: </strong> ' + newJobs.title + '<br/>';

    var companyContentEl = document.createElement('p');
    companyContentEl.innerHTML =
        '<strong>Company Name: </strong> ' + newJobs.company.display_name + '<br/>';

    var locationContentEl = document.createElement('p');
    locationContentEl.innerHTML =
        '<strong>Location: </strong> ' + newJobs.location.display_name + '<br/>';

    var descriptionEl = document.createElement('p');
    descriptionEl.innerHTML =
        '<strong>Description: </strong> ' + newJobs.description + '<br/>';

    resultBody.append(titleContentEl, companyContentEl, locationContentEl, descriptionEl);

    resultContentEl.append(resultCard);
}

function searchValue(event) {

    event.preventDefault();
    var searchedCity = document.querySelector("#search-value").value;
    console.log(searchedCity);
    var listedCity = $('<button type="submit" id="city-button" class="btn">');
    listedCity.text(searchedCity);
    listedCity.appendTo(citiesList);

    var cityTitle = $('<button type="submit" id="city-button" class="btn">');
    cityTitle.text(searchedCity);
    cityTitle.appendTo(cityHead);

    loadJobs(searchedCity);
}

const loadJobs = async (newJobs) => {

    //   var queryUrl = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6d54e703&app_key=69dedd20d9b94d1778be8e912ab12484&results_per_page=10&location0=" + searchedCity;
    var queryUrl = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6d54e703&app_key=69dedd20d9b94d1778be8e912ab12484&results_per_page=10";


    try {
        const res = await fetch(queryUrl)

        jobs = await res.json();
        console.log(newJobs);
        let array = jobs.results;
        for (let i = 0; i < array.length; i++) {

            printResults(array[i]);
        }
    } catch (err) {
        console.error(err);
    }
};

searchBtn.addEventListener("click", searchValue);
// cityBtn.addEventListener("click", searchValue);