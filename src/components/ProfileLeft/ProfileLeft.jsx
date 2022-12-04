import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'

export const ProfileLeft = () => {
    return (
        <div>
            <div className="ProfileSide">
                <LogoSearch/>
                <InfoCard/>
                <FollowersCard/>
            </div>
        </div>
    )
}
