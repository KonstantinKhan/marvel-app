import './randomChar.sass'
import thor from '../../resources/img/thor.jpeg'
import mjolnir from '../../resources/img/mjolnir.png'

const RandomChar = () => {
    return (
        <div className="random-char">
            <div className="random-char__block">
                <img src={thor} alt="thor"/>
                <div className="random-char__block__info">
                    <p className="random-char__block__info__name">thor</p>
                    <p className="random-char__block__info__descr">As the Norse God of thunder and lightning, Thor
                        wields one of the greatest weapons ever made, the
                        enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile,
                        he's quite smart and compassionate...</p>
                    <div className="random-char__block__info__buttons-block">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="random-char__static">
                <p className="random-char__title">Random character for today! <br/>
                    Do you want to get to know him better?</p>
                <p className="random-char__title">Or choose another one</p>
                <a href="#" className="button button__main">
                    <div className="inner">try it</div>
                </a>
                <img src={mjolnir} alt="mjolnir" className="random-char__decoration"/>
            </div>
        </div>

    )
}

export default RandomChar