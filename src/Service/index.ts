import axios, {AxiosPromise} from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const API_KEY = 'ASK THE INTERVIEW CONDUCTOR';
const excludeList = 'minutely,hourly,daily,alerts';

const API = {
    fetchWeather: (lat: string, lng: string): Promise<AxiosPromise> => {
        const url = `${BASE_URL}?lat=${lat}&lon=${lng}&exclude=${excludeList}&appid=${API_KEY}&units=metric`
        return axios.get(url)
    }
}

export default API;