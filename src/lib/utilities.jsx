export const formatTitle = (pageName) => {
  return `PythSource — ${pageName}`
}

export const parseLocale = (languageCode) => {
  if (languageCode === 'ru') {
    return {
      code: languageCode,
      isRussian: true,
    }
  } else {
    return {
      code: 'en',
      isRussian: false,
    }
  }
}