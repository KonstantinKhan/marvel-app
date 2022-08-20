import './randomChar.sass'
import mjolnir from '../../resources/img/mjolnir.png'
import {Component} from "react";
import MarvelService from "../../services/MarvelService";

interface State {
    char: Char
}

interface Char {
    name?: string,
    description?: string,
    thumbnail?: string,
    homepage?: string,
    wiki?: string
}

interface Props {

}


class RandomChar extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {char: {}}
        this.updateChar()
    }


    marvelService = new MarvelService()

    onCharLoaded = (char: Char) => {
        this.setState({
            char
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
            .getCharacter(id).then(this.onCharLoaded)
    }

    render() {
        const {char: {thumbnail, name, description, homepage, wiki}} = this.state
        return (
            <div className="random-char">
                <div className="random-char__block">
                    <img src={thumbnail} alt="thor"/>
                    <div className="random-char__block__info">
                        <p className="random-char__block__info__name">{name}</p>
                        <p className="random-char__block__info__descr">{description}</p>
                        <div className="random-char__block__info__buttons-block">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
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
}

export default RandomChar
