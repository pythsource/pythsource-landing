export const formatTitle = (pageName) => {
  return `PythSource — ${pageName}`
}

export const parseLocale = (languageCode) => {
  if (languageCode && languageCode[0] === 'ru') {
    return {
      code: languageCode[0],
      isRussian: true,
    }
  } else {
    return {
      code: '',
      isRussian: false,
    }
  }
}