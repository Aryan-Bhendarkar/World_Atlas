import { useEffect, useState, useTransition } from "react";
import { getCountry } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async() => {
            const response = await getCountry();
            setCountries(response.data);
        })
    }, []);

    if(isPending) return <Loader/>

    return(
       <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((currCountry, index)=>{
                        return <CountryCard country={currCountry} key={index}/>
                    })
                }
            </ul>
       </section>
    )
};
