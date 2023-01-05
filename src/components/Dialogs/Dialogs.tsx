import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Andrei
                </div>
                <div className={s.dialog}>
                    MisterLoh
                </div>
                <div className={s.dialog}>
                    Cmo
                </div>
                <div className={s.dialog}>
                    Hola
                </div>
                <div className={s.dialog}>
                    Debil
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Huillo
                </div>
                <div className={s.message}>
                    Bla
                </div>
            </div>
        </div>
    );
};

export default Dialogs;