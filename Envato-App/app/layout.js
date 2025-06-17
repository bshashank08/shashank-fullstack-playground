import "./globals.css";

import Header from "@/components/Header/MainHeader/MainHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
