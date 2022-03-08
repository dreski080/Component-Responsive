import React from 'react'
import {Avatar, Container, makeStyles, Typography, ImageList, ImageListItem, Link, Divider} from '@material-ui/core'
import { AvatarGroup } from "@material-ui/lab";
import Foto1 from '../Asset/Gambar/1.jpeg'
import Foto2 from '../Asset/Gambar/2.jpg'
import Foto3 from '../Asset/Gambar/3.jpg'
import Foto4 from '../Asset/Gambar/4.jpg'
import Foto5 from '../Asset/Gambar/5.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: 'gray'
    },
    link: {
        marginRight:theme.spacing(2),
        color: "gray",
        fontSize: 16
    }
}))

function RightBar() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Online Friend</Typography>
            <AvatarGroup max={6} style={{marginBottom: 20}}>
                <Avatar alt='Remy Sharp' src={Foto1} />
                <Avatar alt='Travis Howard' src={Foto2} />
                <Avatar alt='Cindy Baker' src={Foto3} />
                <Avatar alt='Agnes Walker' src={Foto4} />
                <Avatar alt='Trevor Henderson' src={Foto5} />
                <Avatar alt='Trevor Henderson' src={Foto5} />
                <Avatar alt='Trevor Henderson' src={Foto5} />
                <Avatar alt='Trevor Henderson' src={Foto5} />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
                <ImageListItem>
                <img
                    src={Foto1}
                    alt=""
                />
                </ImageListItem>
                <ImageListItem>
                <img
                    src={Foto2}
                    alt=""
                />
                </ImageListItem>
                <ImageListItem>
                <img
                    src={Foto3}
                    alt=""
                />
                </ImageListItem>
                <ImageListItem>
                <img
                    src={Foto4}
                    alt=""
                />
                </ImageListItem>
                <ImageListItem>
                <img
                    src={Foto5}
                    alt=""
                />
                </ImageListItem>
                <ImageListItem>
                <img
                    src={Foto2}
                    alt=""
                />
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom>Categories</Typography>
            <Link href='#' className={classes.link} variant='body2'>
                Sport
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Food
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Music
            </Link>
            <Divider flexItem style={{marginBottom: 5}}/>
            <Link href='#' className={classes.link} variant='body2'>
                Movies
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Science
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Life
            </Link>
        </Container>
    )
}

export default RightBar
