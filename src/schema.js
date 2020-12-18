import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('you must provide your name')
        .min(2, "your name must be two characters or longer"),
    size: yup.string()
        .required('you must select a size'),
    sauce: yup.string()
        .required("you must pick a sauce"),
})