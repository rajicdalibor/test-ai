import './ChatItem.css';
import {imageSrc} from "../services/utils";
function ChatItem({image, title, text}) {
    return (
        <div className={'item-wrapper'}>
            <img src={imageSrc(image)} alt={image}/>
            <div className={'item-content'}>
                <div className={'item-title'}>{title}</div>
                <div className={'item-text'}>{text}</div>
            </div>
        </div>
    )
}

export default ChatItem;
