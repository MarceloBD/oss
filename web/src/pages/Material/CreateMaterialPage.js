import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import CreateNewPostMutation from '../../modules/post/mutations/CreateNewPostMutation';
import { useStateValue } from '../../utils/context';

const validationSchema = () =>
  Yup.object().shape({
    title: Yup.string().required('Email é um campo obrigatório'),
    description: Yup.string().required('Senha é um campo obrigatório'),
  });

const onCreate = ({ title, description }) => {
  CreateNewPostMutation.commit({ variables: { title, description } });
};

const CreateMaterialPage = () => {
  const { t } = useStateValue();
  return (
    <>
      <Formik initialValues={{ title: '', description: '' }} validationSchema={validationSchema} onSubmit={onCreate}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field type="title" placeholder={t('createMaterialPage.title')} name="title" />
            <Field type="description" placeholder={t('createMaterialPage.description')} name="description" />
            <button type="submit" color="secondary">
              {t('createMaterialPage.submit')}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

CreateMaterialPage.propTypes = {};

export default CreateMaterialPage;
