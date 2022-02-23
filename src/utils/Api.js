class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _handleRes(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getProfile() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(this._handleRes)
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }
        )
            .then(this._handleRes)
    }

    changeAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar.avatar
            })
        }
        )
            .then(this._handleRes)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(this._handleRes)
    }

    getAllData() {
        return Promise.all([this.getProfile(), this.getInitialCards()])
    }



    setCard(card) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        }
        )
            .then(this._handleRes)
    }

    changeLikeCardStatus(id, isLiked) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: (isLiked ? "PUT" : "DELETE"),
            headers: this._headers
        })
            .then(this._handleRes)
    }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        }
        )
            .then(this._handleRes)
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-33',
    headers: {
        authorization: 'ee287f3d-6dbe-4e30-b60a-0b97ee125818',
        'Content-Type': 'application/json'
    }
});

export default api;