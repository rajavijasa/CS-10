"use client";

import { useState, useEffect } from "react";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${API_URL}/items`);
        
        if (!res.ok) {
          throw new Error("Gagal mengambil data barang");
        }
        
        const data = await res.json();
        // Backend returns an object with payload array: { success: true, payload: [...] }
        setItems(data.payload || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div className="text-center mt-10">Memuat barang...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Daftar Barang</h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada barang yang dijual.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 border rounded shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-blue-600 font-bold mt-2">Rp {item.price.toLocaleString('id-ID')}</p>
              <p className="text-gray-500 text-sm mt-1">Stok: {item.stock}</p>
              <button className="mt-4 w-full bg-blue-100 text-blue-700 py-1 rounded hover:bg-blue-200">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}