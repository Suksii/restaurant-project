import {styles} from "../style.js";
import {Link} from "react-router-dom";

const AboutUsContent = () => {

    const scrollToAboutUs = () => {
        window.scrollTo({
            top: 750,
            behavior: "smooth"
        });
    }

    return (
        <div className="w-[50%] my-[50px] mx-auto">
            <h2 className={`${styles.h2} text-center`}>O nama</h2>
            <p className={styles.paragraph}>U Bistro Zlatna Paleta, gastronomija postaje umjetnost. Naši majstori kuhinje pretvaraju svaki obrok u pravo malo remek-djelo, koristeći samo najsvježije sastojke. Doživite nezaboravno iskustvo kušanja u ugodnoj atmosferi gdje hrana postaje umjetnost. Pridružite nam se i budite dio ove gastronomske avanture.</p>
            <div className="flex justify-center pb-[10px] gap-[6vw]">
                <Link to="/about-us">
                    <button className={styles.button} onClick={scrollToAboutUs}>Pogledaj više</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutUsContent