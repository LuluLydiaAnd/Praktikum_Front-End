import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero">
      <Image src="/logoflower.svg" alt="Logo Toko Bunga" width="100" height="100" style={{ marginBottom: "20px" }} />
      <h1>Selamat Datang di Toko Bunga Cerah</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Kami menyediakan berbagai macam rangkaian bunga segar untuk setiap momen berharga Anda.
      </p>
      <Link href="/about" className="btn">
        Info lebih lanjut
      </Link>
    </div>
  );
}