import styles from "../universitiesPage/Universities.module.scss";
import UniversitiesList from "../../data/universities.json";
import {Link} from "react-router-dom";

export const Universities = () => {

    const saveData = (e) => {
        localStorage.setItem("university", JSON.stringify(e));
    }

    return (
        <div className={styles.universitiesPage}>
            <section className={styles.universitiesList}>
                {UniversitiesList.universities.map((data, i) => (
                    <div key={i} className={styles.university}>
                        <Link to={"/university"} onClick={() => saveData(data)}>{data.name}</Link>
                        <div className={styles.info}>
                            <h3>Capital: {data.country}</h3>
                            <h3>Location: {data.city}</h3>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}