import styles from "../../universitiesPage/universityInfoPage/UniversityInfoPage.module.scss";

export const UniversityInfoPage = () => {

    const u = JSON.parse(localStorage.getItem("university"));

    return(
        <div className={styles.universityInfoPage}>
            <h1>{u.name}</h1>
            <h3>Country: {u.country}</h3>
            <h3>City: {u.city}</h3>

            <section className={styles.specialties}>
                <h3>Specialties: </h3>
                {u.specialties.map((s, i) => (
                    <h3 key={i}>{s} </h3>
                ))}
            </section>

            <section className={styles.texts}>
                {u.about.map((text, i) => (
                    <h3 key={i}>{text}</h3>
                ))}
            </section>

        </div>
    )
}
