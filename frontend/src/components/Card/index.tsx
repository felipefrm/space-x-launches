export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-opacity-30 bg-black rounded-xl shadow-md overflow-hidden p-6">
      {children}
    </div>
  )
}