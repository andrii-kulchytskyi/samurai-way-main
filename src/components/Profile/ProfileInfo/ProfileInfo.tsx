import React from 'react';
import Preloader from "../../common/Preloader";
import ProfileStatus from "../ProfileStatus";


type ProfileInfoType = {
    profile: number
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader isFetching={true}/>
    }
    return (
        <div>

            <img src={(props.profile).toString()}/>
            <ProfileStatus status={"STATUS SHMATUS"}/>
            <div>ava+description</div>
        </div>
    );
};

