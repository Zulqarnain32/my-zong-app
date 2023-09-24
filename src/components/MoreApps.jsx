import React from 'react'
import { BsDatabaseUp } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"
import { LuBoxes } from "react-icons/lu"
import { FaBoxTissue } from "react-icons/fa"
import "./MoreApps.css"
const MoreApps = () => {
    return (
        <>
            <div className="more-app-container">
                <div className="please">Please select from the following
                    categories</div>
                <div className="package-data">
                    <div>Package & Data SIMs</div>
                    <div className="flex-container">
                        <div className="package">
                            <BsDatabaseUp className='more-icon' />
                            <div>Data</div>
                        </div>
                        <div className="package">
                            <TfiWorld className='more-icon' />
                            <div>Internet</div>
                        </div>
                        <div className="package">
                            <FaBoxTissue className='more-icon' />
                            <div>Zong Club</div>
                        </div>
                        <div className="package">
                            <LuBoxes className='more-icon' />
                            <div className="Packages">Packages</div>
                        </div>
                    </div>
                </div>
                <div className="more-apps-listing">
                    International Roaming & IDD
                </div>
                <div className="more-apps-listing">
                    Value Added Services
                </div>
                <div className="more-apps-listing">
                    Apps and Games
                </div>
                <div className="more-apps-listing">
                    Rewards
                </div>
                <div className="more-apps-listing">
                    History Detail
                </div>

            </div>
        </>
    )
}

export default MoreApps
