import flower from '../assets/f2.jpg'

const Images = () => {
    return (
        <div>
            <img src="/f1.jpg" />
            <img src={flower} />
        </div>
    );
};

export default Images;