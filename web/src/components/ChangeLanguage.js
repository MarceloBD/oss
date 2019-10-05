import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import Clickable from '../elements/Clickable';
import theme from '../utils/theme';

const LANGUAGES = ['en', 'br'];

const TextBox = styled.div`
  display: flex;
  color: rgb(0, 0, 0, 0.5);
  ${props => props.isSelected && `color: white;`}
`;

const SeparatorBox = styled.div`
  margin: 0 ${theme.spacing.unit(0.5)};
  color: rgb(0, 0, 0, 0.5);
`;
const SearchInput = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(language || i18n.language);
    if (language !== i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n, i18n.language, language]);

  return LANGUAGES.map(lan => (
    <>
      <Clickable key={uuid()} onClick={() => setLanguage(lan)}>
        <TextBox isSelected={lan === language}>{lan}</TextBox>
      </Clickable>
      <SeparatorBox>{lan !== LANGUAGES[LANGUAGES.length - 1] ? '/' : ''}</SeparatorBox>
    </>
  ));
};
export default SearchInput;
