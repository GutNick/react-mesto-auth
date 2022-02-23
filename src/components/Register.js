import React from "react";
import {Link, withRouter} from "react-router-dom";

function Register(props) {
    return(
        <section className="authorization">
            <h2 className="authorization__title">Регистрация</h2>
            <form className="form authorization__form">
                <input type="email" className="form__input" placeholder="Email"/>
                <input type="password" className="form__input" placeholder="Пароль"/>
                <button type="submit" className="form__submit">Зарегистрироваться</button>
            </form>
            <p className="authorization__description">Уже зарегистрированы? <Link to="/sign-in" className="authorization__link">Войти</Link></p>
        </section>
    )
}

export default withRouter(Register);