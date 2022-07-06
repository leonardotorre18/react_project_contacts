import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../../styles/TaskForm.scss';
import { actions } from '../../../store/actions/actions';
import { connect } from 'react-redux';


const formSchema = Yup.object().shape({
  title: Yup.string().required('El nombre es requerido'),
  description: Yup.string()
});


const TaskForm = ({ addTask }) => {

  const initialValues = {
    title: '',
    description:  '',
    completed: false
  }
  return (
    <div><Formik
      initialValues = { initialValues }
      validationSchema = {formSchema}
      onSubmit={(values, {resetForm}) => {
        addTask(values)
        resetForm({
          values: ''
        })
      }}
    >
        <Form className='form'>
          <h3 className='title'>Add New Tasks</h3>
          <div className="form-group"> 
            <label htmlFor="title">Title</label>
            <Field type="text" name='title' className="input" id="name" />
            <ErrorMessage name='name' className="form-text text-muted"></ErrorMessage>
          </div>
          <div className="form-group"> 
            <label htmlFor="description">Description</label>
            <Field type="text" name='description' className="input" id="description" />
          </div>
          <button type="submit" className="input">Add</button>
        </Form>

    </Formik></div>
  )

}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch(actions.addTask(task))
    }
  }
}
export default connect(null, mapDispatchToProps)(TaskForm)
