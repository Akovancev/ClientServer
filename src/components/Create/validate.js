export const validate = values => {
    const errors = {}

    if (!values.empName) {
        errors.empName = 'Required'
    }
    else if (values.empName.length > 16) {
        errors.empName = 'Must be 16 characters or less'
    }

    if (!values.empEmail) {
        errors.empEmail = 'Required'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.empEmail)) {
        errors.empEmail = 'Invalid email address'
    }

    if (!values.empMobile) {
        errors.phone = 'Required'
    }
    else if (!/^(\+7|8)[\- ()]?\d{3}[\- )]?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/.test(values.empMobile)) {
        errors.empMobile = 'Invalid phone number'
    }

    return errors
}