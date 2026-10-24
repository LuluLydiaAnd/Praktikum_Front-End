import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Toko Bunga Cerah",
  description: "Website Company Profile Sederhana",
};

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}