import "./ShopContent.css"
import PathHeader from "../../../components/path_header/PathHeader";
import t_shirt from "../../../common/img/png/t-shirt.png";
import swim_suit from "../../../common/img/png/swim-suit.png";
import sweatshirt from "../../../common/img/png/sweatshirt.png";


const ShopContent = () => {
    const clothingTypes = ["Все", "Пальто", "Свитшоты", "Кардиганы", "Толстовки"];

    const clothes = [
        {
            "name": "Футболка USA",
            "discount": "$229",
            "coast": "$129",
            "image": t_shirt
        },
        {
            "name": "Купальник Glow",
            "coast": "$129",
            "image": swim_suit
        },
        {
            "name": "Свитшот Sweet Shot",
            "coast": "$129",
            "image": sweatshirt
        },
        {
            "name": "Футболка USA",
            "coast": "$129",
            "image": t_shirt
        },
        {
            "name": "Купальник Glow",
            "coast": "$129",
            "image": swim_suit
        },
        {
            "name": "Свитшот Sweet Shot",
            "coast": "$129",
            "image": sweatshirt
        },
        {
            "name": "Футболка USA",
            "coast": "$129",
            "image": t_shirt
        },
        {
            "name": "Купальник Glow",
            "coast": "$129",
            "image": swim_suit
        },
        {
            "name": "Свитшот Sweet Shot",
            "coast": "$129",
            "image": sweatshirt
        }];

    return (
        <div className="shop-content">
            <PathHeader pagePathArray={["Главная", "Магазин"]}/>
            <div className="clothing-types">
                {
                    clothingTypes.map(type => (
                        <div className="clothing-types__item">
                            {type}
                        </div>
                    ))
                }
            </div>
            <div className="counter">
                Показано: 9 из 12 товаров
            </div>
            <div className="clothing-list">
                {
                    clothes.map(cloth => (
                        <div className="clothing-list__item">
                            <img className="clothing-list__item-image"
                                 src={cloth.image}
                                 placeholder={cloth.name}/>
                            <h4 className="clothing-list__item-name">
                                {cloth.name}
                            </h4>
                            <div className="clothing-list__item-coast-and-discount">
                                <div if={cloth.discount}
                                    className="clothing-list__item-discount">
                                    {cloth.discount}
                                </div>
                                <div className="clothing-list__item-coast">
                                    {cloth.coast}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ShopContent;

// TODO как задать модификатор дефолтный и по клику