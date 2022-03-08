
import React, { useState } from 'react'
import { AppBar, Toolbar, Typography,  makeStyles, InputBase,  alpha,
         Badge, Avatar } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CancelIcon from '@mui/icons-material/Cancel';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: '70%'
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        display: (props) => props.open ? "none" : "flex" ,
        alignItems: 'center',
    },
    badge: {
        marginRight: theme.spacing(2),
    },
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open});
    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>Kami.com</Typography>
                <Typography variant='h6' className={classes.logoSm}>KAMI</Typography>
                <div className={classes.search}>
                    <SearchIcon/>
                    <InputBase placeholder='Search...' className={classes.input} />
                    <div  className={classes.cancel}>
                        <CancelIcon onClick={() => setOpen(false)} />
                    </div>
                </div>
                <div className={classes.icons}>
                    <div  className={classes.searchButton}>
                        <SearchIcon onClick={() => setOpen(true)}/>
                    </div>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <NotificationsIcon/>
                    </Badge>
                    <Avatar alt="Remy Sharp">RD</Avatar>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;



