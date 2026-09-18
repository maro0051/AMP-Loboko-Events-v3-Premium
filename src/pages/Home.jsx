import {Link} from "react-router-dom";
import {ArrowDown,ArrowRight,Camera,Film,Palette,Play} from "lucide-react";
import {projects} from "../data/projects";

export default function Home({t}){
 return <>
  <section className="hero cinematic relative flex min-h-screen items-end overflow-hidden">
   <div className="hero-image absolute inset-0 bg-cover bg-center" style={{backgroundImage:'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=95")'}}/>
   <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10"/>
   <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/20"/>
   <div className="container-shell relative z-10 pb-20 pt-36 md:pb-28">
    <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.28em] text-white/55"><span className="h-px w-8 bg-champagne"/>{t.hero.location}</div>
    <p className="eyebrow">{t.hero.eyebrow}</p>
    <h1 className="display-xl mt-5 max-w-5xl">{t.hero.title}</h1>
    <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">{t.hero.text}</p>
    <div className="mt-9 flex flex-wrap gap-4"><Link to="/book" className="btn-gold">{t.hero.primary}<ArrowRight size={17}/></Link><Link to="/gallery" className="btn-ghost"><Play size={15}/>{t.hero.secondary}</Link></div>
    <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/40"><ArrowDown size={15}/>{t.hero.scroll}</div>
   </div>
  </section>

  <section className="section">
   <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow">{t.home.introEyebrow}</p><h2 className="display-lg">{t.home.introTitle}</h2></div><p className="lead">{t.home.introText}</p></div>
   <div className="container-shell mt-14 grid gap-3 md:grid-cols-4">{t.services.items.map(([title,desc],i)=>{const I=[Camera,Film,Palette,Camera][i];return <div className="border border-white/10 p-7" key={title}><I className="text-champagne"/><h3 className="mt-12 font-display text-3xl">{title}</h3><p className="mt-3 text-sm leading-7 text-white/50">{desc}</p></div>})}</div>
  </section>

  <section className="section bg-[#151515]">
   <div className="container-shell flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">{t.home.featuredEyebrow}</p><h2 className="display-lg">{t.home.featuredTitle}</h2></div><Link to="/gallery" className="btn-ghost">{t.home.viewAll}<ArrowRight size={16}/></Link></div>
   <div className="container-shell mt-12 grid gap-4 md:grid-cols-3">{projects.map((p,i)=><Link to="/gallery" key={p.title} className={`project-card group relative overflow-hidden ${i===0?"md:row-span-2 md:min-h-[520px]":"min-h-[420px]"}`}><img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"/><div className="absolute bottom-0 p-7"><div className="text-[9px] uppercase tracking-[.25em] text-champagne">{p.category}</div><h3 className="mt-2 font-display text-3xl">{p.title}</h3><p className="mt-2 text-xs text-white/55">{p.location}</p></div></Link>)}</div>
  </section>

  <section className="section bg-ivory text-ink"><div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow dark">{t.about.eyebrow}</p><h2 className="display-lg">{t.home.aboutTitle}</h2></div><div><p className="text-base leading-8 text-ink/60">{t.about.text}</p><Link to="/about" className="btn-dark mt-8">{t.home.aboutCta}<ArrowRight size={17}/></Link></div></div></section>
 </>
}