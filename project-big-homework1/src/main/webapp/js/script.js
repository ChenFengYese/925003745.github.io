let weather = {
  apiKey: "13e786b2255800d48474a6fdbcd071dc",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "湿度: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "风速: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.width = "100%";
    document.body.style.height = "100%";

  },
  search: function () {
    let CityNameByPinYin = getFullChars(document.querySelector(".search-bar").value);
    if (CityNameByPinYin === "HaErBin"){
      CityNameByPinYin = "Harbin";
    }
    this.fetchWeather(CityNameByPinYin);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
const _cityName_ = ipAddress();
__cityName__ = "当前IP地址所对应城市：" + _cityName_ + "\n" + "(该IP定位服务由高德地图提供，可能不准确，仅供参考)";
// alert(__cityName__);
weather.fetchWeather(_cityName_);


