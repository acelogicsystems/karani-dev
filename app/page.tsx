"use client";
import { useState, useEffect } from "react";

const stack = ["React","Next.js","TypeScript","Node.js","FastAPI","MongoDB","Prisma","Tailwind CSS","Vercel","Git"];

const projects = [
  { name:"Imara Grid", tag:"Flagship", desc:"AI-powered climate resilience platform built as digital public infrastructure for Kenya and ASAL regions.", stack:["Next.js","FastAPI","AI"], link:"https://imaragrid.vercel.app", featured:true },
  { name:"BookEase", tag:"SaaS", desc:"Full-stack booking platform for Kenyan small businesses. Deployed to production on Vercel with MongoDB Atlas.", stack:["Next.js","MongoDB","Vercel"], link:"#", featured:false },
  { name:"Weather & Hazard Tracker", tag:"DRM Tool", desc:"Real-time hazard monitoring combining weather data with disaster risk context for Kenyan communities.", stack:["React","DRM Data"], link:"#", featured:false },
  { name:"iClub Portal", tag:"Portal", desc:"CUK Innovation Club portal with feedback module, user auth and backend route integration.", stack:["Next.js","Prisma","Node.js"], link:"#", featured:false },
];

const services = [
  { title:"Web & Landing Pages", desc:"Fast, conversion-focused websites for businesses and organisations.", from:"KES 15,000" },
  { title:"Full-Stack Web Apps", desc:"SaaS platforms, portals, dashboards — built end to end and deployed.", from:"KES 80,000" },
  { title:"DRM & Climate Tools", desc:"Digital tools for disaster risk and climate resilience informed by real field expertise.", from:"KES 100,000" },
  { title:"Technical Consultancy", desc:"Advisory for NGOs, startups, and organisations building in resilience and civic tech.", from:"KES 2,000 / hr" },
];

const aboutCards = [
  { label:"Currently building", value:"Imara Grid — Climate Resilience Platform" },
  { label:"Studying", value:"BDRM · Co-operative University of Kenya" },
  { label:"Based in", value:"Nairobi, Kenya 🇰🇪" },
  { label:"Open to", value:"Freelance · Contracts · Collaboration" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main style={{ background:"#0e0e0e", color:"#e8e4dc", minHeight:"100vh", fontFamily:"'DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::selection{background:#1D9E75;color:#0e0e0e}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .fu1{animation:fadeUp 0.8s ease 0.1s both}
        .fu2{animation:fadeUp 0.8s ease 0.25s both}
        .fu3{animation:fadeUp 0.8s ease 0.4s both}
        .fu4{animation:fadeUp 0.8s ease 0.55s both}
        .card{transition:border-color 0.25s,transform 0.2s;position:relative;overflow:hidden}
        .card:hover{border-color:rgba(29,158,117,0.25)!important;transform:translateY(-2px)}
        .card::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(135deg,rgba(29,158,117,0.04) 0%,transparent 60%);opacity:0;transition:opacity 0.3s}
        .card:hover::after{opacity:1}
        .btn-p{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border-radius:10px;background:#1D9E75;color:#0e0e0e;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:0.06em;text-decoration:none;transition:background 0.2s}
        .btn-p:hover{background:#5DCAA5}
        .btn-g{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:10px;border:1px solid rgba(255,255,255,0.07);color:#555;font-family:'Space Mono',monospace;font-size:11px;text-decoration:none;transition:all 0.2s}
        .btn-g:hover{color:#e8e4dc;border-color:rgba(255,255,255,0.2)}
        .stk{font-family:'Space Mono',monospace;font-size:11px;padding:8px 16px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);color:#4a4a4a;background:#111;cursor:default;transition:all 0.2s}
        .stk:hover{color:#1D9E75;border-color:rgba(29,158,117,0.3)}
        .sl{font-family:'Space Mono',monospace;font-size:10px;color:#1D9E75;letter-spacing:0.2em;text-transform:uppercase;display:flex;align-items:center;gap:10px}
        .sl::before{content:'';display:block;width:28px;height:1px;background:#1D9E75}
        .plink{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:1.5rem;padding:1.5rem 1.75rem;border-radius:16px;text-decoration:none;transition:border-color 0.25s,transform 0.2s;position:relative;overflow:hidden}
        .plink:hover{transform:translateY(-1px)}
        .plink::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(135deg,rgba(29,158,117,0.03) 0%,transparent 60%);opacity:0;transition:opacity 0.3s}
        .plink:hover::after{opacity:1}
        .navlink{font-family:'Space Mono',monospace;font-size:11px;color:#555;text-decoration:none;letter-spacing:0.08em;text-transform:uppercase;transition:color 0.2s}
        .navlink:hover{color:#e8e4dc}
        @media(max-width:768px){.dsk{display:none!important}.ag{grid-template-columns:1fr!important}}
        @media(min-width:769px){.mnu{display:none!important}.hmb{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:50,transition:"all 0.4s",background:scrolled?"rgba(14,14,14,0.94)":"transparent",backdropFilter:scrolled?"blur(16px)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.04)":"none" }}>
        <div style={{ maxWidth:1080,margin:"0 auto",padding:"1.25rem 2rem",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <a href="#" style={{ display:"flex",alignItems:"center",gap:10,textDecoration:"none" }}>
            <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
              <div style={{ width:20,height:4,background:"#e8e4dc",borderRadius:2 }}/>
              <div style={{ width:14,height:4,background:"#9FE1CB",borderRadius:2 }}/>
              <div style={{ width:9,height:4,background:"#1D9E75",borderRadius:2 }}/>
            </div>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:13,fontWeight:700 }}>
              <span style={{ color:"#e8e4dc" }}>karani</span><span style={{ color:"#1D9E75" }}>.dev</span>
            </span>
          </a>
          <div className="dsk" style={{ display:"flex",alignItems:"center",gap:32 }}>
            {["Work","Services","About","Contact"].map(item=>(
              <a key={item} href={`#${item.toLowerCase()}`} className="navlink">{item}</a>
            ))}
            <a href="#contact" className="btn-p" style={{ padding:"8px 18px",fontSize:10 }}>Hire me</a>
          </div>
          <button className="hmb" onClick={()=>setMenuOpen(!menuOpen)} style={{ background:"none",border:"none",color:"#666",cursor:"pointer" }}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen?<><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>:<><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="17" x2="19" y2="17"/></>}
            </svg>
          </button>
        </div>
        {menuOpen&&<div className="mnu" style={{ background:"#111",borderTop:"1px solid rgba(255,255,255,0.04)",padding:"1rem 2rem",display:"flex",flexDirection:"column",gap:16 }}>
          {["Work","Services","About","Contact"].map(item=><a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)} className="navlink">{item}</a>)}
        </div>}
      </nav>

      {/* HERO */}
      <section style={{ position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:3,background:"linear-gradient(to bottom,transparent,#1D9E75,transparent)" }}/>
        <div style={{ position:"absolute",top:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(29,158,117,0.07) 0%,transparent 70%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:-200,left:-100,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(29,158,117,0.04) 0%,transparent 70%)",pointerEvents:"none" }}/>
        <div style={{ maxWidth:1080,margin:"0 auto",padding:"9rem 2rem 5rem",position:"relative",zIndex:1 }}>
          <div className="fu1 sl" style={{ marginBottom:"2rem" }}>Founder · Karani.dev · Nairobi, Kenya</div>
          <h1 className="fu2" style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(52px,9vw,96px)",fontWeight:900,lineHeight:1.0,letterSpacing:"-0.03em",marginBottom:"1.75rem" }}>
            Building tech<br/><span style={{ color:"#1D9E75" }}>forged</span> for<br/>the field.
          </h1>
          <p className="fu3" style={{ fontSize:17,color:"#4a4a4a",maxWidth:500,lineHeight:1.85,marginBottom:"2.5rem",fontWeight:300 }}>
            I'm <span style={{ color:"#e8e4dc",fontWeight:500 }}>Brian Karani</span> — full-stack developer and disaster risk specialist. I build resilience solutions for African communities.
          </p>
          <div className="fu4" style={{ display:"flex",flexWrap:"wrap",gap:12 }}>
            <a href="#work" className="btn-p">See my work <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8 3 12 7 8 11"/></svg></a>
            <a href="mailto:briangicovi@gmail.com" className="btn-g">briangicovi@gmail.com</a>
          </div>
          <div style={{ marginTop:"5rem",display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:1,height:44,background:"linear-gradient(to bottom,transparent,#1a1a1a)" }}/>
            <span style={{ fontFamily:"'Space Mono',monospace",fontSize:9,color:"#222",letterSpacing:"0.22em",textTransform:"uppercase" }}>Scroll</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ maxWidth:1080,margin:"0 auto",padding:"6rem 2rem",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="sl" style={{ marginBottom:"1rem" }}>What I do</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:900,letterSpacing:"-0.02em",marginBottom:"3rem",lineHeight:1.1 }}>Engineering meets<br/>ground-level expertise</h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14 }}>
          {services.map(s=>(
            <div key={s.title} className="card" style={{ padding:"1.75rem",borderRadius:16,border:"1px solid rgba(255,255,255,0.05)",background:"#131313" }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:700,marginBottom:8,color:"#e8e4dc" }}>{s.title}</h3>
              <p style={{ fontSize:13,color:"#4a4a4a",lineHeight:1.75,marginBottom:"1rem",fontWeight:300 }}>{s.desc}</p>
              <span style={{ fontFamily:"'Space Mono',monospace",fontSize:10,color:"#1D9E75",background:"rgba(29,158,117,0.08)",padding:"4px 10px",borderRadius:5 }}>From {s.from}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ maxWidth:1080,margin:"0 auto",padding:"6rem 2rem",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="sl" style={{ marginBottom:"1rem" }}>Selected work</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:900,letterSpacing:"-0.02em",marginBottom:"3rem" }}>Projects shipped</h2>
        <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
          {projects.map(p=>(
            <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="plink"
              style={{ border:p.featured?"1px solid rgba(29,158,117,0.2)":"1px solid rgba(255,255,255,0.05)", background:p.featured?"rgba(29,158,117,0.03)":"#131313" }}>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:8,flexWrap:"wrap" }}>
                  <span style={{ fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:700,color:"#e8e4dc" }}>{p.name}</span>
                  <span style={{ fontFamily:"'Space Mono',monospace",fontSize:9,padding:"3px 9px",borderRadius:4,letterSpacing:"0.08em",textTransform:"uppercase",background:p.featured?"rgba(29,158,117,0.18)":"rgba(255,255,255,0.05)",color:p.featured?"#1D9E75":"#555" }}>{p.tag}</span>
                </div>
                <p style={{ fontSize:13,color:"#4a4a4a",lineHeight:1.75,maxWidth:560,marginBottom:12,fontWeight:300 }}>{p.desc}</p>
                <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                  {p.stack.map(t=><span key={t} style={{ fontFamily:"'Space Mono',monospace",fontSize:10,padding:"2px 8px",borderRadius:4,border:"1px solid rgba(255,255,255,0.06)",color:"#3a3a3a" }}>{t}</span>)}
                </div>
              </div>
              <svg width="18" height="18" fill="none" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                <line x1="5" y1="9" x2="16" y2="9"/><polyline points="10 4 16 9 10 14"/>
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section style={{ maxWidth:1080,margin:"0 auto",padding:"5rem 2rem",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="sl" style={{ marginBottom:"1rem" }}>Stack</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(24px,3vw,36px)",fontWeight:900,letterSpacing:"-0.02em",marginBottom:"2.5rem" }}>Tools I work with</h2>
        <div style={{ display:"flex",flexWrap:"wrap",gap:10 }}>
          {stack.map(item=><span key={item} className="stk">{item}</span>)}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth:1080,margin:"0 auto",padding:"6rem 2rem",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="sl" style={{ marginBottom:"1rem" }}>About</div>
        <div className="ag" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",marginTop:"1.5rem" }}>
          <div>
            <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,4vw,46px)",fontWeight:900,letterSpacing:"-0.02em",lineHeight:1.1,marginBottom:"1.5rem" }}>
              Developer.<br/>Risk specialist.<br/><span style={{ color:"#1D9E75" }}>Founder.</span>
            </h2>
            <p style={{ fontSize:14,color:"#4a4a4a",lineHeight:1.9,marginBottom:"1rem",fontWeight:300 }}>I'm Brian Karani Gicovi — founder of Karani.dev, a personal engineering studio in Nairobi. My work sits at the intersection of full-stack engineering and disaster risk management.</p>
            <p style={{ fontSize:14,color:"#4a4a4a",lineHeight:1.9,fontWeight:300 }}>I hold a BDRM background from The Co-operative University of Kenya — which directly informs how I design systems and measure impact.</p>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
            {aboutCards.map(item=>(
              <div key={item.label} className="card" style={{ padding:"1.1rem 1.4rem",borderRadius:12,border:"1px solid rgba(255,255,255,0.05)",background:"#131313" }}>
                <div style={{ fontFamily:"'Space Mono',monospace",fontSize:9,color:"#2a2a2a",letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:5 }}>{item.label}</div>
                <div style={{ fontSize:13,color:"#e8e4dc",fontWeight:500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth:1080,margin:"0 auto",padding:"6rem 2rem",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ padding:"3.5rem",borderRadius:20,border:"1px solid rgba(29,158,117,0.14)",background:"linear-gradient(135deg,rgba(29,158,117,0.05) 0%,rgba(14,14,14,0) 55%)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:-60,right:-60,width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(29,158,117,0.07) 0%,transparent 70%)",pointerEvents:"none" }}/>
          <div className="sl" style={{ marginBottom:"1rem" }}>Contact</div>
          <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:"-0.02em",marginBottom:12 }}>Let's build something<br/>that matters.</h2>
          <p style={{ fontSize:14,color:"#4a4a4a",maxWidth:460,lineHeight:1.85,marginBottom:"2.5rem",fontWeight:300 }}>Whether you need a website, web app, or resilience tool — I am open to new projects right now.</p>
          <div style={{ display:"flex",flexWrap:"wrap",gap:12 }}>
            <a href="mailto:briangicovi@gmail.com" className="btn-p">Send me an email</a>
            <a href="https://linkedin.com/in/briankarani" target="_blank" rel="noopener noreferrer" className="btn-g">LinkedIn</a>
            <a href="https://github.com/acelogicsystems" target="_blank" rel="noopener noreferrer" className="btn-g">GitHub</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,0.04)",maxWidth:1080,margin:"0 auto",padding:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:12,fontWeight:700 }}>
          <span style={{ color:"#e8e4dc" }}>karani</span><span style={{ color:"#1D9E75" }}>.dev</span>
        </span>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:10,color:"#222",letterSpacing:"0.1em" }}>Forged for the field. — Nairobi, Kenya</span>
        <span style={{ fontFamily:"'Space Mono',monospace",fontSize:10,color:"#222" }}>© {new Date().getFullYear()} Brian Karani Gicovi</span>
      </footer>
    </main>
  );
}
