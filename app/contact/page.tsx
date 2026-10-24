"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama || !formData.email || !formData.pesan) {
      alert("Harap isi semua kolom form terlebih dahulu!");
      return;
    }

    alert(`Terima kasih, ${formData.nama}! Pesan Anda berhasil dikirim.`);
    
    setFormData({ nama: "", email: "", pesan: "" });
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "20px", textAlign: "center", color: "#d81b60" }}>
        Hubungi Kami
      </h1>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        
        <label>Nama Lengkap</label>
        <input 
          type="text" 
          placeholder="Masukkan nama..." 
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
        />

        <label>Email</label>
        <input 
          type="email" 
          placeholder="Masukkan email..." 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label>Pesan</label>
        <textarea 
          rows={5} 
          placeholder="Tulis pesan Anda..."
          value={formData.pesan}
          onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
        ></textarea>

        <button type="submit" className="btn">
          Kirim Pesan
        </button>
        
      </form>
    </div>
  );
}