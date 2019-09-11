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

const LoginPageContent = styled.div`
  margin: 76px;
`;

const Forms = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-between;
`;

const SignInForm = styled(StyledForm)`
  width: 588px;
  height: 376px;
`;
const SignUpForm = styled(StyledForm)`
  width: 966px;
  margin-right: 210px;
  height: 376px;
`;

const FormTitle = styled.div`
  align-self: flex-start;
`;

const StyledField = styled(Field)`
  width: 100%;
  border-radius: 10px;
`;

const FormButton = styled.button`
  align-self: flex-end;
`;

const LoginPage = () => {
  const onSignIn = values => {
    SignInMutation.commit({ variables: { email: values.email, password: values.password } });
  };

  const onSignUp = values => {
    SignUpMutation.commit({ variables: { email: values.email, password: values.password } });
  };

  return (
    <LoginPageContent>
      <Forms>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={onSignUp}>
          {({ handleSubmit }) => (
            <SignUpForm onSubmit={handleSubmit}>
              <FormTitle>Criar Conta</FormTitle>
              <StyledField type="email" placeholder="Email" name="email" />
              <StyledField type="password" placeholder="Senha" name="password" />
              <FormButton type="submit" color="secondary">
                Criar
              </FormButton>
            </SignUpForm>
          )}
        </Formik>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={onSignIn}>
          {({ handleSubmit }) => (
            <SignInForm onSubmit={handleSubmit}>
              <FormTitle> Logar</FormTitle>
              <StyledField type="email" placeholder="Email" name="email" />
              <StyledField type="password" placeholder="Senha" name="password" />
              <FormButton type="submit" color="secondary">
                Entrar
              </FormButton>
            </SignInForm>
          )}
        </Formik>
      </Forms>
    </LoginPageContent>
  );
};

export default LoginPage;
