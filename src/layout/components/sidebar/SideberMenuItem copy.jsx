import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
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

    return (
        <div className=''>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
            >
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText primary={props.isOpen ? `Sent mail` : ``} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary={props.isOpen ? `Drafts` : ``} />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={props.isOpen ? `Inbox` : ``} />
                </ListItemButton>
            </List>
            <Divider />
        </div>
    );
}