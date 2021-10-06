import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'


function NavBar() {
    return(
        <div>
            <AppBar position='fixed' className={classes.AppBar}>
                <Toolbar>
                    <ul className={ classes.navUl }>
                        <li className={ classes.navLi }>
                            <Link className={
                                
                            }
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar