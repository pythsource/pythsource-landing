import './main.scss';
import '@fontsource-variable/jetbrains-mono';

export const metadata= {
  title: 'PythSource'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-default text-default' prefix='og: https://ogp.me/ns#'>
    <head>
      <link rel="canonical" href="https://pythsource.com" />
      <link rel="icon" href="/images/favicon.ico" />
    </head>
    <body>
    <div id="root">{children}</div>
    </body>
    </html>
  )
}