import './charInfo.sass'
import thor from '../../resources/img/thor.jpeg'

const CharInfo = () => {
    return (
        <div className="char__info">
            <div className="char__basics">
                <img src={thor} alt=""/>
                <div>
                    <p className="char__info-name">Thor</p>
                    <div className="char__btns">
                        <a href="" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="" className="button button__secondary">
                            <div className="inner">wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <p className="char__description">
                As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the
                enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's
                quite smart and compassionate...
            </p>
            <div>
                <p className="char__comics">Comics: </p>
                <li className="char__comics-item">
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className="char__comics-item">
                    Alpha Flight (1983) #50
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #503
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #504
                </li>
                <li className="char__comics-item">
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Vengeance (2011) #4
                </li>
                <li className="char__comics-item">
                    Avengers (1963) #1
                </li>
                <li className="char__comics-item">
                    Avengers (1996) #1
                </li>
            </div>
        </div>
    )
}

export default CharInfo