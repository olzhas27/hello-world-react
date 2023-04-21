import "./CheckoutContent.css";
import Input from "../../../components/input/Input";
import TextArea from "../../../components/textarea/TextArea";

const CheckoutContent = () => {
    return (
        <div>
            <h1>Оформление заказа</h1>
            <div className="order-checkout-page-path">
                <div className="order-checkout-page-path__link">
                    Главная
                </div>
                <div className="order-checkout-page-path__link">
                    —
                </div>
                <div className="order-checkout-page-path__link order-checkout-page-path__link
                                order-checkout-page-path__link-color-grey">
                    Оформление заказа
                </div>
            </div>
            <div className="order-checkout-page-content">
                <div className="order-checkout-page-content__column">
                    <div className="customer-data">
                        <h3 className="customer-data__header">
                            Данные покупателя
                        </h3>
                        <div className="customer-data__input-list">
                            <Input type="text" placeholder="Имя"/>
                            <Input type="email" placeholder="E-mail"/>
                            <Input type="tel" placeholder="Телефон"/>
                        </div>
                    </div>
                    <div className="customer-data">
                        <h3 className="customer-data__header">
                            Адрес получателя
                        </h3>
                        <div className="customer-data__input-list">
                            <Input type="text" placeholder="Страна"/>
                            <Input type="text" placeholder="Город"/>
                            <Input type="text" placeholder="Улица"/>
                            <Input type="text" placeholder="Дом"/>
                            <Input type="text" placeholder="Квартира"/>
                        </div>
                    </div>
                    <div className="customer-data">
                        <h3 className="customer-data__header">
                            Комментарии
                        </h3>
                        <TextArea/>
                    </div>
                </div>
                <div className="order-checkout-page-content__column">
                    <div className="shopping-cart-content">
                        <h3 className="shopping-cart-content__block-header">
                            Ваш заказ
                        </h3>
                        <div className="shopping-cart-content-products">
                            <div className="shopping-cart-content-products__product-cost-line">
                                <div className="shopping-cart-content-products__column-product">
                                    Товар
                                </div>
                                <div className="shopping-cart-content-products__column-cost">
                                    Всего
                                </div>
                            </div>
                            <div className="shopping-cart-content-products__product-cost-line">
                                <div className="shopping-cart-content-products__column-product">
                                    Футболка USA
                                </div>
                                <div className="shopping-cart-content-products__column-cost">
                                    $129
                                </div>
                            </div>
                            <div className="shopping-cart-content-products__product-cost-line">
                                <div className="shopping-cart-content-products__column-product">
                                    Подытог
                                </div>
                                <div className="shopping-cart-content-products__column-cost">
                                    $129
                                </div>
                            </div>
                            <div className="shopping-cart-content-products__product-cost-total">
                                <div className="shopping-cart-content-products__column-product">
                                    Итого
                                </div>
                                <div className="shopping-cart-content-products__column-cost">
                                    $129
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Способы оплаты
                        </h3>
                        <div>
                            <input type="checkbox">Оплата наличными</input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutContent;