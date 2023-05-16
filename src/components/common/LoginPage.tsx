import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginTC, logOutTC} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

type DataFormType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<DataFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'email'} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={"input"} typ={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/> remember me
            </div>
            <div>
                <button>
                    LOGIN
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<DataFormType>(
    {form: 'login'}
)(LoginForm)

const LoginPage = (props: any) => {
        const onSubmit = (formData: DataFormType) => {
            props.login(formData.email, formData.password, formData.rememberMe)
        }
        if (props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
            ;
    }
;
const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC, logOutTC})(LoginPage);