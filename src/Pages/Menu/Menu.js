
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Navbar from '../../Component/Navbar'
import LeftBar from '../../Component/LeftBar'
import Feed from '../../Component/Feed'
import RigthBar from '../../Component/RightBar'
import Add from '../../Component/Add'

const useStyles = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
}))

function Menu() {
    const classes = useStyles();

    return (
        <div>
            <Navbar/>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LeftBar/>
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed/>
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <RigthBar/>
                </Grid>
            </Grid>
            <Add/>
        </div>
    )
}

export default Menu


