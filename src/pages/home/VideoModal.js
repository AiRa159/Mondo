import styles from "./Home.module.scss";
import video from "../../assets/sacha-baron.mp4";

function VideoModal({open}) {

    return(
        <div className={styles.box} onClick={() => open(false)}>
                <video controls>
                    <source src={video} type="video/mp4"/>
                </video>
        </div>
    )
}

export default VideoModal;