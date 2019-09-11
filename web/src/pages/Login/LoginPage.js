import { Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import SignInMutation from '../../modules/login/mutations/SignInMutation';
import SignUpMutation from '../../modules/login/mutations/SignUpMutation';

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .required('Email é um campo obrigatório')
      .email('Email inválido'),
    password: Yup.string().required('Senha é um campo obrigatório'),
  });

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const LoginPage = () => {
  const onSignIn = values => {
    SignInMutation.commit({ variables: { email: values.email, password: values.password } });
  };

  const onSignUp = values => {
    SignUpMutation.commit({ variables: { email: values.email, password: values.password } });
  };

  return (
    <>
      <div>Login</div>
      <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={onSignIn}>
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field type="email" placeholder="Email" name="email" />
            <Field type="password" placeholder="Senha" name="password" />
            <button type="submit" color="secondary">
              Entrar
            </button>
          </StyledForm>
        )}
      </Formik>
      <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={onSignUp}>
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field type="email" placeholder="Email" name="email" />
            <Field type="password" placeholder="Senha" name="password" />
            <button type="submit" color="secondary">
              Criar
            </button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
