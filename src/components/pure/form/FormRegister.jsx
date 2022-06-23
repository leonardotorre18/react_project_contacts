import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password too short')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .when("password", {
      is: value => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        '¡Passwords must match!'
      )
    }).required('You must confirm the password')
})


export default function Register({ setLogged }) {

  const navigate = useNavigate();

  return (
      <div><Formik
        validationSchema={formSchema}
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   setSubmitting(false);
          //   // alert(JSON.stringify(values, null, 2));
          // }, 10);
          localStorage.setItem('email', values.email);
          localStorage.setItem('password', values.password);
          setLogged(true);
          navigate('/');
        }}
      >

      { props => {
        // const {
        //     // errors
        // } = props;
        return (

      <Form
        style={{
          'maxWidth': '800px',
          'margin': '0 auto'
        }}
      >
      <h3 className="mb-3">Resgister</h3>
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
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">Password Confirm</label>
        <Field 
          type="password" 
          id="passwordConfirm" 
          name="passwordConfirm" 
          className="form-control" 
        />
        <ErrorMessage name='passwordConfirm' className="form-text text-muted" />
      </div>

      <div className="col d-flex justify-content-center">
        <button className="btn btn-primary btn-block mb-4" type="submit">Sign up</button>
      </div>
      </Form>
        )
      }}
    </Formik></div>
  )
}
