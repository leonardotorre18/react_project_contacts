import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../../styles/FormContact.scss';
import propTypes from 'prop-types';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es necesario'),
  lastname: Yup.string(),
  email: Yup.string().email('Email Inválido').required('Email necesario')

})

export default function FormContact({addContact}) {

  return (
    <div><Formik
      initialValues={{
          name: '',
          lastname: '',
          email: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
        addContact(values)
      }}
      validationSchema={FormSchema}
    >
      { props => {
        const {
              // values,
              // isSubmitting,
              // handleChange,
              // handleBlur,
              // handleSubmit,
              touched,
              errors
        } = props;
        
        return(
        <Form className='form'>
          <h3 className='title'>Agregar Contacto</h3>

          <div className="form-group">
            <label htmlFor='name'>Nombre</label>
            <Field
              id='name'
              name='name'
              className='input'
            />
            <ErrorMessage name='name' />
            {errors.name && touched.name && 'Error en el nombre'}
          </div>

          <div className="form-group">
            <label htmlFor='lastname'>Apellido</label>
            <Field
              id='lastname'
              name='lastname' 
              className='input'
            />
          </div>

          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <Field
              id='email'                       
              name='email'
              className='input'
            />
          </div>

          <input type="submit" className='input'/>
        </Form>
        )
      }}
    </Formik></div>
  )
}

FormContact.propTypes = {
    addContact: propTypes.func.isRequired
};