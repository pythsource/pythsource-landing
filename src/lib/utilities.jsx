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

export const MetadataTemplate = (_description, _title, _russianVer, _link) => {
  return {
    title: _title,
    description: _description,
    alternates: {
      canonical: _link,
      languages: {
        'en': `/en${_link === "/" ? "" : _link}`,
        'ru': `/ru${_link === "/" ? "" : _link}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: _title,
      description: _description,
      images: ['https://pythsource.com/images/official_logo.png'],
    },
    openGraph: {
      title: _title,
      description: _description,
      url: 'https://pythsource.com',
      siteName: _title,
      images: [
        {
          url: 'https://pythsource.com/images/official_logo.png',
          width: 1024,
          height: 1024,
        },
      ],
      locale: _russianVer ? 'ru' : 'en_US',
      type: 'website',
    },
  }
}