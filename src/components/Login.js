import React from "react";
import {Link, withRouter} from "react-router-dom";

function Login(props) {
    return(
        <section className="authorization">
            <h2 className="authorization__title">Вход</h2>
            <form className="form authorization__form">
                <input type="email" className="form__input" placeholder="Email"/>
                <input type="password" className="form__input" placeholder="Пароль"/>
                <button type="submit" className="form__submit">Войти</button>
            </form>
            <p className="authorization__description">Уже зарегистрированы? <Link to="/sign-up" className="authorization__link">Войти</Link></p>
        </section>
    )
}

export default withRouter(Login);