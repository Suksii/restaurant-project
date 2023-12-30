import {styles} from "../style.js";

const AboutUsPage = () => {
    return (
        <div>
            <div className={`${styles.background} py-[50px]`} >
                <div className="w-[70%] mx-auto border-[5px] border-crimson border-double rounded-[30px]">
                    <h2 className={`${styles.h2} text-center`}>O nama</h2>
                    <p className={`${styles.paragraph} mx-[10vw] my-[10vh]`}>Dobrodošli u Restoran Mystic, mjesto gdje se umjetnost i gastronomija susreću u savršenom spoju. Naša priča počinje duboko usađena u strast prema hrani i kreativnosti, gdje svaki zalogaj postaje pravo malo remek-djelo. Ovdje u Zlatnoj Paleti, trudimo se pružiti vam jedinstveno iskustvo kušanja koje će vas ostaviti bez daha.</p>
                    <p className={`${styles.paragraph} mx-[10vw] my-[10vh]`}>Naša kuhinja je pravo umjetničko platno, a naši kuhari pravi majstori svog zanata. Koristimo samo najsvježije sastojke i sezonske namirnice kako bismo stvorili jela koja će vas osvojiti svojim okusima i prezentacijom. Bez obzira jeste li ljubitelj klasične kuhinje ili avanturističkih okusa, naša raznolika ponuda sigurno će zadovoljiti vaše nepce.</p>
                    <p className={`${styles.paragraph} mx-[10vw] my-[10vh]`}>Nudimo vam toplu i ugodnu atmosferu gdje se osjećate kao kod kuće, okruženi ljubaznim osobljem koje će vam pružiti nezaboravno iskustvo. Bistro Zlatna Paleta nije samo restoran, već mjesto gdje se stvaraju uspomene i gdje hrana postaje umjetnost. Dođite i pridružite nam se na ovoj gastronomskoj avanturi, jer za nas, svaki obrok je prilika za stvaranje čarolije.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;