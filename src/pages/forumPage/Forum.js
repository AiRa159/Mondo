import styles from "./Forum.module.scss";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import image from "../../assets/profileIcon.svg";
import axios from "axios";

export const Forum = () =>{

    const user = JSON.parse(localStorage.getItem("user"));
    const [title, setTitle] = useState("");
    const [theme, setTheme] = useState("Other");
    const [error, setError] = useState("");
    const [comment, setComment] = useState("");
    let [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/comments").then(r => setComments(r.data))
    })

    const validation = (e) => {
        e.preventDefault();

        let valid = true;

        if(title.trim().length === 0 || comment.trim().length === 0){
            valid = false;
            setError("Fill fields, please!")
            e.preventDefault();
        }else{
            if(title.trim().length < 3){
                valid = false;
                setError("Title is too short!")
                e.preventDefault();
                return;
            }
            if(comment.trim().length < 2){
                valid = false;
                setError("Text is too short!")
                e.preventDefault();
                return;
            }
        }

        if(valid){
            axios.post("http://localhost:8081/comments",
                {
                    "user": user.email,
                    "title": title,
                    "theme": theme,
                    "comment": comment
                }).then((r) => {console.log(r.data)})
            setTitle(""); setTheme("Other"); setComment("");
            window.location.reload();
        }
    }

    return (
        <div className={styles.forumPage}>
            {user != null ? (
                <>
                    <div className={styles.blocks}>
                        {comments.map((com, i) => (
                            <section key={i} className={styles.block}>
                                <div className={styles.avatar}>
                                    <img src={image}/>
                                    <h5>{com.user}</h5>
                                </div>
                                <h4>Title: {com.title}</h4>
                                <h4>Theme: {com.theme}</h4>
                                <h4>{com.comment}</h4>
                            </section>
                        ))}
                    </div>

                    <form className={styles.addMyComment} onSubmit={(e) => validation(e)}>
                        <div className={styles.error}>{error}</div>
                        <section className={styles.top}>
                            <input type="text" className={styles.title} placeholder="Title" onClick={() => setError("")}
                                   onChange={(e) => setTitle(e.target.value)} autoFocus={true}/>
                            <select className={styles.select} onChange={(e) => setTheme(e.target.value)}>
                                <option value="0ther">Other</option>
                                <option value="Country">Country</option>
                                <option value="City">City</option>
                                <option value="University">University</option>
                            </select>
                        </section>
                        <textarea className={styles.textarea} placeholder="Your comment" onClick={() => setError("")}
                                  onChange={(e) => setComment(e.target.value)}/>
                        <button type={"submit"} className={styles.send}>Send</button>
                    </form>
                </>
                )
                :
                (
                    <section className={styles.text}>
                        <h1>Ooops, it seems you forgot to log in!</h1>
                        <h1>Don't you have an account yet? Then register right now!</h1>
                        <Link to={"/registration"}>
                            <button className={styles.button}>Registration</button>
                        </Link>
                    </section>
                )}
        </div>
    )
}