import restaurant6 from '../assets/images/restaurant6.jpg';
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import {Link} from "react-router-dom";
import {styles} from "../style.js";

const Footer = () => {

    const emailAddress = "mysticrestaurant@mail.com";

    const sendEmail = () => {
        window.open(`mailto:${emailAddress}`);
    }

    return (
        <div className="bg-cover bg-fixed py-[20px]" style={{backgroundImage: `url(${restaurant6})`}}>
            <div className="w-[35%] text-center py-[50px] md:w-[20%] mx-auto bg-crimson rounded-[50%] bg-opacity-[0.7]">
                <h2 className="text-black text-4xl font-bold font-rockness">Zapratite nas</h2>
                <div className="flex justify-center gap-[2rem]">
                    <Link to="https://www.facebook.com/" target="_blank"><img src={Facebook} alt="Facebook" className="w-[50px] h-[50px]"/></Link>
                    <Link to="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="Instagram" className="w-[50px] h-[50px]"/></Link>
                </div>
            </div>
            <div className="flex items-center gap-[12vw] flex-col md:flex-row md:justify-center md:p-[150px]">
                <div className="w-[40%] xl:w-[20%]">
                    <h2 className={`${styles.h2}`}>Adresa</h2>
                    <p className={`${styles.paragraph} p-[3px]`}>Restoran Mystic</p>
                    <p className={`${styles.paragraph} p-[3px]`}>Bulevar XXXX XXXXX</p>
                    <p className={`${styles.paragraph} p-[3px]`}>Centar, Podgorica</p>
                </div>
                <div className="w-[40%] xl:w-[20%]">
                    <h2 className={`${styles.h2}`}>Kontakt</h2>
                    <p className={`${styles.paragraph} p-[3px]`}>Telefon: +382 67 123 456</p>
                    <p className={`${styles.paragraph} p-[3px] cursor-pointer`} onClick={sendEmail}>Email: {emailAddress}</p>
                </div>
                <div className="w-[40%] xl:w-[20%]">
                    <h2 className={`${styles.h2} p-[3px]`}>Radno vrijeme</h2>
                    <p className={`${styles.paragraph} p-[3px]`}>Ponedjeljak - Petak: 08:00 - 22:00</p>
                    <p className={`${styles.paragraph} p-[3px]`}>Subota - Nedjelja: 10:00 - 22:00</p>
                </div>
            </div>
        </div>
    )
}
export default Footer