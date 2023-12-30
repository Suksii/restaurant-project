import {gallery, galleryButtons} from "../constants/gallery.js";
import {styles} from "../style.js";
import {useEffect, useState} from "react";
import {BiX, BiLeftArrow, BiRightArrow} from "react-icons/bi";
const GalleryContent = () => {

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape')
                hideFullScreen();
            if (e.key === 'ArrowLeft')
                slideLeft();
            if (e.key === 'ArrowRight')
                slideRight();
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    });

    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [fullScreenAlt, setFullScreenAlt] = useState('');
    const [slide, setSlide] = useState(0);
    const [selectedButton, setSelectedButton] = useState(galleryButtons[0].name);

    const handleFilter = (name) => {
        setSelectedButton(name);
    }
    const showFullScreen = (image, alt) => {
        const selectedIndex = gallery
            .filter((item) => selectedButton === 'Sve fotografije' || item.category === selectedButton)
            .indexOf(image);
        setSlide(selectedIndex);
        setFullScreenImage(image);
        setFullScreenAlt(alt);
    }
    const hideFullScreen = () => {
        setFullScreenImage(null);
        setFullScreenAlt('');
    }
    const slideLeft = () => {
        const filteredGallery = gallery.filter((item) => selectedButton === 'Sve fotografije' || item.category === selectedButton);
        const newIndex = (slide - 1 + filteredGallery.length) % filteredGallery.length;
        setSlide(newIndex);
        setFullScreenImage(filteredGallery[newIndex]);
    };

    const slideRight = () => {
        const filteredGallery = gallery.filter((item) => selectedButton === 'Sve fotografije' || item.category === selectedButton);
        const newIndex = (slide + 1) % filteredGallery.length;
        setSlide(newIndex);
        setFullScreenImage(filteredGallery[newIndex]);
    };

    return (
        <div className="bg-gradient-to-br from-black to-gray-700">
            <div className="py-[50px] md:mx-[10vw] w-[30%] mx-auto">
                <h3 className={`${styles.h3} uppercase`}>Galerija</h3>
                <h1 className={styles.h1}>Naša galerija</h1>
                <hr style={{margin: '20px 0'}}/>
                <p className={styles.paragraph}>Pregledajte našu galeriju i dozvolite sebi kratki uvod u nevjerovatno iskustvo koje vas čeka u našem restoranu! Dobrodošli u Mystic restoran, vašu restoransku ljubav na prvi pogled!</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-[8vw]">
                    {
                        galleryButtons.map((item) => (
                            <button className={`${styles.button} min-w-[10vw]`} key={item.id} onClick={() => handleFilter(item.name)}>{item.name}</button>
                        ))
                    }
                </div>
                {fullScreenImage && (
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-[100] flex justify-center items-center">
                        <div className="w-[80%] flex justify-center flex-col h-[80%] items-center">
                            <BiX className="absolute top-0 right-0 text-white text-4xl mr-[25px] mt-[10px] cursor-pointer" onClick={hideFullScreen}/>
                            <BiLeftArrow className="absolute left-0 text-white text-4xl ml-[25px] cursor-pointer" onClick={slideLeft} />
                            <img src={fullScreenImage.image}
                                 alt={fullScreenAlt}
                                 className="max-w-[100%] max-h-[100%]" />
                            <p className="text-gray-400 text-[0.9rem] mt-[10px]">
                                {gallery.filter((item) => selectedButton === 'Sve fotografije' || item.category === selectedButton).indexOf(fullScreenImage) + 1} od {gallery.filter((item) => selectedButton === 'Sve fotografije' || item.category === selectedButton).length}
                            </p>
                            <BiRightArrow className="absolute right-0 text-white text-4xl mr-[25px] cursor-pointer" onClick={slideRight} />
                        </div>
                    </div>
                )}
                <div className="flex justify-center flex-wrap pb-[20px]">
                {
                    gallery
                        .filter((item) => selectedButton === 'Sve fotografije' || item.category === selectedButton)
                        .map((item) => (
                            <img key={item.id}
                                 src={item.image}
                                 alt={item.alt}
                                 className="max-w-[20%] min-w-[20rem] flex-1 m-[10px] cursor-pointer rounded-[20px] transform hover:scale-105 transition-all duration-300 ease-in-out"
                                 onClick={() => showFullScreen(item)}
                            />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default GalleryContent