import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core'
import Gambar from '../Asset/Gambar/bunga-sakura.jpg'

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')] : {
            height: 150
        }
    },
}))

function Post() {
    const classes = useStyles();

    return (       
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    component="img"
                    src={Gambar}
                    title="My Post" 
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>My First Post</Typography>
                    <Typography variant='body2'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary'>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post
