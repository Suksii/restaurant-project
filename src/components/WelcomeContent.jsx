import logo from "../assets/images/logo.jpg"
import restaurant7 from "../assets/images/restaurant7.jpg"
import {styles} from "../style.js";
const WelcomeContent = () => {
    return (
        <div className="md:mx-[2rem] items-center pt-[5rem] flex justify-around flex-col md:flex-row">
            <div className="md:w-[15%] w-[50%] mb-[5rem]">
                <p className={styles.paragraph}>Dobrodošli u</p>
                <h1 className={styles.h1}>Restoran <br/>Mystic</h1>
                <hr className="w-[10rem] border-[1px] border-crimson my-[1rem]"/>
                <p className={styles.paragraph}>Restoran Mystic je nastao iz ljubavi prema ugostiteljstvu, hrani i tradiciji, sa željom da svim ljubiteljima domaće kuhinje pruži potpuni ugođaj za uživanje.</p>
                <p className={styles.paragraph}>Uživajte u našim specijalitetima.</p>
            </div>
            <div>
                <img src={logo} alt={logo} className="hidden md:block relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full"/>
            </div>
            <div className="flex justify-end">
                <img src={restaurant7} alt={restaurant7} className="w-[20rem] mx-auto md:w-[100%] h-[24rem] rounded-full"/>
            </div>
        </div>
    )
}

export default WelcomeContent