import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

 function MyAppBar ()
 {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        My Tasks
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
 } 

 export default MyAppBar;