import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance

import { I18nManager } from 'react-native';

const tr = require('./translations/tr.json');
const en = require('./translations/en.json');
const fr = require('./translations/fr.json');
const ar = require('./translations/ar.json');

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  tr: () => tr,
  en: () => en,
  fr: () => fr,
  ar: () => ar
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setLanguage = ({ languageTag, isRTL }) => {
  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

const setI18nConfig = langProperty => {
  const fallback = { languageTag: 'en', isRTL: false };

  if (langProperty && langProperty.languageTag && langProperty.isRTL !== undefined) {
    setLanguage({ languageTag: langProperty.languageTag, isRTL: langProperty.isRTL });
    return;
  }

  const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
  setLanguage({ languageTag, isRTL });
};

export { setI18nConfig, translate, i18n };
