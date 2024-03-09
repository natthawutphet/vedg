import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css'
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "รับทำโฆษณาGoogleAdsสายเทา โฆษณาสายเทาเพื่อธุรกิจของคุณ",
  description: "รับทำโฆษณาออนไลน์สายเทา Google, YouTube, Facebook",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="keywords" content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา" />
<meta name="keywords" content="รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, รับทำโฆษณาสายเทา, ทำการตลาดสายเทา, ads สายเทา, รับทํา seo สายเทา, ยิงแอดสายเทา, โปรโมทสายเทา, facebook ads, สายเทา, การตลาดสายเทา, ยิงadsสายเทา, ยิงแอด google สายเทา, รับทำการตลาดสายเทา, รับจ้างยิงแอดสายเทา, โฆษณาสายเทา, ตลาดสายเทา, ads, สายเทา, แอดสายเทา, ยิงแอดสายเทา, pantip ยิงแอดสายเทาfacebook, ทําseoสายเทา, ยิงadsfacebookสายเทา, ยิงแอดสายเทาเฮียบอย, รับทำเว็บสายเทา, การทำseoสายเทา, ทำseoสายเทา, ยิงแอดyoutubeสายเทา, ยิงแอดสายเทาราคา, ยิงแอดสายเทา2022, ยิงแอดสายดำ, รับจ้างแอดสายเทา, ยิงแอดสายเทาgoogle, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา " />

<link rel="canonical" href="https://www.service-ads.com/" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
<meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<meta property="og:url" content="https://www.service-ads.com/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="https://www.service-ads.com/img/logo.ico" />


<meta property="og:image" content="https://www.service-ads.com/img/logo.ico" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.service-ads.com/" />

<meta name="twitter:card" content="https://www.service-ads.com/img/logo.ico" />
<meta name="twitter:image" content="https://www.service-ads.com/img/logo.ico" />
<meta name="twitter:title" content="Tiรับทำโฆษณาออนไลน์สายเทา" />
<meta name="twitter:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

<meta name="google-site-verification" content="PbQl1IGdzrIFiFnnE39varHoAFip5AIAk4QLxK-Nyto" />
 <meta property="og:image" content="https://www.service-ads.com/logo.ico"/>

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>

      </Head>
      <body className={inter.className}>
        <Nav/>
        {children}


        <Footer/>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />

        </body>
    </html>
  );
}
