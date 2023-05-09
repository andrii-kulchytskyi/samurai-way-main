import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DataFormType = {
    login: string
    password: string
    checkbox: boolean
}

const LoginForm = (props: InjectedFormProps<DataFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={"input"}/>
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

const LoginPage = () => {
    const onSubmit = (formData: DataFormType) => {
        console.log(formData)
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default LoginPage;