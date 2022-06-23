import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});



export default function Login() {

  return (
      <div><Formik
        validationSchema={formSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 10);
        }}
      >

      { props => {
        const {
            errors
        } = props;
        console.log(errors);
        return (

      <Form
        style={{
          'maxWidth': '800px',
          'margin': '0 auto'
        }}
      >
      <h3 className="mb-3">Login</h3>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="email">Email address</label>
        <Field 
          type="email" 
          id="email" 
          name="email" 
          className="form-control" 
        />
        <ErrorMessage name='email' className="form-text text-muted" />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">Password</label>
        <Field 
          type="password" 
          id="password" 
          name="password" 
          className="form-control" 
        />
        <ErrorMessage name='password' className="form-text text-muted" />
      </div>

      <div className="col d-flex justify-content-center">
        <button className="btn btn-primary btn-block mb-4">Sign in</button>
      </div>
      </Form>
        )
      }}
    </Formik></div>
  )
}
