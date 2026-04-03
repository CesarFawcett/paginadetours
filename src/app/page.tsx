import React from 'react';

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div 
          className="hero-bg" 
          style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1544983394-fa9ba93f5450?auto=format&fit=crop&q=80&w=2000")', 
            backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 
          }}
        />
        <div className="container">
          <h1 style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5em', marginBottom: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            Santa Marta
          </h1>
          <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: 'white', fontWeight: 300, marginBottom: '2rem' }}>
            Exclusividad <br /> Sin Límites
          </h2>
          <a href="#destinos" className="premium-btn">Explorar Destinos</a>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.6, marginBottom: '1.5rem', display: 'block' }}>Nuestra Filosofía</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>El Lujo es la Libertad de Conectar con lo Esencial.</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, fontWeight: 300 }}>
            No diseñamos tours, curamos experiencias sensoriales. Desde los senderos sagrados de la Sierra Nevada hasta las bahías vírgenes del Caribe, cada detalle es orquestado para quienes buscan lo extraordinario en el silencio y la exclusividad.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinos" className="destinations" style={{ background: 'var(--sand)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3.5rem' }}>Destinos</h2>
            <div style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.1em' }}>01 / 03 PROYECTOS PRIVADOS</div>
          </div>
          
          <div className="destinations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Tour 1 - Tayrona */}
            <div className="glass-card" style={{ padding: 0 }}>
              <div 
                className="destination-img" 
                style={{ 
                  height: '400px', 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1596402184320-417d7178b3cd?auto=format&fit=crop&q=80&w=800")', 
                  backgroundSize: 'cover', backgroundPosition: 'center' 
                }} 
              />
              <div style={{ padding: '2.5rem' }}>
                <span style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Costa Caribe</span>
                <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Santuario Tayrona Privado</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '2rem' }}>Acceso exclusivo a bahías secretas y picnic gourmet en la arena blanca.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600 }}>$1,200 USD / Grupo</span>
                  <a href="#contacto" style={{ borderBottom: '1px solid black', paddingBottom: '2px', fontSize: '0.8rem' }}>RESERVAR</a>
                </div>
              </div>
            </div>

            {/* Tour 2 - Minca */}
            <div className="glass-card" style={{ padding: 0 }}>
              <div 
                className="destination-img" 
                style={{ 
                  height: '400px', 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1590001000140-5b584742a774?auto=format&fit=crop&q=80&w=800")', 
                  backgroundSize: 'cover', backgroundPosition: 'center' 
                }} 
              />
              <div style={{ padding: '2.5rem' }}>
                <span style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Sierra Nevada</span>
                <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Minca en las Nubes</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '2rem' }}>Cata de café premium y atardecer desde una finca privada a 2,000m.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600 }}>$850 USD / Grupo</span>
                  <a href="#contacto" style={{ borderBottom: '1px solid black', paddingBottom: '2px', fontSize: '0.8rem' }}>RESERVAR</a>
                </div>
              </div>
            </div>

            {/* Tour 3 - Ciudad Perdida (Helicóptero) */}
            <div className="glass-card" style={{ padding: 0 }}>
              <div 
                className="destination-img" 
                style={{ 
                  height: '400px', 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1583531357144-8d5a89849221?auto=format&fit=crop&q=80&w=800")', 
                  backgroundSize: 'cover', backgroundPosition: 'center' 
                }} 
              />
              <div style={{ padding: '2.5rem' }}>
                <span style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Aventura Ancestral</span>
                <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Teyuna en Helicóptero</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '2rem' }}>Vuelo privado sobre la Sierra Nevada y aterrizaje directo en la mística ciudad.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600 }}>$4,500 USD / Vuelo</span>
                  <a href="#contacto" style={{ borderBottom: '1px solid black', paddingBottom: '2px', fontSize: '0.8rem' }}>RESERVAR</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Su Próxima Historia Empieza Aquí.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ textTransform: 'uppercase', fontSize: '0.7rem', opacity: 0.5 }}>Atención Personalizada</div>
                <div style={{ fontSize: '1.2rem' }}>+57 321 000 0000</div>
              </div>
              <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ textTransform: 'uppercase', fontSize: '0.7rem', opacity: 0.5 }}>Email de Conserjería</div>
                <div style={{ fontSize: '1.2rem' }}>elite@santamartatours.com</div>
              </div>
            </div>
          </div>
          
          <form className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6 }}>Nombre Completo</label>
              <input type="text" style={{ padding: '1rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', background: 'transparent', outline: 'none' }} placeholder="John Doe" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6 }}>Email Premium</label>
              <input type="email" style={{ padding: '1rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', background: 'transparent', outline: 'none' }} placeholder="john@exclusivity.com" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6 }}>Mensaje / Tour de Interés</label>
              <textarea rows={4} style={{ padding: '1rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', background: 'transparent', outline: 'none', resize: 'none' }} placeholder="Deseo un itinerario a medida..." />
            </div>
            <button type="submit" className="premium-btn" style={{ width: '100%' }}>Solicitar Presupuesto</button>
          </form>
        </div>
      </section>
    </div>
  );
}
