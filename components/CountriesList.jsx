// import CountriesData from "../alldata";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { useEffect, useState } from "react";

export default function CountriesList({ query }) {
  const [CountriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return CountriesData.length === 0 ? (
    <CountriesListShimmer />
  ) : (
    <div id="countries-container">
      {CountriesData.filter((country) =>
        country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
      ).map((country) => {
        return (
          <CountryCard
            name={country.name.common}
            key={country.name.common}
            flag={country.flags.svg}
            population={country.population.toLocaleString("en-Pk")}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        );
      })}
    </div>
  );
}
