import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <form>
                <div>
                    <input placeholder={"Login"}/>
                </div>
                <div>
                    <input placeholder={"Password"}/>
                </div>
                <div>
                    <input type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;