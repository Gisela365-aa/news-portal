export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-600 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-black text-slate-900">Northstar Daily</h3>
          <p className="mt-3">Independent journalism covering local stories, global events, and the ideas shaping tomorrow.</p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-slate-900">Sections</h4>
          <ul className="mt-3 space-y-2">
            <li>Politics</li>
            <li>Business</li>
            <li>World</li>
            <li>Culture</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2">
            <li>About</li>
            <li>Advertise</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-slate-900">Follow</h4>
          <ul className="mt-3 space-y-2">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Newsletter</li>
            <li>RSS</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
