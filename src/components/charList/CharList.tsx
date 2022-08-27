import './charList.sass'
import React, {Component} from "react";
import MarvelService from "../../services/MarvelService";
import {Char} from "../randomChar/RandomChar";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

interface State {
    chars: Char[]
    loading: boolean
    error: boolean
}

interface Props {
}


class CharList extends Component<Props, State> {

    state = {
        chars: [] as Char[],
        loading: true,
        error: false
    }

    marvelService = new MarvelService()

    onCharListLoaded = (charList: Char[]) => {
        this.setState({
                chars: charList,
                loading: false
            }
        )
    }

    componentDidMount() {
        this.marvelService
            .getAllCharacters()
            .then(chars => {
                this.onCharListLoaded(chars)
            })
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderChars = (chars: Char[]) => {
        const items = chars.map(item => {
            let imgStyle: React.CSSProperties = {objectFit: "cover"}
            if (item.thumbnail?.includes("image_not_available")) {
                imgStyle = {objectFit: "unset"}
            }
            return (
                <li className="char__item"
                key={item.id}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <p className="char__name">{item.name}</p>
                </li>
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>

        )
    }

    render() {
        const {chars, loading, error} = this.state

        const items = this.renderChars(chars)
        const spinner = loading ? <Spinner/> : null
        const errorMessage = error ? <ErrorMessage/> : null

        const content = !(loading || error) ? items : null

        return (
            <div className="char__list">
                {spinner}
                {errorMessage}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList