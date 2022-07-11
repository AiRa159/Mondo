import styles from "./CountryInfoPage.module.scss";

export const CountryInfoPage = () =>{

    const country = JSON.parse(localStorage.getItem("country"));

    return(
        <div className={styles.countryInfoPage}>
            <h1>{country.name}</h1>
            <h3>Capital: {country.capital}</h3>
            <h3>Location: {country.location}</h3>
            <h3>Square: {country.square}</h3>

            <section className={styles.cities}>
                <h3>Cities: </h3>
                {country.cities.map((city, i) => (
                    <h3 key={i}>{city} </h3>
                ))}
            </section>

            <section className={styles.photos}>
                <h3>Photos: </h3>
                <div className={styles.ph}>
                    {country.photos.map((photo, i) => (
                        <img key={i} src={photo}/>
                    ))}
                </div>

            </section>

            <section className={styles.texts}>
                {country.texts.map((text, i) => (
                    <h3 key={i}>{text}</h3>
                ))}
            </section>

        </div>
    )
}