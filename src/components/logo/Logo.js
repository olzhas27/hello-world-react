import icon_dress from '../../common/img/svg/icon_dress.svg'
import label_womazing from '../../common/img/svg/label_womazing.svg'

function Logo() {
    return (
        <div className="logo">
            <img src={icon_dress}/>
            <img src={label_womazing}/>
        </div>
    );
}

export default Logo;