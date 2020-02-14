import React, { useState } from "react";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BodyOrderChoiceList from './BodyOrderChoiceList'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const BodyOrderChoiceListDrawer = ({ orderList, setOrderList }) => {

    const [state, setState] = useState({ bottom: false })

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    return (
        <Grid container>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Grid justify="flex-end" container>
                <Icon style={{ fontSize: 100 }} onClick={toggleDrawer('bottom', true)}>add_circle</Icon>
            </Grid>


            <SwipeableDrawer
                anchor="bottom"
                open={state.bottom}
                onClose={toggleDrawer('bottom', false)}
            ><BodyOrderChoiceList orderList={orderList} setOrderList={setOrderList} /></SwipeableDrawer>
        </Grid>

    )
}
export default BodyOrderChoiceListDrawer