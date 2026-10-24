import Link from "next/link";
import { teamData } from "../../data/teamData";

export default function Team() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: "20px", textAlign: "center", color: "#059669" }}>
        Our Team
      </h1>
      
      <div className="team-grid">
        {teamData.map((member) => (
          <Link href={`/team/${member.slug}`} key={member.slug} className="card">
            <h4 style={{ color: "#666", marginBottom: "10px", fontSize: "0.9rem", textTransform: "uppercase" }}>{member.role}</h4>
            <h3 style={{ color: "#333" }}>{member.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}