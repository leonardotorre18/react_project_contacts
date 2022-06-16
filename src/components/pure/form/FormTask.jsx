import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../models/roles.enum';


const formSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  description: Yup.string()
});


const FormTask = ({addTask}) => {

  const initialValues = {
    name: '',
    description:  '',
    completed: false,
    level: ROLES.NORMAL
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
          <div class="form-group"> 
            <label for="name">Nombre</label>
            <Field type="text" name='name' class="form-control" id="name" />
            <ErrorMessage name='name'></ErrorMessage>
          </div>
          <div class="form-group"> 
            <label for="description">Descripción</label>
            <Field type="text" name='description' class="form-control" id="description" />
          </div>
          <button type="submit" class="btn btn-primary">Agregar</button>
        </Form>
    </Formik></div>
  )

}

export default FormTask;

