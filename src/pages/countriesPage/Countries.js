import styles from "./Countries.module.scss";
import CountryList from '../../data/countries.json';
import {Link} from "react-router-dom";

export const Countries = () => {

    const saveData = (e) => {
        localStorage.setItem("country", JSON.stringify(e));
    }

    return (
        <div className={styles.countriesPage}>

            {/*<section className={styles.find}>*/}
            {/*    <input type={"text"} placeholder={"Search..."}/>*/}
            {/*    <button>Find</button>*/}
            {/*</section>*/}

            <section className={styles.countriesList}>
                {CountryList.countries.map((data, i) => (
                    <div key={i} className={styles.country}>
                        <Link to={"/country"} onClick={() => saveData(data)}>{data.name}</Link>
                        <div className={styles.info}>
                            <h3>Capital: {data.capital}</h3>
                            <h3>Location: {data.location}</h3>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}