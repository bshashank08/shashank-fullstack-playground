import "./globals.css";

import Header from "@/components/Header/MainHeader/MainHeader";
import Home from "@/components/Home/Home";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body>
        <Header/>
        <Home/>
        {children}
      </body>
    </html>
  );
}
