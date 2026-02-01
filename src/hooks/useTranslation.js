import { useLanguage } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { t, tArray } = useLanguage();
  return { t, tArray };
};