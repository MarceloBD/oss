import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import HelpIcon from '../../assets/icons/help';
import Tooltip from '../../components/Tooltip';
import InfinitySelectInputs from '../../compositions/InfinitySelectInputs';
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

const onCreate = (
  { title, description, language, link, type, hash, domain, license, licenseVersion, source, authors },
  { setStatus, resetForm },
) => {
  CreateNewPostMutation.commit({
    variables: {
      title,
      description,
      language,
      url: link,
      type,
      hash,
      domain,
      license,
      licenseVersion,
      source,
      authors,
    },
    onCompleted: () => {
      //  resetForm();
      setStatus({ message: 'Criado com sucesso' });
    },
  });
};

const FieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const FieldBox = styled.div`
  margin-bottom: ${theme.spacing.unit(2)};
  width: 100%;
  min-height: 10px;
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

const CreateMaterialPage = ({ system }) => {
  const { t } = useStateValue();

  useEffect(() => {
    document.title = 'Criar Material';
  }, []);

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
                    <Field component="textarea" placeholder={t('createMaterialPage.description')} name="description" />
                  </DescriptionBox>
                </FieldBox>
                <FieldBox>
                  <Field placeholder="versionName" name="versionName" />
                </FieldBox>

                <FieldBox>
                  <Field type="date" placeholder="releaseDate" name="releaseDate" />
                  <Tooltip text="Data de criação do material">
                    <HelpIcon />
                  </Tooltip>
                </FieldBox>

                <FieldBox>
                  <InfinitySelectInputs name="authors" placeholder="autor" selectInputItems={['myself']} />
                </FieldBox>

                <FieldBox>
                  <Field placeholder={t('createMaterialPage.link')} name="link" />
                </FieldBox>

                <FieldBox>
                  <SelectInput
                    items={Object.values(languages).map(language => language.name)}
                    name="language"
                    placeholder={t('createMaterialPage.language')}
                  />
                </FieldBox>

                <FieldBox>
                  <SelectInput items={system.constants.domainTypes} name="domain" placeholder="dominio" />
                </FieldBox>

                <FieldBox>
                  <SelectInput items={system.constants.sourceTypes} name="source" placeholder="sourcetype" />
                </FieldBox>

                <FieldBox>
                  <SelectInput items={system.constants.licenseTypes} name="license" placeholder="licensename" />
                </FieldBox>

                <FieldBox>
                  <Field placeholder="licenseVersion" name="licenseVersion" />
                </FieldBox>

                <FieldBox>
                  <Field placeholder={t('createMaterialPage.hash')} name="hash" />
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

CreateMaterialPage.propTypes = {
  system: PropTypes.object.isRequired,
};

export default createQueryRenderer(CreateMaterialPage, {
  query: graphql`
    query CreateMaterialPageQuery {
      viewer(hasUser: true) {
        id
      }
      system {
        users {
          edges {
            node {
              name
            }
          }
        }
        constants {
          materialTypes
          domainTypes
          sourceTypes
          licenseTypes
        }
      }
    }
  `,
});
