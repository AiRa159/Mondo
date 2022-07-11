import styles from "./Head.module.scss";
import {Link, useNavigate} from "react-router-dom";

export const Head = () => {
    let user = localStorage.getItem("user");
    let navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("user")
        navigate("/")
        window.location.reload();
    }

    return(
        <div id="headerMainPage" className={styles.mainPageHeader}>
            {user === null ? (
                    <>
                        <Link to={"/registration"}>
                            <button>Registration</button>
                        </Link>

                        <Link to={"/authorization"}>
                            <button >Log in</button>
                        </Link>
                    </>
                )
                :
                (
                    <>
                        <Link to={"#"} onClick={() => logout()}>
                            <button>Log out</button>
                        </Link>

                        <Link to={"/profile"}>
                            <button>Profile</button>
                        </Link>


                    </>
                )}
        </div>
    )
}