import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './EditContactModal.module.css';

export default function EditContactModal({ contact, onClose, onSave }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').required('Required'),
  });

  const handleSubmit = (values) => {
    onSave(contact.id, values);
    onClose();
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h2>Edit Contact</h2>
        <Formik
          initialValues={{ name: contact.name, number: contact.number }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label>
              Name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </label>

            <label>
              Number
              <Field type="text" name="number" />
              <ErrorMessage name="number" component="div" />
            </label>

            <div className={css.buttons}>
              <button type="submit">Save</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

