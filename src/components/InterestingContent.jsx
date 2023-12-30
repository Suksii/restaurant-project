import {styles} from "../style.js";
import {cards} from "../constants/cards.js";

const InterestingContent = () => {

    return (
        <div className="flex flex-wrap justify-center my-[50px] pb-[15px] gap-[8vw] mx-5">
            {cards.map((card) => {
                return (
                    <div key={card.id} className={styles.card}>
                        <img src={card.image} alt={card.alt} className={styles.card_image} />
                        <h3 className={`${styles.h3} text-center`}>{card.title}</h3>
                        <p className={`${styles.paragraph} text-lg px-[1vw]` }>{card.description}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default InterestingContent