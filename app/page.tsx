import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sistema de Reservas Deportivas
          </h1>

          <p className="text-gray-400 text-xl mb-8">
            Reserva canchas de tenis, pádel, pickleball y volleyball
            fácilmente desde cualquier dispositivo.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl text-lg font-semibold">
            Reservar Ahora
          </button>
        </div>
      </main>
    </>
  );
}