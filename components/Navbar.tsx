export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-400">
        ReservasDeportivas
      </h1>

      <div className="flex gap-6 text-gray-300">
        <button className="hover:text-white transition">
          Inicio
        </button>

        <button className="hover:text-white transition">
          Reservas
        </button>

        <button className="hover:text-white transition">
          Tarifas
        </button>
      </div>
    </nav>
  );
}