import type { Metadata } from "next";
import { inter, playfair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tours Santa Marta | Experiencias de Lujo Reservadas",
  description: "Descubre la Sierra Nevada y el Mar Caribe con la exclusividad que mereces. Tours privados en Tayrona, Minca y Ciudad Perdida.",
  keywords: ["Santa Marta", "Luxury Tours", "Colombia", "Tayrona", "Minca", "Exclusive Travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <header className="container" style={{ padding: '2rem var(--padding-page)', position: 'absolute', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.1em', fontWeight: 500 }}>
            TSM <span style={{ fontSize: '0.8rem', verticalAlign: 'middle', opacity: 0.7 }}>PREMIUM</span>
          </div>
          <nav role="navigation" style={{ display: 'flex', gap: '3rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <a href="#destinos">Destinos</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '4rem 0', background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tours Santa Marta Premium</h2>
            <p style={{ opacity: 0.6, fontSize: '0.8rem', letterSpacing: '0.1em' }}>© 2026 EXCLUSIVITY REDEFINED. SIERRA NEVADA & CARIBBEAN SEA.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
