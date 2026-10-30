import './globals.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title:{
    default: "Laila Nur Abidah",
    template: "%s / Laila Nur Abidah",
  },
  description: "Portofolio Laila Nur Abidah, siswa SMK calon Junior Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}