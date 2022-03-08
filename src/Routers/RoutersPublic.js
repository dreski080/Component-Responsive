import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

//Pages
import Home from '../Pages/Dashboard/Dashboard'
import Menu from '../Pages/Menu/Menu'

function Routers() {
    return(
        <>
        <Grid container>
            <Grid md={12}>
                <Switch>
                <Route exact path="/" component={Menu} />
                </Switch>
            </Grid>
        </Grid>
        </>
    )
}
export default withRouter(Routers);