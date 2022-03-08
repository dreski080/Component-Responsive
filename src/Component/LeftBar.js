import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        color: 'white',
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: 'sticky', // agar bar tidak bergerak
        top: 0, // posisi bar agar tetap 0
        [theme.breakpoints.up("sm")]: {
            backgroundColor: 'white',
            color: "#555",
            border: "1px solid #ece7e7"
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(2),
            cursor: "pointer"
        }
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: 18 
        }
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
           display: "none"
        },
    },
}))

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <HomeIcon />
                </div>
                <Typography className={classes.text}>Home Pages</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <PersonIcon />
                </div>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <ListIcon />
                </div>
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <PhotoCameraIcon />
                </div>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <PlayCircleOutlineIcon />
                </div>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <TabletMacIcon />
                </div>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <BookmarkIcon />
                </div>
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <StorefrontIcon />
                </div>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <SettingsIcon />
                </div>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <ExitToAppIcon />
                </div>
                <Typography className={classes.text}>Log Out</Typography>
            </div>
        </Container>
    )
}

export default LeftBar
