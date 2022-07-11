import styles from "./Profile.module.scss";
import axios from "axios";

export const Profile = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const setImage = (image) =>{
        user.image = URL.createObjectURL(image);
        localStorage.setItem("user", JSON.stringify(user))
        axios.put(`http://localhost:8081/users/${user.id}`, user).then((r) => console.log(r.data))
    }

    if(user != null) {
        return (
            <div className={styles.profilePage}>
                <section className={styles.container}>
                    <img src={user.image}/>
                    <h3>E-mail: {user.email}</h3>
                    <h3>Username: {user.username}</h3>

                    <div className={styles.fileInput}>
                        <input type={"file"} accept='.png, .jpg, .jpeg' id="file"
                               onChange={(e) => setImage(e.target.files[0])}/>
                        <label htmlFor="file">Select image</label>
                    </div>
                </section>
            </div>
        )
    }
}
