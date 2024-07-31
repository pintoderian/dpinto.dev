export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="my-20">
      <div className="text-center">
        <p className="my-6 font-holimount text-5xl">Derian Pinto</p>
        <p className="text-xs">© {year} - Ecuador</p>
      </div>
    </footer>
  );
}
