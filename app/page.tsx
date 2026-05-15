import Navbar from "../components/Navbar";
import SportCard from "../components/SportCard";
import { courts } from "../data/courts";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Sistema de Reservas Deportivas
          </h1>

          <p className="text-gray-400 text-xl mb-12">
            Reserva canchas fácilmente desde cualquier dispositivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courts.map((court) => (
              <SportCard
                key={court.id}
                name={court.name}
                sport={court.sport}
                desc={court.desc}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}