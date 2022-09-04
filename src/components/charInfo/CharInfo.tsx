import React, {Component} from "react";

import {Char, Comic} from "../randomChar/RandomChar";
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import MarvelService from "../../services/MarvelService";

import './charInfo.sass'

interface Props {
    charId: number | null
}

interface State {
    char: Char,
    loading: boolean,
    error: boolean,
}

class CharInfo extends Component<Props, State> {

    state = {char: {}, loading: false, error: false}

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const {charId} = this.props
        if (!charId) {
            return
        }

        this.onCharLoading()

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharLoaded = (char: Char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState(
            {
                loading: true
            }
        )
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {

        const {char, loading, error} = this.state

        const skeleton = Object.keys(char).length !== 0 || loading || error ? null : <Skeleton/>

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error || Object.keys(char).length === 0) ? <View {...char}/> : null

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = (char: Char) => {

    const {name, description, thumbnail, homepage, wiki, comics} = char

    let imgStyle: React.CSSProperties = {objectFit: "cover"}
    if (thumbnail?.includes("image_not_available")) {
        imgStyle = {objectFit: "contain"}
    }

    const length = comics?.length ?? 0

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <p className="char__info-name">{name}</p>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <p className="char__description">
                {description}
            </p>
            <div>
                <p className="char__comics">Comics: </p>
                <ul className="char__comics-list">
                    {length > 0 ? null : 'There is comics with this character'}

                    {
                        comics?.map((item, index) => {
                            if (index < 10) {
                                return (
                                    <li key={index} className="char__comics-item">
                                        {item.name}
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default CharInfo