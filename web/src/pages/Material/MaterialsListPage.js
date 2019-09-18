import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Title from '../../components/TitleIcon';
import MaterialsList from '../../compositions/ItemsList';

const TitleBox = styled.div`
  margin: 33px 0px 0px 87px;
`;

const MaterialListBox = styled.div`
  margin: 0px 128px;
`

const MaterialsListPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleBox>
        <Title title={t('homePage.menuTitle')} />
      </TitleBox>
      <MaterialListBox>
        <MaterialsList
          items={[
            {
              title: 'Software para deteccao de pessoas',
              description:
                'Uma breve descrição do software, Uma breve descrição do software , Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software',
              vote: 10,
              type: 'software',
            },
            {
              title: 'Software para deteccao de pessoas',
              description:
                'Uma breve descrição do software, Uma breve descrição do software , Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software',
              vote: 10,
              type: 'software',
            },
            {
              title: 'Software para deteccao de pessoas',
              description:
                'Uma breve descrição do software, Uma breve descrição do software , Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software',
              vote: 10,
              type: 'software',
            },
            {
              title: 'Software para deteccao de pessoas',
              description:
                'Uma breve descrição do software, Uma breve descrição do software , Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software',
              vote: 10,
              type: 'software',
            },
            {
              title: 'Software para deteccao de pessoas',
              description:
                'Uma breve descrição do software, Uma breve descrição do software , Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software Uma breve descrição do software',
              vote: 10,
              type: 'software',
            },
          ]}
        />
      </MaterialListBox>
    </>
  );
};

export default MaterialsListPage;
