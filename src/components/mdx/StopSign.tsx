export default function StopSign({ target }: { target: string }) {
  return (
    <div className="flex items-center gap-3 bg-red-100 border-l-4 border-red-600 p-4 my-6 rounded-r-md">
      <span className="text-2xl" role="img" aria-label="stop sign">🛑</span>
      <p className="text-red-900 font-bold m-0">
        STOP! Open your Puzzle Forge to {target}
      </p>
    </div>
  );
}
