import styles from "./NavBarBasic.module.scss";
import {Link, useLocation} from "react-router-dom";

export const NavBarBasic = () =>{
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

    return(
        <nav className={styles.navigationBar}>
            <Link to={'/countries'}
                  className={splitLocation[1] === "countries" ? styles.active : ""}>Countries</Link>
            <Link to={'/cities'}
                  className={splitLocation[1] === "cities" ? styles.active : ""}>Cities</Link>
            <Link to={'/universities'}
                  className={splitLocation[1] === "universities" ? styles.active : ""}>Universities</Link>
            <Link to={'/forum'}
                  className={splitLocation[1] === "forum" ? styles.active : ""}>Forum</Link>
            <Link to={'/'}>Other</Link>
        </nav>
    )
}
