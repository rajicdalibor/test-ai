import './FeatureItem.css';
import {imageSrc} from "../services/utils";
function FeatureItem({image, title, text}) {
    return(
        <div className={'feature-wrapper'}>
            <img src={imageSrc(image)} alt={image}/>
            <div className={'feature-title'}>{title}</div>
            <div className={'feature-text'}>{text}</div>
        </div>
    );
}

export default FeatureItem;
