import '@/app/main.scss'
import { Noto_Sans_Mono } from 'next/font/google'

const noto_sans_mono = Noto_Sans_Mono({ subsets: ['latin'], weight: '300' })

export const metadata = {
    title: "PythSource",
    description: "Official website of the PythSource team."
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main className={noto_sans_mono.className}>{children}</main>
        </body>
      </html>
    )
}