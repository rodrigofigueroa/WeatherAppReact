export const key      = '56ef8cfe0a0091a259799e537a7aaac9';
export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

export const GET_API_OPEN_WEATHER_MAP = (city) => {
    // example api.openweathermap.org/data/2.5/weather?q=London,uk
    // exampleby ID api.openweathermap.org/data/2.5/forecast/daily?id=${city ID}&cnt={6}&appid=${key}
    const key      = '56ef8cfe0a0091a259799e537a7aaac9';
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    return(`${BASE_URL}`)
}

export const GET_API_WEATHER_IMG = (icon) => {
    const BASE_URL_IMAGE = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return(`${BASE_URL_IMAGE}`)
}

export const GET_API_WEATHER_EXACT_PATH = (countryCode) =>{
    //api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    //api.openweathermap.org/data/2.5/weather?zip=94040,us
    // api.openweathermap.org/data/2.5/forecast/daily?id=3521297&cnt=5&appid=56ef8cfe0a0091a259799e537a7aaac9
    //api.openweathermap.org/data/2.5/forecast?id=3521297&appid=56ef8cfe0a0091a259799e537a7aaac9
    const key            = '56ef8cfe0a0091a259799e537a7aaac9';
    const mx = 'mx'
    const BASE_URL_ID_EXACT = `http://api.openweathermap.org/data/2.5/forecast?id=${countryCode}&appid=${key}&units=metric`;
    const BASE_URL_EXACT = `http://openweathermap.org/data/2.5/weather?zip=${55080},${mx}&appid=${key}&units=metric`
    return BASE_URL_ID_EXACT
}