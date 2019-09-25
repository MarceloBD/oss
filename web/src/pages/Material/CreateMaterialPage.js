import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { useStateValue } from '../../utils/context';

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .required('Email é um campo obrigatório')
      .email('Email inválido'),
    password: Yup.string().required('Senha é um campo obrigatório'),
  });

const onCreate = () => {};

const CreateMaterialPage = () => {
  const { t } = useStateValue();
  return (
    <>
      <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={onCreate}>
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
