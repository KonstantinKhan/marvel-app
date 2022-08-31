import React, {Component} from 'react';

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import '../../style/style.sass'
import './app.sass'

import decoration from '../../resources/img/vision.png'

interface State {
    selectedChar: string
}

interface Props {

}

class App extends Component<Props, State> {

    onSelectedChar = (id: string) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharSelected={this.onSelectedChar}/>
                        <CharInfo charId={this.state.selectedChar}/>
                    </div>
                    <img src={decoration} alt="vision" className="bg-decoration"/>
                </main>
            </div>
        )
    }
}

export default App;
