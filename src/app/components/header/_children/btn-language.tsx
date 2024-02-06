import { useLanguageStore } from "@/store/language";
import languageES from "@/dictionaries/es.json";
import languageEN from "@/dictionaries/en.json";
import Button from "../../button";
import { IconEC, IconEEUU } from "../../icons";

const BtnLanguage = () => {
  const { language, setLanguage, setData } = useLanguageStore();

  const handleLanguage = () => {
    setLanguage(language === "ES" ? "EN" : "ES");
    setData(language === "ES" ? languageEN : languageES);
  };

  return (
    <Button type="button" variant="ghost" onClick={handleLanguage}>
      {language === "ES" ? <IconEC /> : <IconEEUU />}
    </Button>
  );
};

export default BtnLanguage;
