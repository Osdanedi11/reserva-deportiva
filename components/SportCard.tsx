type SportCardProps = {
  name: string;
  sport: string;
  desc: string;
};

export default function SportCard({
  name,
  sport,
  desc,
}: SportCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-green-400 mb-2">
        {name}
      </h2>

      <p className="text-gray-300 mb-1">
        Deporte: {sport}
      </p>

      <p className="text-gray-500 mb-6">
        Desc: {desc}
      </p>

      <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-semibold">
        Reservar
      </button>
    </div>
  );
}