/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Mail, 
  ChevronRight,
  ShieldCheck,
  Car,
  GlassWater,
  CalendarDays,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Logo = () => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="relative flex items-center justify-center cursor-pointer group"
  >
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="90" rx="12" stroke="currentColor" strokeWidth="1" className="text-white/20 group-hover:text-white/40 transition-colors" />
      <path d="M35 70V30H50C58.2843 30 65 36.7157 65 45C65 53.2843 58.2843 60 50 60H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
      <path d="M50 60L65 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-white/10" />
    </svg>
  </motion.div>
);

export default function App() {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    service: "mariage", 
    date: "", 
    message: "" 
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre demande de devis a été envoyée. Riri vous recontactera rapidement !");
  };

  const services = [
    {
      title: "Cortège des Mariés",
      description: "Une arrivée majestueuse devant l'autel ou la mairie. Décoration florale personnalisée et chauffeur en tenue de gala.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Shooting Photo",
      description: "Notre véhicule de prestige devient l'écrin de vos souvenirs. Mise à disposition pour vos séances photos de couple.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Navette Invités",
      description: "Assurez le retour de vos proches en toute sécurité. Service de navettes entre le lieu de réception et les hôtels.",
      icon: <GlassWater className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-brand-accent/30 selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest uppercase font-medium leading-tight">Riri Jour-J</span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-stone-500 font-bold -mt-1">Prestige Chauffeur de Mariage</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
          <a href="#flotte" className="hover:text-white transition-colors">La Voiture</a>
          <a href="#services" className="hover:text-white transition-colors">Prestations</a>
          <a href="#contact" className="hover:text-white transition-colors">Réservation</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden md:block bg-white text-stone-950 px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-stone-200 transition-colors"
          >
            Devis Mariage
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-stone-950 border-b border-white/5 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#flotte" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">La Voiture</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">Prestations</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">Réservation</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/40 to-stone-950 z-10" />
          <div className="w-full h-full bg-stone-900 bg-[url('/att.DjJnjg09l5uXSCXUhFXn6gCTYga7pQ5uQsnotDqS6lc.JPG')] bg-cover bg-center grayscale-20 scale-105 animate-slow-zoom" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-[0.3em] text-stone-400 mb-8 backdrop-blur-sm">
            Location de Voiture de Prestige pour Mariage - Moselle 57
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 font-extralight italic">
            Sublimez <br />
            <span className="text-white">votre Grand Jour</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 italic">
            "Pour que votre arrivée soit aussi inoubliable que votre 'Oui'."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-white text-stone-950 px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-white/10"
            >
              Devis Mariage Personnalisé
            </button>
            <a 
              href="https://www.instagram.com/ririjourj57" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 text-stone-400 font-medium hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">@ririjourj57</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Prestations Nuptiales</h2>
              <p className="text-stone-400 leading-relaxed font-light">
                Nous comprenons l'importance de chaque détail pour votre mariage. Notre service est conçu pour apporter cette touche de prestige et de sérénité nécessaire à la réussite de votre union en Moselle et au Luxembourg.
              </p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-stone-500 uppercase tracking-widest text-[10px] font-bold">
                 <ShieldCheck className="w-4 h-4 text-white/50" /> Chauffeurs agréés VTC
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-stone-900/40 border border-white/5 p-10 rounded-[2rem] hover:border-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-stone-950 transition-colors duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 flex items-center justify-between">
                  {s.title}
                  <ChevronRight className="w-4 h-4 text-stone-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </h3>
                <p className="text-stone-400 leading-relaxed font-light text-sm italic">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flotte / Featured Car */}
      <section id="flotte" className="py-24 px-6 bg-white text-stone-950 rounded-[3rem] mx-4 my-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-100 shadow-2xl">
             {/* Main car image placeholder */}
            <img 
              src="/att.iyrHQnL9TwC3dzITcDOB8CyYOtLHvQ9HWjPkxcwITP0.JPG" 
              alt="Porsche Cayenne S Black"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8">
              <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900">Disponible Immédiatement</span>
            </div>
            <div className="absolute bottom-10 left-10 text-white z-10">
              <p className="uppercase tracking-widest text-xs font-bold mb-2 opacity-80">Véhicule Signature</p>
              <h3 className="text-5xl font-serif italic leading-none">Porsche Cayenne S</h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 italic leading-[1.1]">Un Confort <br /> Sans Compromis</h2>
              <p className="text-stone-600 leading-relaxed text-lg font-light">
                Notre Porsche Cayenne S combine puissance et raffinement. Intérieur cuir premium, toit panoramique et éclairage d'ambiance bleuté pour des trajets nocturnes inoubliables.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10">
              {[
                { icon: <ShieldCheck className="w-6 h-6" />, label: "Sécurité", desc: "Chauffeurs certifiés" },
                { icon: <Clock className="w-6 h-6" />, label: "Ponctualité", desc: "Arrivée 1h avant" },
                { icon: <GlassWater className="w-6 h-6" />, label: "Expérience", desc: "Rafraîchissements" },
                { icon: <CalendarDays className="w-6 h-6" />, label: "Sur-mesure", desc: "Déco Personnalisée" },
              ].map((item, i) => (
                <div key={i} className="space-y-3 group">
                  <div className="text-stone-400 group-hover:text-stone-950 transition-colors duration-300">{item.icon}</div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em]">{item.label}</h4>
                  <p className="text-stone-500 text-sm italic font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button 
                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-4 font-bold uppercase tracking-[0.2em] text-[10px] py-4 px-8 border border-stone-200 rounded-full hover:bg-stone-950 hover:text-white hover:border-stone-950 transition-all duration-300"
              >
                Réserver ce véhicule <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[600px]">
            <div className="md:col-span-2 row-span-2 rounded-[2rem] overflow-hidden bg-stone-900 shadow-xl">
               <img src="/att.DgKFSwbchFrY8DGoFE38KNNadctGUvQ87L1osYTUE1E.JPG" alt="Porsche Front" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden bg-stone-900 shadow-xl">
               <img src="/IMG_1263.PNG" alt="Porsche Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden bg-stone-900 shadow-xl">
               <img src="/att.iyrHQnL9TwC3dzITcDOB8CyYOtLHvQ9HWjPkxcwITP0.JPG" alt="Porsche Rear" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="md:col-span-2 rounded-[1.5rem] overflow-hidden bg-stone-900 shadow-xl">
               <img src="/att.DjJnjg09l5uXSCXUhFXn6gCTYga7pQ5uQsnotDqS6lc.JPG" alt="Porsche Side" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="contact" className="py-32 px-6 bg-stone-900/20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 italic leading-[1.1]">Organisez votre <br /><span className="text-white">jour d'exception</span></h2>
            <p className="text-stone-400 mb-12 text-lg leading-relaxed italic font-light">
              Du premier cortège au retour tardif des invités, nous vous accompagnons tout au long de votre célébration. Demandez votre devis sur-mesure pour un mariage sans stress.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-stone-950 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-1">Assistance 24/7</p>
                  <p className="text-xl font-serif italic text-white">Disponible par téléphone</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-stone-950 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-1">Email</p>
                  <p className="text-xl font-serif italic text-white">ririjourj57@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 border border-white/5 p-10 md:p-14 rounded-[3rem] shadow-2xl relative"
          >
            <div className="absolute top-0 right-10 w-20 h-20 bg-white/2 rounded-full blur-3xl" />
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-3">Votre Nom</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Jean Dupont"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-sm font-light"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-3">Téléphone</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="06 01 02 03 04"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-sm font-light"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-3">Service Souhaité</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Cortège Mariés", "Shooting Photo", "Navette Invités", "Autre Événement"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, service: type})}
                      className={`py-3 rounded-xl text-[10px] uppercase font-bold tracking-widest border transition-all ${formData.service === type ? "bg-white text-stone-950 border-white" : "bg-transparent border-white/5 text-stone-400 hover:border-white/20"}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-3">Détails de l'événement</label>
                <textarea 
                  rows={4}
                  placeholder="Date du mariage, lieux de cérémonie et réception, nombre d'invités pour les navettes..."
                  className="w-full bg-stone-950/50 border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-white/20 transition-colors text-sm font-light resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button className="w-full bg-white text-stone-950 py-5 rounded-2xl text-[10px] uppercase font-extrabold tracking-[0.4em] hover:bg-stone-200 transition-colors shadow-xl shadow-white/5 active:scale-95">
                Demander un devis personnalisé
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <Logo />
              <div>
                <h3 className="font-serif text-4xl italic leading-none">Riri Jour-J</h3>
                <p className="text-stone-500 text-xs uppercase tracking-widest font-bold mt-2">L'Excellence du VTC en Moselle (57)</p>
              </div>
            </div>
            <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
              <a href="#flotte" className="hover:text-white transition-colors">La Voiture</a>
              <a href="#services" className="hover:text-white transition-colors">Prestations</a>
              <a href="https://www.instagram.com/ririjourj57" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-20 border-y border-white/5 py-12">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-stone-500 mb-4">Secteur d'intervention</p>
              <p className="text-sm font-light italic text-stone-400">Metz, Thionville, Luxembourg, Nancy et tout le Grand Est.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-stone-500 mb-4">Moyens de paiement</p>
              <p className="text-sm font-light italic text-stone-400">Carte Bancaire, Espèces, Virement.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-stone-500 mb-4">Réseaux Sociaux</p>
              <p className="text-sm font-light italic text-stone-400">Suivez nos aventures sur Instagram @ririjourj57</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] uppercase tracking-widest text-stone-800">
            <p>&copy; 2026 Riri Jour-J. Conception de prestige.</p>
            <div className="flex gap-8">
              <a href="#">Mentions Légales</a>
              <a href="#">CGV</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

