import Image from "next/image";
import Link from "next/link";
import { teamData } from "../../../data/teamData";
import { notFound } from "next/navigation";

interface TeamDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TeamDetail({ params }: TeamDetailProps) {
  const { slug } = await params;

  const member = teamData.find((t) => t.slug === slug);

  if (!member) {
    notFound(); 
  }

  return (
    <div className="container">
      <div className="team-detail">
        <Image src={member.image} alt={member.name} width="200" height="200" />
        <h1 style={{ color: "#059669" }}>{member.name}</h1>
        <h3 style={{ color: "#888", marginBottom: "20px" }}>{member.role}</h3>
        <p style={{ lineHeight: "1.6", maxWidth: "600px", margin: "0 auto 20px" }}>
          {member.bio}
        </p>
        <Link href="/team" style={{ color: "#059669", textDecoration: "underline" }}>
          &larr; Kembali ke Halaman Team
        </Link>
      </div>
    </div>
  );
}