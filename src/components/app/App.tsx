import React, {Component} from 'react';

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import '../../style/style.sass'
import './app.sass'

import decoration from '../../resources/img/vision.png'

interface State {
    selectedChar: number | null
}

interface Props {

}

class App extends Component<Props, State> {

    state = {
        selectedChar: null
    }

    onSelectedChar = (id: number) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onSelectedChar}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img src={decoration} alt="vision" className="bg-decoration"/>
                </main>
            </div>
        )
    }
}

export default App;
