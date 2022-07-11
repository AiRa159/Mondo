import styles from "./LogIn.module.scss";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import image from "../../../assets/profileIcon.svg";
import axios from "axios";

export const LogInPage = (props) => {
    const variable = props.var;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");
    let [users, setUsers] = useState([]);
    let navigate = useNavigate();
    let user;

    useEffect(() => {
        axios.get("http://localhost:8081/users").then(r => setUsers(r.data))
    })

    const validation = async (e) => {
        e.preventDefault();

        let valid = true;

        if (variable === "login") {
            if (email.trim().length === 0 || password.trim().length === 0) {
                setError("Fill fields, please!");
                valid = false;
                e.preventDefault();
            } else {
                if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                    setError("Incorrect email format.")
                    valid = false;
                    e.preventDefault();
                    return;
                }

                if (password.trim().length < 5) {
                    setError("Password is too short")
                    valid = false;
                    e.preventDefault();
                    return;
                }
            }
        } else {
            if (email.trim().length === 0 || password.trim().length === 0 || username.trim().length === 0) {
                setError("Field(s) are empty");
                valid = false;
                e.preventDefault();
            } else {
                if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                    setError("Incorrect email format.")
                    valid = false;
                    e.preventDefault();
                    return;
                }

                const regex = /[^a-zA-ZÀ-Žà-ž]/;
                if (username.trim().length > 2) {
                    if (username.match(regex)) {
                        setError("Incorrect username format");
                        valid = false;
                        e.preventDefault();
                        return;
                    }
                } else {
                    setError("Username is too small");
                    valid = false;
                    e.preventDefault();
                    return;
                }

                if (password.trim().length < 5) {
                    setError("Password is too short")
                    valid = false;
                    e.preventDefault();
                    return;
                }
            }
        }

        let exist = false;

        if (valid) {
            if(variable === "reg") {
                users.map((currUser, i) => {
                    if(currUser.email === email){
                        setError("Account with this email is already exists!")
                        exist = true;
                        e.preventDefault();
                        return;
                    }
                })

                if(!exist) {
                    axios.post("http://localhost:8081/users",
                        {
                            "email": email,
                            "username": username,
                            "password": password,
                            "image": image
                        }).then((r) => {
                        console.log(r.data)
                        localStorage.setItem("user", JSON.stringify(r.data))
                        navigate("/profile");
                        window.location.reload();
                    })
                }
            }else{
                users.map((currUser, i) => {
                    if(currUser.email === email && currUser.password === password){
                        localStorage.setItem("user", JSON.stringify(currUser))
                        navigate("/profile");
                        window.location.reload();
                    }else{
                        setError("Wrong email or password!");
                        e.preventDefault();
                        return;
                    }
                })
            }
        }

    }

    return(
        <div className={styles.logInPage}>
            <form className={styles.container} onSubmit={(e) => validation(e)}>
                {variable === "login" ? (
                        <>
                            <h2>Log in</h2>
                            <section className={styles.box}>
                                <h4>E-mail:</h4>
                                <input type="text" placeholder="example@gmail.com" onClick={() => setError("")} onChange={(e) => setEmail(e.target.value)} autoFocus={true}/>
                                <h4>Password:</h4>
                                <input type="password" minLength={5} onClick={() => setError("")}
                                       onChange={(e) => setPassword(e.target.value)}/>
                                <div className={styles.error}>{error}</div>
                            </section>
                        </>
                    )
                    :
                    (
                        <>
                            <h2>Registration</h2>
                            <section className={styles.box}>
                                <h4>E-mail:</h4>
                                <input type="text" placeholder="example@gmail.com" onClick={() => setError("")} onChange={(e) => setEmail(e.target.value)} autoFocus={true}/>

                                <h4>Username:</h4>
                                <input type="text" placeholder="Petr" onClick={() => setError("")} onChange={(e) => setUsername(e.target.value)}/>

                                <h4>Password:</h4>
                                <input type="password" minLength={5} onClick={() => setError("")}
                                       onChange={(e) => setPassword(e.target.value)}/>
                                <div className={styles.error}>{error}</div>
                            </section>
                        </>
                    )
                }
                <button type={"submit"}>Done</button>
            </form>
        </div>
    )
}

