import './charList.sass'
import abyss from '../../resources/img/abyss.jpg'

const CharList = () => {
    return (
        <div>
            <ul className="char__grid">
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item char__item_selected">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
                <li className="char__item">
                    <img src={abyss} alt=""/>
                    <p className="char__name">Abyss</p>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList