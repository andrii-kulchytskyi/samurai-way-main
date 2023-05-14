import React from 'react';
import styles from '../formControls/FormControls.module.css'

export const Textarea = (props: any) => {
    return (
        <div className={styles.formControl}>
            <textarea{...props}/>
        </div>
    )
}