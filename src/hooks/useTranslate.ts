import { useLanguageStore } from "../store/language";
import type { Dictionary, Experience } from "../types/dictionary";

export const useTranslate = () => {
  const { data }: { data: Dictionary } = useLanguageStore();

  const translate = (text: string) => {
    return (data[text as keyof Dictionary] ?? "") as string | string[];
  };

  const translateArray = (texts: string[]) => {
    return texts.map((text) => translate(text)) as string[];
  };

  return { translate, translateArray };
};
