import styles from "../headerBasicPage/Header.module.scss";
import logo from "../../assets/fullLogo.png";
import {NavBarBasic} from "../navBarBasicPages/NavBarBasic";
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
        <div className={styles.basicPageHeader}>
            <img src={logo}/>

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
            <NavBarBasic/>
        </div>
    )
}