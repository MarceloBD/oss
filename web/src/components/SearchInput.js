import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const validationSchema = () =>
  Yup.object().shape({
    search: Yup.string().required(''),
  });

const SearchInput = () => {
  const { t } = useTranslation();

  const onSearch = () => {};

  return (
    <Formik initialValues={{ search: '' }} validationSchema={validationSchema} onSubmit={onSearch}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field placeholder={t('search')} name="search" />
        </Form>
      )}
    </Formik>
  );
};
export default SearchInput;
