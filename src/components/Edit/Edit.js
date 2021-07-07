import React from "react";
import { useParams } from 'react-router-dom';
import { useFormik } from "formik"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { validate } from "../Create/validate";
import { useStyles } from "../Create/styles";

export const Edit = (props) => {
    const classes = useStyles();
    const { id } = useParams();
    const obj = props.data.filter(t => t._id == id)
    const formik = useFormik(
        {
            initialValues: {
                empName: obj[0].empName,
                empEmail: obj[0].empEmail,
                empMobile: obj[0].empMobile
            },
            validate,
            onSubmit: async (values) => {
                const url = 'http://localhost:8000/emp/' + id
                const requestOptions = {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                }
                fetch(url, requestOptions)
                window.location = "/"
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