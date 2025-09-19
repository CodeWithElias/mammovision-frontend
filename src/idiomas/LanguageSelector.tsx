'use client';
import { Lang, useLanguage } from '@/idiomas/LanguageContext';

export const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();

  return (

    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as 'es' | 'pt' | 'en')}
      className=" absolute  z-10"
      style={{margin: '10px', padding: '5px', borderRadius: '5px', backgroundColor: '#1f2937', color: 'white', fontSize: '25px', right: '1px'}}
    >
      <option value="es">🇧🇴</option>
      <option value="pt">🇧🇷</option>
      <option value="en">🇺🇸</option>
    </select>

  );
};
