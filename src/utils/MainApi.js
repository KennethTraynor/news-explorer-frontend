const baseUrl = 'http://localhost:3000';

export const register = (password, email, name) => {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email, name })
    })
        .then((res) => handleResponse(res))
};

export const authorize = (password, email) => {
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email })
    })
        .then((res) => handleResponse(res))
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data;
            } else {
                return Promise.reject(data);
            }
        })
};

export const getContent = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((res) => handleResponse(res))
}

export const getSavedArticles = () => {
    return fetch(`${baseUrl}/articles`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then((res) => handleResponse(res))
};

export const saveArticle = (keyword, title, text, date, source, link, image) => {
    return fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ keyword, title, text, date, source, link, image })
    })
        .then((res) => handleResponse(res))
};

export const removeArticle = (articleId) => {
    return fetch(`${baseUrl}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
        .then((res) => handleResponse(res))
};


const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject(res);
}