import { useLanguageStore } from '@/store/language';
import dataES from '@/data/languages/es';
import dataEN from '@/data/languages/en';

const BtnLanguage = () => {
  const { language, setLanguage, setData } = useLanguageStore();

  const handleLanguage = () => {
    setLanguage(language === 'ES' ? 'EN' : 'ES');
    setData(language === 'ES' ? dataES : dataEN);
  };

  return (
    <button
      className="bg-gray-200 rounded-lg dark:bg-neutral-800 text-sm px-1.5 py-1.5 hover:ring-2 ring-gray-300 transition-all"
      onClick={handleLanguage}
    >
      {language}
    </button>
  );
};

export default BtnLanguage;
