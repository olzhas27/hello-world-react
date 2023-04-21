import "./TextArea.css";

const TextArea = ({placeholder}) => {
    return (
        <textarea className="textarea" placeholder={placeholder}/>
    )
};

export default TextArea;