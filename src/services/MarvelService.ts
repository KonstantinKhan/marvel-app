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

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }

    getCharacter = (id: number) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }
}

export default MarvelService