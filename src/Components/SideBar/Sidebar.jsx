import React, { useState } from 'react';
import { sideBarText } from '../../Global/text';

const Sidebar = () => {
    const [sideBar, setSideBar] = useState([
        {
            id: crypto.randomUUID(),
            title: sideBarText.HOME_LABEL,
        },
        {
            id: crypto.randomUUID(),
            title: sideBarText.HISTORY_LABEL,
        },
        {
            id: crypto.randomUUID(),
            title: sideBarText.PARTICIPANTS_LABEL,
        },
        {
            id: crypto.randomUUID(),
            title: sideBarText.CREATE_TEAM_LABEL,
        },
        {
            id: crypto.randomUUID(),
            title: sideBarText.USER_PROFILE_LABEL,
        },
    ])
    return (
        <div className='fixed top-0 bottom-0 left-0 bg-neutral-600 w-44 m-2 rounded-3xl'>
            {sideBar.map((items, index) => {
                return (
                    <div key={items.id}>
                        <ul>
                            <li className='text-white'>{items.title}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default Sidebar;