import styles from "./Home.module.scss";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {useState} from "react";
import VideoModal from "./VideoModal";

export const Home = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return(
        <div className={styles.homePage}>
            {open && <VideoModal open={() => setOpen(false)}/>}
            <section className={styles.back}>
                <div className={styles.logo}>
                    <h1>M<img src={logo} onClick={() => setOpen(true)}/>ndo</h1>
                    <h2>All over the world right from home</h2>
                    <h2>Po celém světě přímo z domova</h2>
                </div>
            </section>

            <nav className={styles.navigation}>
                <Link to={'/countries'}>Countries</Link>
                <Link to={'/cities'}>Cities</Link>
                <Link to={'/universities'}>Universities</Link>
                <Link to={'/forum'}>Forum</Link>
                <Link to={'/'}>Other</Link>
            </nav>

            <section className={styles.text}>
                <article>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Curabitur sagittis hendrerit ante.
                    Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.
                    Nunc dapibus tortor vel mi dapibus sollicitudin. Integer imperdiet lectus quis justo. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat.
                    Mauris elementum mauris vitae tortor. Aenean vel massa quis mauris vehicula lacinia. Proin in tellus sit amet nibh dignissim sagittis.
                    Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Aliquam id dolor. Aliquam in lorem sit amet leo accumsan lacinia. Nulla non arcu lacinia neque faucibus fringilla.
                    Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Quisque tincidunt scelerisque libero. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</article>
            </section>

        </div>
    )
}