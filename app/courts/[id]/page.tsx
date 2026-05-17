"use client";

import { useState } from "react";

import { courts } from "../../../data/courts";
import { reservations as initialReservations } from "../../../data/reservations";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function CourtPage({ params }: Props) {
  const [reservations, setReservations] = useState(
    initialReservations
  );

  const [courtId, setCourtId] = useState<number | null>(null);

  params.then((data) => {
    if (courtId === null) {
      setCourtId(Number(data.id));
    }
  });

  if (courtId === null) {
    return null;
  }

  const court = courts.find(
    (c) => c.id === courtId
  );

  const courtReservations = reservations.filter(
    (r) => r.courtId === court?.id
  );

  function handleReservation(reservationId: number) {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.id === reservationId) {
        return {
          ...reservation,
          reserved: !reservation.reserved,
        };
      }

      return reservation;
    });

    setReservations(updatedReservations);
  }

  if (!court) {
    return (
      <main className="min-h-screen bg-gray-950 text-white p-8">
        <h1 className="text-3xl font-bold">
          Cancha no encontrada
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">
        {court.name}
      </h1>

      <p className="text-gray-400 mb-8">
        Deporte: {court.sport}
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Horarios
      </h2>

      <div className="flex flex-col gap-4">
        {courtReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="bg-gray-900 p-4 rounded-xl flex justify-between items-center"
          >
            <span>{reservation.time}</span>

            <button
              onClick={() =>
                handleReservation(reservation.id)
              }
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                reservation.reserved
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {reservation.reserved
                ? "Reservado"
                : "Disponible"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}