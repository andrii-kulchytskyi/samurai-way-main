import React from 'react';
import preloader from "../../assets/images/preloader.gif";

type PreloaderPropsType = {
    isFetching: boolean
}

const Preloader = (props: PreloaderPropsType) => {
    return (
        <div> {props.isFetching ? <img src={preloader}/> : null}</div>
    );
};

export default Preloader;