import {Char} from "../components/randomChar/RandomChar";

class MarvelService {
    _apiBase: string = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey: string = 'apikey=57f798407fac8e5cd25352d39223487d'

    getResource = async (url: string) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , status ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async (): Promise<Char[]> => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    }

    getCharacter = async () => {
        const res = await this.getResource(`${this._apiBase}characters/${this._getRandomCharId()}?${this._apiKey}`)
        return this._transformCharacter(res.data.results[0])
    }

    _getRandomCharId = () => {
        return Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
    }

    _transformCharacter = (char: any) => {
        return {
            name: char.name,
            description: char.description ? char.description : 'There is no description for this character',
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService