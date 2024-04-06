import './main.scss'
import '@fontsource-variable/jetbrains-mono'
import Script from 'next/script'

export const metadata = {
  title: 'PythSource',
  metadataBase: new URL('https://pythsource.com')
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-default text-default" prefix="og: https://ogp.me/ns#">
    <head>
      <link rel="icon" href="/favicon.ico" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K8S86SR9M2"/>
      <Script id="google-analytics">
        {'  window.dataLayer = window.dataLayer || [];\n' +
          '  function gtag(){dataLayer.push(arguments);}\n' +
          '  gtag(\'js\', new Date());\n' +
          '\n' +
          '  gtag(\'config\', \'G-K8S86SR9M2\');'}
      </Script>
    </head>
    <body>
    <div id="root">{children}</div>
    </body>
    </html>
  )
}