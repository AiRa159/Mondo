import styles from "./Cities.module.scss";
import CityList from '../../data/cities.json';
import {Link} from "react-router-dom";

export const Cities = () => {

    const saveData = (e) => {
        localStorage.setItem("city", JSON.stringify(e));
    }

    return (
        <div className={styles.citiesPage}>

            {/*<section className={styles.find}>*/}
            {/*    <input type={"text"} placeholder={"Search..."}/>*/}
            {/*    <button>Find</button>*/}
            {/*</section>*/}

            <section className={styles.citiesList}>
                {CityList.cities.map((data, i) => (
                    <div key={i} className={styles.city}>
                        <Link to={"/city"} onClick={() => saveData(data)}>{data.name}</Link>
                        <div className={styles.info}>
                            <h3>Country: {data.country}</h3>
                            <h3>Square: {data.square}</h3>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}