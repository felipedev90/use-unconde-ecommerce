export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-emerald-950">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-title font-semibold text-white">useUncode Store</p>
          <p className="font-title text-sm text-white">
            Mini e-commerce Uncode
          </p>
        </div>

        <p className="font-title text-sm text-white">
          © 2026 — Desenvolvido por Felipe Augusto
        </p>
      </div>
    </footer>
  );
}
