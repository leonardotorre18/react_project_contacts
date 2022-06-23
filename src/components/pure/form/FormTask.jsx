import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/enums';


const formSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  description: Yup.string()
});


const FormTask = ({addTask}) => {

  const initialValues = {
    name: '',
    description:  '',
    completed: false,
    level: LEVELS.NORMAL
  }
  return (
    <div><Formik
      initialValues = { initialValues }
      validationSchema = {formSchema}
      onSubmit={(values) => {
        addTask(values)
      }}
    >
        <Form>
          <h3>New Task</h3>
          <div className="form-group mb-4"> 
            <label htmlFor="name">Name</label>
            <Field type="text" name='name' className="form-control" id="name" />
            <ErrorMessage name='name' className="form-text text-muted"></ErrorMessage>
          </div>
          <div className="form-group mb-4"> 
            <label htmlFor="description">Descripción</label>
            <Field type="text" name='description' className="form-control" id="description" />
          </div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </Form>

    </Formik></div>
  )

}

export default FormTask;

