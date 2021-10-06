import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import makeStyles from './styles'

function NavBar() {

    const classes = makeStyles()

    return(
        <div>
            <AppBar position='fixed' className={classes.AppBar}>
                <Toolbar>
                    <ul className={ classes.navUl }>
                        <li className={ classes.navLi }>
                            <Link className={
                                classes.Link
                                }
                                to='/'>
                                Home
                            </Link>
                        </li>
                        <li className={ classes.navLi }>
                            <Link className={
                                classes.Link
                                }
                                to='/workout'>
                                Workout
                            </Link>
                        </li>
                        <li className={ classes.navLi }>
                            <Link className={
                                classes.Link
                                }
                                to='/profile'>
                                Profile
                            </Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar