export default async function translateText(text, sourceLang = 'en', targetLang = 'hi') {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.responseData.translatedText;
}