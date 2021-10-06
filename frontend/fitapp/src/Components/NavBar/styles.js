import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black',
        margin: ''
    },
    Link: {
        color: 'red',
        '&:hover': {
            textDecoration: 'none',
            color: 'white',
        }
    },
    navUl: {
        [theme.breakpoints.down('xs')]: {
          display: 'none',
        },
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
    },
    navLi: {
        float: 'left',
        marginRight: '10px',
        border: '2px solid black',
        padding: '5px',
        borderRadius: '5px',
        color: 'rgb(0,255,105)',
        textDecoration: 'none',
    }
}
))