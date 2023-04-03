import icon_success from "../../../common/img/svg/icon_success.svg";
import "./SuccessContent.css";

const SuccessContent = () => {
    return (
        <div className="success-page-content">
            <div className="order-status">
                <h1 className="order-status__status">
                    Заказ получен
                </h1>
                <div className="order-status__page-path">
                    <div className="order-status__page-path-elem">
                        Главная
                    </div>
                    <div className="order-status__page-path-elem">
                        —
                    </div>
                    <div className="order-status__page-path-elem">
                        Оформление заказа
                    </div>
                    <div className="order-status__page-path-elem">
                        —
                    </div>
                    <div className="order-status__page-path-elem
                            order-status__page-path-elem_color-grey
                            order-status__page-path-elem_margin-right-0">
                        Заказ получен
                    </div>
                </div>
            </div>


            <div className="order-success-complete">
                <div className="order-success-complete__message">
                    <img className="order-success-complete__img" src={icon_success}/>
                    <div className="order-success-complete__message-text">
                        <h3 className="order-success-complete__message-line">
                            Заказ успешно оформлен
                        </h3>
                        <div className="order-success-complete__message-line">
                            Мы свяжемся с вами в ближайшее время!
                        </div>
                    </div>
                </div>
                <div className="order-success-complete__main-page-button">
                    <a className="order-success-complete__main-page-link" href="/src/pages">Перейти на главную</a>
                </div>
            </div>
        </div>
    );
}

export default SuccessContent;