import React from 'react';
import ReactDOM from 'react-dom/client';
import './services/MarvelService'
import App from './components/app/App';
import MarvelService from "./services/MarvelService";

const marvelService = new MarvelService()

// marvelService.getAllCharacters().then(res => res.data.results.forEach((item: any) => console.log(item.name)))
// marvelService.getCharacter(1011052).then(res => res.data.results.forEach((item: any) => console.log(item.name)))

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

