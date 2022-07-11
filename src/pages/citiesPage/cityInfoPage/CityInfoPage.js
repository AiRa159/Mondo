import styles from "./CityInfoPage.module.scss";

export const CityInfoPage = () =>{

    const city = JSON.parse(localStorage.getItem("city"));

    return(
        <div className={styles.cityInfoPage}>
            <h1>{city.name}</h1>
            <h3>Country: {city.country}</h3>
            <h3>Square: {city.square}</h3>

            <section className={styles.photos}>
                <h3>Photos: </h3>
                {city.photos.map((photo, i) => (
                    <img key={i} src={photo}/>
                ))}
            </section>

            <section className={styles.texts}>
                {city.texts.map((text, i) => (
                    <h3 key={i}>{text}</h3>
                ))}
            </section>

        </div>
    )
}