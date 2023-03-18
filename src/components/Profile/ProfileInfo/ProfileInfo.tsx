import React from 'react';


type ProfileInfoType = {
    profile: number
}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img
                    src="https://www.ikea.com/images/a-small-living-room-area-with-lots-of-light-a-sofa-a-tv-a-ve-976b1c05c23de825421229a2abec9203.jpg"/>
            </div>
            <img src={(props.profile).toString()} />
            <div>ava+description</div>
        </div>
    );
};

