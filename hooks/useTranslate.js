import { useLanguageStore } from '@/store/language';

const useTranslate = () => {
  const { data } = useLanguageStore();

  const translate = (text) => {
    return data[text] ?? null;
  };

  return { translate };
};

export default useTranslate;
