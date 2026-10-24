import Image from "next/image";
export default function About() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: "20px", color: "#059669" }}>Tentang Kami</h1>
      <p>
        Toko Bunga Cerah didirikan dengan passion untuk menyebarkan kebahagiaan dan menginspirasi kreativitas melalui keindahan alam. 
        Kami bekerja sama dengan petani lokal untuk memastikan setiap tangkai bunga yang kami jual 
        adalah yang terbaik.
      </p>

      <Image src="/clotif.jpg" alt="founder toko bunga cerah " width="600" height="400" style={{ marginTop: "20px" }}/>
      <p>Contoh pemakaian bunga kami yang digunakan untuk properti photoshoot.</p>
    </div>
  );
}