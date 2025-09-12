import styles from  "./style.module.css"
const ImageWithText = ({image,text}) => {
  const {ImageWithText}=styles
  return (
    <div className={ImageWithText}>
      <img src={image} 
      // style={{background:"red", width:"20px",height:"20px", right:"0"}}
      />
      <h4 class="text-xl font-bold text-white">{text}</h4>
    </div>
  );
};

export default ImageWithText;
