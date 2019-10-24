import { Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import SelectInput from '../../elements/Input/SelectInput';
import CreateNewPostMutation from '../../modules/post/mutations/CreateNewPostMutation';
import { useStateValue } from '../../utils/context';
import { createQueryRenderer, graphql } from '../../utils/relay';
import theme from '../../utils/theme';
import languages from './languages.json';

const validationSchema = () =>
  Yup.object().shape({
    title: Yup.string().required('Email é um campo obrigatório'),
    description: Yup.string().required('Senha é um campo obrigatório'),
  });

const onCreate = ({ title, description, language, link, type, hash }, { setStatus, resetForm }) => {
  CreateNewPostMutation.commit({
    variables: { title, description, language, url: link, type, hash },
    onCompleted: () => {
      resetForm();
      setStatus({ message: 'Criado com sucesso' });
    },
  });
};

const TYPES = ['software', 'hardware', 'teaching', 'research_data', 'artistic'];

const FieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const FieldBox = styled.div`
  margin-bottom: ${theme.spacing.unit(2)};
  width: 100%;
`;

const DescriptionBox = styled.div`
  & textarea {
    width: 100%;
    height: ${theme.spacing.unit(25)};
    resize: none;
  }
`;

const ButtonBox = styled.div`
  width: ${theme.spacing.unit(10)};
`;

const SelectBox = styled.div`
  & select {
    width: ${theme.spacing.unit(50)};
  }
`;

const CreateMaterialPage = ({ viewer, system }) => {
  const { t } = useStateValue();
  console.log(viewer, system);
  return (
    <>
      <Formik
        initialValues={{ title: '', description: '', link: '', hash: '', type: '', language: '' }}
        validationSchema={validationSchema}
        onSubmit={onCreate}
      >
        {({ handleSubmit, status, setStatus, handleChange, values }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {values.type === 'software' && <>software</>}
              <FieldsBox>
                <FieldBox>
                  <Field
                    type="title"
                    placeholder={t('createMaterialPage.title')}
                    name="title"
                    onChange={props => {
                      setStatus({ message: '' });
                      handleChange(props);
                    }}
                  />
                </FieldBox>

                <FieldBox>
                  <SelectInput
                    items={system.constants.materialTypes}
                    placeholder={t('createMaterialPage.type')}
                    name="type"
                  />
                </FieldBox>

                <FieldBox>
                  <DescriptionBox>
                    <Field
                      component="textarea"
                      type="description"
                      placeholder={t('createMaterialPage.description')}
                      name="description"
                    />
                  </DescriptionBox>
                </FieldBox>

                <FieldBox>
                  <SelectBox>
                    <Field
                      type="language"
                      placeholder={t('createMaterialPage.language')}
                      name="language"
                      component="input"
                      list="languages"
                    />
                    <Field id="languages" placeholder={t('createMaterialPage.language')} component="datalist">
                      {Object.keys(languages).map(i => (
                        <Field value={languages[i].name} component="option" key={i}>
                          {languages[i].name}
                        </Field>
                      ))}
                    </Field>
                  </SelectBox>
                </FieldBox>

                <FieldBox>
                  <Field type="link" placeholder={t('createMaterialPage.link')} name="link" />
                </FieldBox>

                <FieldBox>
                  <SelectInput items={['teste', 'teste2']} name="domain" placeholder="dominio" />
                </FieldBox>

                <FieldBox>
                  <SelectInput items={[]} name="source" placeholder="sourcetype" />
                </FieldBox>

                <FieldBox>
                  <SelectInput items={[]} name="license" placeholder="licensename" />
                </FieldBox>

                <FieldBox>
                  <Field type="licenseVersion" placeholder="licenseVersion" name="licenseVersion" />
                </FieldBox>

                <FieldBox>
                  <Field type="versionName" placeholder="versionName" name="versionName" />
                </FieldBox>

                <FieldBox>
                  <Field type="releaseDate" placeholder="releaseDate" name="releaseDate" />
                </FieldBox>

                <FieldBox>
                  <Field type="hash" placeholder={t('createMaterialPage.hash')} name="hash" />
                </FieldBox>

                {status && <>{status.message}</>}
                <ButtonBox>
                  <button type="submit" color="secondary">
                    {t('createMaterialPage.submit')}
                  </button>
                </ButtonBox>
              </FieldsBox>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

CreateMaterialPage.propTypes = {};

export default createQueryRenderer(CreateMaterialPage, {
  query: graphql`
    query CreateMaterialPageQuery {
      viewer(hasUser: true) {
        id
      }
      system {
        constants {
          materialTypes
        }
      }
    }
  `,
});
