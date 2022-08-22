import {Component} from "react";

import MarvelService from "../../services/MarvelService";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage"

import mjolnir from '../../resources/img/mjolnir.png'

import './randomChar.sass'

interface State {
    char: Char,
    loading: boolean,
    error: boolean
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

    state = {char: {}, loading: true, error: false}

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
    }

    onCharLoaded = (char: Char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state
        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View {...char}/> : null

        return (
            <div className="random-char">
                {errorMessage}
                {spinner}
                {content}
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

const View = (char: Char) => {
    const {name, description, thumbnail, homepage, wiki} = char
    return (
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
    )
}

export default RandomChar
