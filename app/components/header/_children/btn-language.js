import { useLanguageStore } from '@/store/language';
import dataES from '@/data/es/data';
import dataEN from '@/data/en/data';

const BtnLanguage = () => {
  const { language, setLanguage, setData } = useLanguageStore();

  const handleLanguage = () => {
    setLanguage(language === 'ES' ? 'EN' : 'ES');
    setData(language === 'ES' ? dataES : dataEN);
  };

  return <button onClick={handleLanguage}>{language}</button>;
};

export default BtnLanguage;
