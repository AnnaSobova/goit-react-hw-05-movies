import{ Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const schema = Yup.object().shape({
    movieSearch: Yup.string()
        .min(3, 'Too short name!')
        .max(20, 'Too long name!')
        .required(),
    
});
const SearchForm =({onSubmit})=>{
    return(
        <Formik
        initialValues={{movieSearch:''}}
        onSubmit={onSubmit}
        validatorSchema={schema}
       >
        {({errors,touched})=>(
            <Form>
                <Field name="movieSearch">
                  {errors.movieSearch&& touched.movieSearch?(
                    <div>{errors.movieSearch}</div>
                  ):null}
                </Field>
                <button type="submit"> Search </button>
            </Form>
        )}
       </Formik>
    );
};
export default SearchForm;

SearchForm.propType ={
    onSubmit:PropTypes.func.isRequired,
};

