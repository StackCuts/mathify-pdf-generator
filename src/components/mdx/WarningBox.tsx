export default function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border border-amber-200 p-5 rounded-md shadow-sm my-6 text-amber-900">
      {children}
    </div>
  );
}
