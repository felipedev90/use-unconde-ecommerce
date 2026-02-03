export default function Header({ children }) {
  return (
    <header className="w-full bg-emerald-950 sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 text-xs text-emerald-50/90 border-b border-white/10 font-text">
        <span>Aproveite 50% de desconto em itens selecionados</span>
        <div className="flex gap-4 font-text">
          <span>Brasil</span>
          <span>Português</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <h1 className="font-title font-normal text-2xl md:text-3xl  text-white tracking-tight whitespace-nowrap">
            useUncode Store
          </h1>

          <div className="ml-auto flex items-center gap-3 w-full justify-end">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
