export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    slug: "cloud-hartono",
    name: "Cloud Hartono",
    role: "Founder & CEO",
    bio: "Cloud mendirikan Toko Bunga Cerah pada tahun 2020. Ia memiliki visi untuk menyebarkan kebahagiaan melalui keindahan alam.",
    image: "/cloud.jpg"
  },

  {
    slug: "tifa-hartono",
    name: "Tifa Hartono",
    role: "Co-Founder",
    bio: "Tifa adalah otak di balik desain rangkaian bunga kami. Ia memastikan setiap produk memiliki nilai estetika yang tinggi.",
    image: "/tifa.jpg"
  },
  
  {
    slug: "aerith-wijaya",
    name: "Aerith Wijaya",
    role: "Head Florist",
    bio: "Aerith memimpin divisi perangkai bunga. Ia bertanggung jawab melatih staff dan menjaga kualitas standar produk.",
    image: "/aerith.jpg"
  },

  {
    slug: "tseng-alexander",
    name: "Tseng Alexander",
    role: "Senior Florist",
    bio: "Tseng sudah berpengalaman 5 tahun di industri ini. Spesialisasinya adalah dekorasi bunga untuk acara pernikahan.",
    image: "/tseng.jpg"
  },

  {
    slug: "sephiroth-kadaj",
    name: "Sephiroth Kadaj",
    role: "Senior Customer Service",
    bio: "Sephiroth adalah wajah ramah di balik layanan pelanggan kami. Ia siap membantu menjawab pertanyaan dan pesanan Anda.",
    image: "/sephi.jpg"
  },
  
  {
    slug: "zack-williams",
    name: "Zack Williams",
    role: "Senior Marketing",
    bio: "Zack bertanggung jawab dalam strategi pemasaran digital Toko Bunga Cerah agar dikenal lebih luas oleh masyarakat.",
    image: "/zack.jpg"
  }
];