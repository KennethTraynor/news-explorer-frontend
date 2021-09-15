const baseUrl = 'https://newsapi.org/v2';
const apiKey = '0c20ad1a914b4c689fff7881aac74be8';
const pageSize = 100;

export const getNews = ({ keyword }) => {
    const toDate = new Date();
    const fromDate = new Date();

    fromDate.setDate(fromDate.getDate() - 5);

    return fetch(`${baseUrl}/everything?q=${keyword}&from=${fromDate}&to=${toDate}&pageSize=${pageSize}=&apiKey=${apiKey}`)
        .then((res) => {
            return handleResponse(res);
        })
}

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}