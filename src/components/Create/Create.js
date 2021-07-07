import React from "react";
import { validate } from "./validate";
import { useFormik } from "formik"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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

export const Create = () => {
    const classes = useStyles();

    const formik = useFormik(
        {
            initialValues: {
                empName: '',
                empEmail: '',
                empMobile: ''
            },
            validate,
            onSubmit: async (values) => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                }
                values.empName = ''
                values.empEmail = ''
                values.empMobile = ''
                fetch('http://localhost:8000/emp/create', requestOptions)
            }
        }
    )
    return (
        <div>
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    error={formik.touched.empName && Boolean(formik.errors.empName)}
                    id="empName"
                    name="empName"
                    label="Name"
                    helperText={formik.touched.empName && formik.errors.empName}
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.empName}
                />
                <TextField
                    fullWidth
                    error={formik.touched.empEmail && Boolean(formik.errors.empEmail)}
                    id="empEmail"
                    name="empEmail"
                    label="Email"
                    helperText={formik.touched.empEmail && formik.errors.empEmail}
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.empEmail}
                />
                <TextField
                    fullWidth
                    error={formik.touched.empMobile && Boolean(formik.errors.empMobile)}
                    id="empMobile"
                    name="empMobile"
                    label="Phone number"
                    helperText={formik.touched.empMobile && formik.errors.empMobile}
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.empMobile}
                />
                <Button fullWidth color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}