import {styles} from "../style.js";
import ModalMessage from "../components/ModalMessage.jsx";
import {useState} from "react";
const ContactPage = ({showModal, setShowModal}) => {

    const [formContact, setFormContact] = useState({
        name: "",
        email: "",
        title: "",
        message: ""
    });

    const requiredFields = ["email", "title", "message"];
    const isFormValid = requiredFields.every(field => formContact[field]);
    const handleChange = (e) => {
    const { name, value } = e.target;
        setFormContact((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formContact);
        if (isFormValid) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                setFormContact({
                        name: "",
                        email: "",
                        title: "",
                        message: ""
                    }
                )
            }, 4000);

        } else {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 2000);
        }
    }
    return (
        <div className="flex flex-col w-full bg-gradient-to-br from-black to-gray-700 md:flex-row">
            <div className="pt-[120px] md:pt-[240px] flex-1 text-center">
                <h2 className={`${styles.h2} w-[40%] mx-auto`}>Kontaktirajte nas</h2>
                <p className={`${styles.paragraph} w-[40%] mx-auto`}>Ukoliko imate bilo kakvo pitanje ili primjedbu za nas, slobodno nam pišite putem ove forme</p>
            </div>
            <div className="mx-auto flex-1 py-[120px]">
                <form>
                    <div className={styles.form}>
                        <label className={`${styles.label} mr-[1rem] mb-[5px]`}>Ime</label>
                        <input placeholder="Unesite vaše ime" name="name" value={formContact.name} className={styles.input} onChange={handleChange}/>
                    </div>
                    <div className={styles.form}>
                        <label className={`${styles.label} mr-[1rem] mb-[5px]`}>Email</label>
                        <input placeholder="Unesite vaš email *" name="email" value={formContact.email} className={styles.input} onChange={handleChange}/>
                    </div>
                    <div className={styles.form}>
                        <label className={`${styles.label} mr-[1rem] mb-[5px]`}>Naslov</label>
                        <input placeholder="Unesite naslov poruke *" name="title" value={formContact.title} className={styles.input} onChange={handleChange}/>
                    </div>
                    <div className={styles.form}>
                        <label className={`${styles.label} mr-[1rem] mb-[5px]`}>Poruka</label>
                        <textarea placeholder="Unesite vašu poruku *" name="message" value={formContact.message} className={`${styles.input} max-h-[200px]`} onChange={handleChange}/>
                    </div>
                    <div className={styles.form}>
                        <button onClick={handleSubmit} className={styles.button}>Pošalji</button>
                    </div>
                    {showModal && (
                        isFormValid ?   <ModalMessage message="Poruka je uspješno poslata" />
                                    :
                                        <ModalMessage message="Molimo vas da popunite sva obavezna polja" />
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default ContactPage