
const locationSearch = document.querySelector(".search_area");
const button = document.querySelector("button");
const locationField = document.querySelector(".location");
const timeField = document.querySelector(".time ");
const conditionField = document.querySelector(".condition ");
const temperature = document.querySelector(".temp");

button.addEventListener('click', Search);
const fetchResults = async (target) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=507b865e106e4340984141216240101&q=${target}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    let locationname = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    Details(locationname, time, temp, condition);
}
function Search(e) {
    e.preventDefault();
    target = locationSearch.value;
    fetchResults(target);
}
function Details(locationname, time, temp, condition) {
    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]
    let currentDay=getDayName(new Date(splitDate).getDay());
    locationField.innerText = locationname;
    timeField.innerText = `${splitDate} ${currentDay} ${splitTime}` ;
    temperature.innerText = temp;
    conditionField.innerText = condition;
    
}
function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}
