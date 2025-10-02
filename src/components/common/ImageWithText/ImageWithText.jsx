import styles from "./style.module.css";
const ImageWithText = ({ image, text }) => {
  const { ImageWithText } = styles;
  return (
    <div className={`${ImageWithText}`}>
      <img src={image} />
      <h4>{text}</h4>
    </div>
  );
};

export default ImageWithText;
