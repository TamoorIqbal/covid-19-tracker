import axios from "axios";
import { useEffect } from "react";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country ,setData) => {

    let ChangedURL = url;

    if (country) {
        ChangedURL = `${url}/countries/${country}`
    }

    // useEffect(()=>{
    //     const getData = async () => {
    //     const { data } = await axios.get(ChangedURL);
    //     setData(
    //         {data: {confirmed:{value:data.value}, 
    //         recovered:{value:data.value} , 
    //         deaths:{value:data.value},
    //         lastUpdate:data.lastUpdate}}
    //         )
    //         getData();
    //     }

    // },[])
    try {


        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(ChangedURL);
        // console.log(confirmed);
        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch (error) {
        console.log(error);
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
            recovered: dailyData.recovered
        }))

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}
