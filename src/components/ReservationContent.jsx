import {styles} from "../style.js";
import {useState} from "react";
import ModalMessage from "./ModalMessage.jsx";
const ReservationContent = ({showModal, setShowModal}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        persons: ""
    });

    const requiredFields = ["name", "email", "phone"];
    const isFormValid = requiredFields.every(field => formData[field]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(isFormValid);

        if (isFormValid) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                    persons: ""
                });
            }, 4000);
        } else {
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                }, 2000);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-[800px] p-[30px] my-[50px] border-[2px] border-golden">
                <h2 className={`${styles.h2} text-center`}>Rezervišite svoje mjesto</h2>
                <p className={styles.paragraph}>Idealno mjesto za porodična okupljanja, druženja sa prijateljima, poslovne sastanke, proslave, jer zajedno pravimo trenutke za pamćenje,uz jedinstvene ukuse iz naše kuhinje!</p>
                <form>
                    <div className="flex flex-wrap py-[20px] ">
                        <div className={styles.form}>
                            <label htmlFor="name" className={styles.label}>Ime i prezime</label>
                            <input type="text" id="name" placeholder="Ime i prezime *" name="name" value={formData.name} onChange={handleChange} className={styles.input}/>
                        </div>
                        <div className={styles.form}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" placeholder="Email *" name="email"  value={formData.email} onChange={handleChange} className={styles.input}/>
                        </div>
                        <div className={styles.form}>
                            <label htmlFor="number" className={styles.label}>Broj telefona</label>
                            <input type="number" id="number" placeholder="Broj telefona *" name="phone" value={formData.phone} className={styles.input} onChange={handleChange}/>
                        </div>
                        <div className={styles.form}>
                            <label htmlFor="date" className={styles.label}>Datum</label>
                            <input type="text" id="date" placeholder="Datum" name="date" value={formData.date} onChange={handleChange} className={styles.input}/>
                        </div>
                        <div className={styles.form}>
                            <label htmlFor="time" className={styles.label}>Vrijeme</label>
                            <input type="text" id="time" placeholder="Vrijeme" name="time" value={formData.time} onChange={handleChange} className={styles.input} />
                        </div>
                        <div className={styles.form}>
                            <label htmlFor="persons" className={styles.label}>Broj osoba</label>
                            <input type="number" id="persons" placeholder="Broj osoba" name="persons" value={formData.persons} onChange={handleChange} className={styles.input}/>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className={styles.button} onClick={handleSubmit}>Rezerviši</button>
                    </div>
                    {showModal && (
                    isFormValid ?   <ModalMessage message="Uspješno ste rezervisali mjesto u našem restoranu!" />
                                :
                                    <ModalMessage message="Molimo Vas da popunite sva obavezna polja!" />
                    )}
                </form>
            </div>
        </div>
    )
}

export default ReservationContent