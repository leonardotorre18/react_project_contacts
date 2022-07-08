import { connect } from 'react-redux'
import { sagaActions } from '../../../store/actions/sagaActions';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, Form } from 'formik';

const formSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is Required'),
  password: Yup.string().required()
});


function LoginForm({ loginRequest }) {

  const initialValues = {
    email: '',
    password:  '',
  }
  return (
    <div><Formik
      initialValues = { initialValues }
      validationSchema = {formSchema}
      onSubmit={(values, {resetForm}) => {
        loginRequest(values.email, values.password)
        resetForm({
          values: ''
        })
      }}
    >
        <Form className='form'>
          <h3 className='title'>Sign In</h3>
          <div className="form-group"> 
            <label htmlFor="email">Email</label>
            <Field type="email" name='email' className="input" id="email" />
            <ErrorMessage name='email' className="form-text text-muted"></ErrorMessage>
          </div>
          <div className="form-group"> 
            <label htmlFor="password">Password</label>
            <Field type="text" name='password' className="input" id="password" />
          </div>
          <button type="submit" className="input">Sign In</button>
        </Form>

    </Formik></div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (email, password) => {
      dispatch(sagaActions.login(email, password))
    }
  }
}
export default connect(null, mapDispatchToProps)(LoginForm)
