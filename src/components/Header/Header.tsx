import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/Pepsi_logo_emblem_logotype-2.png?auto=format&q=60&fit=max&w=930'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>
                    {props.login}---
                    {<button onClick={props.logout}>LOGOUT</button>}
                </div> : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>

        </header>
    )
}
export default Header