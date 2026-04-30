"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
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
      // Menggunakan environment variable dari Vercel atau fallback ke localhost
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login berhasil!");
        // Simpan data pengguna (misal: payload.user atau token jika ada)
        localStorage.setItem("user", JSON.stringify(data.payload || { email: formData.email, username: formData.email.split('@')[0] }));
        
        // Panggil event global custom untuk mere-render Navbar supaya mendeteksi Auth yang baru
        window.dispatchEvent(new Event("auth-change"));
        
        // Redirect ke home
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setMessage(data.message || "Gagal melakukan login. Periksa email dan password.");
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
      {message && <p className="text-center mb-4 text-sm font-semibold text-blue-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300" 
            placeholder="Masukkan Email" 
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
            placeholder="Masukkan Password" 
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className={`w-full text-white py-2 rounded transition ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? "Masuk..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}