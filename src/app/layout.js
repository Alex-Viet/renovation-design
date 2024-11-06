import localFont from 'next/font/local';
import './styles/globals.scss';

const gilroyExtraBold = localFont({
  src: './fonts/gilroy/Gilroy-ExtraBold.woff',
  variable: '--font-gilroy',
  weight: '800',
});
const montserratRegular = localFont({
  src: './fonts/montserrat/Montserrat-Regular.ttf',
  variable: '--font-montserrat',
  weight: '400',
});
const montserratMedium = localFont({
  src: './fonts/montserrat/Montserrat-Medium.ttf',
  variable: '--font-montserrat-medium',
  weight: '500',
});

export const metadata = {
  title: 'Ремонт и дизайн',
  description: 'Ремонт и дизайн в Москве и Московской области',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${gilroyExtraBold.variable} ${montserratRegular.variable} ${montserratMedium.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
