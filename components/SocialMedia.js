import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './socialmedia.module.css';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';


const SocialMedia = () => {
    return (
        <div className={styles.socialcontainer}>
            <a href="https://www.facebook.com/madhu.kiranvarma.1/"
                className={styles.facebookcontainer}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://https://github.com/Madhu5A3"
                className={styles.githubcontainer}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/madhu-kiran-varma-246a8514a/"
                className={styles.linkedincontainer}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/MadhuKiranVarm2"
                className={styles.twittercontainer}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
    );
}

export default SocialMedia;