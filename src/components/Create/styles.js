import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%'
        },
        '& .MuiButton-root': {
            margin: theme.spacing(1),
            width: '100%'
        },
    },
}));