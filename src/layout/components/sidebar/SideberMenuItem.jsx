import * as React from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { MdOutlineMediation } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { MdMoveToInbox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';

SideberMenuItem.propTypes = {
    isOpen: PropTypes.bool, // Change the type accordingly
};


export default function SideberMenuItem(props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const Menus = [
        { title: "Dashboard", icon: (<MdDashboardCustomize />) },
        { title: "Pages", icon: (<RiPagesFill />) },
        { title: "Media", spacing: true, icon: (<MdOutlineMediation />) },
        { title: "Projects", icon: (<GoProjectSymlink />) },
        { title: "Inbox", icon: (<MdMoveToInbox />) },
        { title: "Setting", spacing: true, icon: (<IoMdSettings />) },
    ]
    return (
        <div className=''>
            <ul className='ml-[-10px]'>
                {Menus.map((el, index) => (
                    <div key={index} >
                        <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md  mr-5 ${el.spacing ? `mt-9` : `mt-2`}`}>
                            <span className='text-2xl block float-left'>
                                {el.icon}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!props.isOpen && `hidden`}`}>
                                {el.title}
                            </span>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}