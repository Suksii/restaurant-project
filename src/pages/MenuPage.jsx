import {styles} from "../style.js";
import {menu} from "../constants/menu.js";

const MenuPage = () => {
    return (
        <div className={`${styles.background} py-[50px]`}>
            <div className="w-[70%] my-[50px] mx-auto border-[5px] border-crimson border-double rounded-[30px] py-[5vw] px-[5vw]">
                <div className="text-center my-[130px]">
                    <h1 className={`${styles.h1}`}>Meni</h1>
                    <hr style={{margin:'3rem'}}/>
                        <p className={`${styles.h2} w-[90%] mx-auto my-[5rem]`}>Dobra hrana može da definiše ili redefiniše Vaš dan. Zato predlažemo da pametno birate svoje opcije. Jedna od provjerenih jeste naš restoran u kojem se svaki specijalitet kuće priprema sa ciljem da uljepša nečiji dan.</p>
                        <p className={`${styles.h2} w-[70%] mx-auto my-[5rem]`}>Naši specijaliteti provešće Vas kroz avanturu čula koja se rijetko doživljava. Osjetićete ljubav sa kojom se u našoj kuhinji pripremaju jela, i poštovanje koje se pokazuje sastojcima koji grade vaš obrok. Za nas je svaki tanjir koji napusti kuhinju razgovor sa našim posjetiocima, i postaraćemo se da uživate u svakom zalogaju.</p>
                </div>
                {Object.entries(menu).map(([category, items]) => (
                    <table key={category} className="w-[90%] mx-auto">
                        <thead>
                        <tr>
                            <td className={`${styles.h2} text-center py-[5rem]`} colSpan="3">{category}</td>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={index} className={styles.paragraph}>
                                <td className="w-[60%]">{item.name} <br/> {item.components && ( <span className="text-[1rem] text-gray-400 font-butler_light">{item.components}</span> )}</td>
                                <td className="w-[30%]">{item.weight}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    )
}

export default MenuPage