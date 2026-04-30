export default function Items() {
  const dummyItems = [
    { id: 1, name: "Keyboard Mekanikal", price: "Rp 500.000" },
    { id: 2, name: "Mouse Wireless", price: "Rp 150.000" },
    { id: 3, name: "Monitor 24 Inch", price: "Rp 1.500.000" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Daftar Barang</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyItems.map((item) => (
          <div key={item.id} className="bg-white p-4 border rounded shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-blue-600 font-bold mt-2">{item.price}</p>
            <button className="mt-4 w-full bg-blue-100 text-blue-700 py-1 rounded hover:bg-blue-200">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}