"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Sesuaikan URL endpoint ini dengan backend Anda dari Modul 8
      const res = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Registrasi berhasil! Silakan login.");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setMessage(data.message || "Gagal melakukan registrasi.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Terjadi kesalahan pada server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border rounded shadow-sm mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
      {message && <p className="text-center mb-4 text-sm font-semibold text-blue-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Nama Lengkap</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={20}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300" 
            placeholder="Maksimal 20 Karakter" 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300" 
            placeholder="Diperlukan untuk login (3-20 Karakter)" 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300" 
            placeholder="Alamat Email" 
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300" 
            placeholder="Password Baru" 
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className={`w-full text-white py-2 rounded transition ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {loading ? "Mendaftar..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}