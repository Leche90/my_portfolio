export default function Footer() {
  return (
    <footer className="px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} Lanzema Leche</p>
        <p className="font-mono">Designed for systems that hold up under load.</p>
      </div>
    </footer>
  );
}
