import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});

export const getCountry = () => {
    return api.get("/all?feilds=name,population,region,capital,flags");
};

