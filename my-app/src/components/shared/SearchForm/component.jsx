import {connect} from "react-redux";

import {useNavigate} from "react-router-dom";

import {Formik, Form, Field, ErrorMessage} from 'formik';

import {setSearchedHistory} from "../../../store/movies/actions";

import './styles.scss'

const SearchForm = ({setSearchedHistory, errorMessage}) => {
    const navigate = useNavigate()
    const searchNavigate = (query) => navigate(query, {replace: true})

    const validate =values => {
        const errors = {};
        if (!values.search) {
            errors.search = 'Required';
        } else if (
            values.search.length < 3
        ) {
            errors.search = 'Request must be more than 3 characters';
        }
        return errors;
    }
    const onSubmit = (values, {setSubmitting, resetForm}) => {
        searchNavigate(`/search/${values.search}`)
        setSearchedHistory(values.search)
        setSubmitting(false)
        resetForm()
    }

    return (
        <div className='hero_search'>
            <Formik
                initialValues={{search: ''}}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({isSubmitting,errors,touched}) => (
                    <Form>
                        <Field type="text" placeholder={errors.search ==='Required' & touched.search ? 'Enter min 3 letter for search' : 'What will we watch...' } name="search" className={errors.search ==='Required' & touched.search && 'not_valid'} />
                        <button type="submit" disabled={isSubmitting}>Search</button>
                        {errorMessage &&  <ErrorMessage name='search' component='div'/>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapDispatchToProps = {
    setSearchedHistory,
}

export default connect(null, mapDispatchToProps)(SearchForm)