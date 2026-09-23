export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {year} Mahendra Arqudanta. All rights reserved.</p>
        <p>Thanks For Coming</p>
      </div>
    </footer>
  );
}
