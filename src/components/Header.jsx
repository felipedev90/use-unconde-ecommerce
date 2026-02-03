export default function Header() {
  return (
    <header className="w-full bg-emerald-950 sticky top-0 z-50 shadow-sm">
      <div className="bg-shopGreen text-white text-xs py-2 px-4 hidden md:flex justify-between items-center">
        <span>Aproveite 50% de desconto em itens selecionados</span>
        <div className="flex gap-4">
          <span>Brasil</span>
          <span>Português</span>
        </div>
      </div>
      <div>
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-white tracking-tight pl-4">
            useUncode Store
          </h1>
        </div>
      </div>
    </header>
  );
}
