class NewsApi {
    constructor({ baseUrl, apiKey }) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
        this._pageSize = 100;
    }

    getNews({ keyword }) {
        const toDate = new Date();
        const fromDate = new Date();
        
        fromDate.setDate(fromDate.getDate() - 5);

        return fetch(`${this._baseUrl}/everything?q=${keyword}&from=${fromDate}&to=${toDate}&pageSize=${this._pageSize}=&apiKey=${this._apiKey}`)
        .then((res) => {
            return this._handleResponse(res);
        })
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }


}

const newsApi = new NewsApi({ baseUrl: 'https://newsapi.org/v2', apiKey: '0c20ad1a914b4c689fff7881aac74be8' });

export default newsApi;