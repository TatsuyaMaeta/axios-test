console.log(111);

const url_str = "https://apis.apima.net/k2srm05wzm1pdl3xk0sv/v1/prefectures/";
const ApiKey = "5f2fca97b5ce20ad2a668cb8efa351f1";
// tokyo lat lon
const lat = 35.6895;
const lon = 139.69171;
// api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Ap}

const elem = document.querySelector("#marker");
const elem2 = document.querySelector("#marker2");

const cityName = "tokyo";
//api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Ap}

let hoge = null;

const getCityName = async () => {
    await axios
        .get(
            // ちなみにここのURLがhttpだとセキュリティの問題でerrになるので要注意！
            // 参考記事：https://tokushiyo.net/web/post-1349/
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`
        )
        .then((response) => {
            console.log(response.data.name);
            hoge = response.data.name;
            elem.innerHTML = `<div>${response.data.name}</div>`;
            return response.data.name;
        })
        .then((res) => {
            console.log(`${res}の天候を調べる`);
            getWeather(res);
        });
};

getCityName();

// axios
//     .get(
//         `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`
//     )
//     .then(function (response) {
//         // console.log(response.data);
//         // console.log(response.status);
//         // console.log(response.statusText);
//         // console.log(response.headers);
//         console.log(response.data.name);
//         hoge = response.data.name;
//         elem.innerHTML = `<h1>${response.data.name}</h1>`;
//         return response.data.name;
//     })
//     .then((res) => {
//         const b = getWeather("osaka");
//         console.log(b);
//         // alert(res);
//         console.log(hoge, "hogeの値");
//     });

const getWeather = async (name) => {
    await axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${ApiKey}`
        )
        .then(function (response) {
            const weather = response.data.weather[0]["main"];
            console.log(weather);
            hoge = weather;
            elem2.innerHTML = `<div>${weather}</div>`;
            return weather;
        });
};

// getWeather(hoge);
// axios.get("https://api.first.org/data/v1/countries?region=asia").then((res) => {
//     console.log(res);
//     elem2.innerHTML = res;
// });

const getCountries = async () => {
    await axios
        .get(
            "https://api.first.org/data/v1/countries?region=asia",
            {
                // 必要な箇所だけ抜粋
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":
                        "https://tatsuyamaeta.github.io/",
                },
            }
            // "https://api.first.org/data/v1/countries?region=asia"
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

getCountries();
