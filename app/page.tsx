import React from "react";

// ============================================================================
// DADOS DO CURRÍCULO E MEDIA KIT (Thiago de Assis Anéas Rodrigues)
// ============================================================================

const Certificados = [
  "MD-100: Microsoft Windows 10", 
  "MS-100: Microsoft Identity and Access Administrator Associate",
  "MS-900: Microsoft Security, Compliance, and Identity Fundamentals",
  "MS-700: Microsoft Teams Administrator Associate",
];

const ArsenalSkills = [
  "Complex Corporate Environments", "Virtualization (Proxmox/VMWare/Hyper-V)",
  "Hybrid Cloud (Azure/AWS/GCP)", "IT Governance",
  "ITIL", "COBIT", "ISO27001", "Linux & Windows Server",
  "Observability (Zabbix)", "Backup & BCP/DR Management", "IAM", "PAM", "CyberArk", "MFA",
  "Auditing & Compliance", "Kanban", "ServiceNow", "BMCRemedy", 
];

const LearningSkills = [
  "Python", "ShellScript", "Oracle RAC", 
  "React", "Node.js", "Next.js", "Terraform"
];

const experiences = [
  {
    role: "Onsite Support & Infrastructure",
    company: "Gerdau",
    period: "2008 - 2010",
    description: "Support and Infrastructure. Advanced troubleshooting and user interface."
  },
  {
    role: "Onsite Support & Infrastructure",
    company: "Sidenor Villares",
    period: "2004",
    description: "Support and Infrastructure. Advanced troubleshooting and user interface."
  },
  {
    role: "Onsite Support & Infrastructure",
    company: "Alstom",
    period: "2002",
    description: "Support and Infrastructure. Advanced troubleshooting and user interface."
  },
  {
    role: "Onsite Support & Infrastructure",
    company: "EMBRAER",
    period: "2000",
    description: "Support and Infrastructure. Advanced troubleshooting and user interface."
  },
  {
    role: "Onsite Support & Infrastructure",
    company: "Alcan - Aluminios do Brasil",
    period: "1999",
    description: "Support and Infrastructure. Advanced troubleshooting and user interface."
  },
  {
    role: "Onsite Support & Infrastructure",
    company: "Confab Tubos",
    period: "1998",
    description: "Support and Infrastructure. Advanced troubleshooting and user interface."
  }
];

const mediaTopics = [
  {
    title: "The reality of Uptime",
    desc: "What really happens behind the scenes to guarantee 99.9% availability in mission-critical industrial environments.."
  },
  {
    title: "On-Premise x Cloud transition",
    desc: "Scars, lessons learned, and untold truths in migrating complex infrastructures to Azure."
  },
  {
    title: "Evolution of IT (1997-2026)",
    desc: "A retrospective of 28 years of career: from physical support to modern virtualization clusters."
  }
];



// ============================================================================
// LAYOUT PRINCIPAL
// ============================================================================

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-[#0076CE] selection:text-white font-sans">
      
      {/* HEADER CORPORATIVO */}
      <header className="border-b border-gray-800 bg-black/90 sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-start gap-12 px-6 py-6">
    
        {/* NOME MAIOR */}
        <div className="text-3xl md:text-4xl font-medium tracking-tight text-white whitespace-nowrap">
          Thiago<span className="font-bold text-[#D4AF37] ml-2">Rodrigues</span>
        </div>

        {/* CONTÊINER DOS ÍCONES */}
    <div className="flex items-center gap-15 ml-30">
      
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/thiagorodrigues-ti"
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-110 drop-shadow-[0_0_15px_rgba(10,102,194,0.8)]"
        title="LinkedIn"
      >
        <img 
          src="/linkedin-logo.png" 
          alt="LinkedIn" 
          className="w-40 h-auto object-contain" 
        />
      </a>

      {/* CYBERR */}
      <a
        href="https://cyberr.ai/u/thiagoaneas"
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
        title="Perfil Cyberr"
      >
        <img 
          src="/cyberr-logo.png" 
          alt="Cyberr" 
          className="w-35 h-auto object-contain" 
        />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send?phone=5512991928266"
        target="_blank"
        rel="noreferrer"
        className="transition-all hover:scale-110 drop-shadow-[0_0_12px_rgba(37,211,102,0.5)]"
        title="WhatsApp"
      >
        <img 
          src="/whatsapp-logo.png" 
          alt="WhatsApp" 
          className="w-54 h-auto object-contain" 
        />
      </a>

    </div>
    </div>
  </header>

      {/* SEÇÃO EXPERIÊNCIA PROFISSIONAL - FUNDO PRETO E DUAS COLUNAS */}
<section className="py-20 bg-black text-white border-t border-gray-800">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:items-start md:justify-between">
    
    {/* COLUNA DA ESQUERDA: TEXTOS E EXPERIÊNCIAS */}
    <div className="flex-1 w-full md:max-w-xl">
      {/* Título com Destaque Dourado */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
        My <span className="text-[#D4AF37]">Journey</span>
      </h2>
      <p className="text-xl text-gray-400 mb-12 text-center md:text-left">
        L3 Specialist with 28 years of experience in technology, ensuring the resilience of global operations and mission-critical industrial environments. Expert in hybrid architectures and high-performance virtualization (Proxmox/VMWare), I work at the intersection of operational continuity and cybersecurity (ISO 27001), transforming complex infrastructures into stable, scalable, and resilient ecosystems.
      </p>

      {/* TIMELINE DE EXPERIÊNCIAS */}
      <div className="space-y-10">
        
        {/* CARGO 1 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-800">
          {/* Ponto Dourado na Timeline */}
          <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
          
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-2xl font-semibold text-white">IT Supervisor</h3>
            <span className="text-sm font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full whitespace-nowrap">Sep/2025 - Present</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">GV do Brasil - SIMEC Group</p>
          <ul className="list-disc list-outside space-y-2 pl-5 text-gray-400 text-base">
            <li>Technical leadership in infrastructure, networks, and information security in industrial environments.</li>
            <li>Coordination of IT governance and standardization of operational processes.</li>
            <li>Supervision and configuration of backup routines using Veeam, with retention on NAS and replication to the cloud.</li>
            <li>Risk mitigation, advanced monitoring, and improved operational predictability.</li>
            <li>Participation in formal BCP/DR tests and operational continuity initiatives.</li>
            <li>Zabbix End-to-End. Strategic dashboards, performance tuning, and proactive monitoring to support global infrastructure availability. </li>
          </ul>
        </div>

        {/* CARGO 2 */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-800">
          <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-gray-600"></div>
          
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-2xl font-semibold text-white">IT Specialist L3</h3>
            <span className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Feb/2010 - Aug/2025</span>
          </div>
          <p className="text-lg font-medium text-gray-300 mb-2">SLB Onesubsea</p>
          <ul className="list-disc list-outside space-y-2 pl-5 text-gray-400 text-base">
            <li>Management of hybrid infrastructure in 7 operational units, ensuring availability above 99.9%.</li>
            <li>Administration and management of Windows servers, creation of VMs (Hyper-V), advanced support and critical troubleshooting.</li>
            <li>Monitoring and administration of backup routines in Commvault (cloud) and Avamar (storage 512 TB), ensuring integrity and availability of highly regulated data.</li>
            <li>Migration of on-premise server to Azure environment, with support to the global team.</li>
            <li>Participation in formal BCP/DR tests and operational continuity initiatives.</li>
            <li>Experience with privileged access via CyberArk integrated with MFA.</li>
            <li>Handling internal/external audits, gathering evidence, and executing action plans.</li>
            <li>Experience with ITIL practices and change, incident, and problem governance, ensuring traceability and compliance.</li>
            <li>Experience with Agile Kanban framework.</li>
          </ul>
        </div>

      </div>
    </div>

    {/* COLUNA DA DIREITA: SUA FOTO COM DESTAQUE */}
    <div className="flex-none w-full md:w-[600px]">
      <div className="relative group mx-auto md:mx-0 max-w-sm md:max-w-none">
        
        {/* Fundo Dourado de Glow no Hover */}
        <div className="absolute -inset-1 rounded-3xl bg-[#D4AF37] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Moldura Dourada Suave */}
        <div className="relative border-4 border-[#D4AF37]/50 rounded-3xl overflow-hidden bg-gray-900 shadow-2xl shadow-[#D4AF37]/10">
          <img 
            src="/sua-foto.png" // Certifique-se de salvar sua foto como 'sua-foto.png' na pasta /public
            alt="Thiago Rodrigues"
            className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        
        {/* Overlay Dourado Sutil */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Texto Foto  */}
        <div className="absolute bottom-6 left-6">
          <p className="text-sm md:text-base font-medium text-[#D4AF37] leading-relaxed drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
            Complex Corporate Environments <br />
            L3 IT Specialist<br />
            IT Governance <br />
            Cybersecurity <br />
            Virtualization <br />
            Cloud
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* DADOS E METRICS - ESTILO DASHBOARD */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 -mx-6 px-6">
            <div className="pl-0 md:pl-6">
              <p className="text-sm text-gray-500 mb-1 font-medium">Baggage</p>
              <p className="text-4xl font-light text-gray-900">28 <span className="text-xl">Years</span></p>
            </div>
            <div className="pl-4 md:pl-6">
              <p className="text-sm text-gray-500 mb-1 font-medium">Availability</p>
              <p className="text-4xl font-light text-[#0076CE]">99.9%<span className="text-xl">+</span></p>
            </div>
            <div className="pl-4 md:pl-6">
              <p className="text-sm text-gray-500 mb-1 font-medium">Focus</p>
              <p className="text-4xl font-light text-gray-900">Evolution</p>
                    
            </div>
          </div>
        </div>
      </section>

      {/* MÍDIA, PALESTRAS E PODCASTS */}
      <section id="podcasts" className="bg-black text-white border-b border-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Let's talk about the real world of Technology.
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Available for speaking engagements at tech events, podcasts, keynote presentations, and discussion panels. I bring real-world stories, crisis resolution experiences, and insights into the evolution of infrastructure over the past three decades.
              </p>
            </div>
            <a href="mailto:thiagoaneas@gmail.com" className="shrink-0 bg-white text-[#0a1f35] px-8 py-3.5 rounded text-sm font-medium hover:bg-gray-100 transition shadow-sm">
              Schedule Participation
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaTopics.map((topic, index) => (
              <article 
                key={index} 
                  className="bg-[#111] p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] group"
                >
                <p className="text-sm text-[#D4AF37] font-bold uppercase tracking-widest mb-3 opacity-80">
                    Topic {index + 1}
                </p>
              
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {topic.title}
                </h3>
  
                <p className="text-gray-400 leading-relaxed text-sm">
                    {topic.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* SEÇÃO INTEGRADA: ORDEM - 1) CERTIFICAÇÕES, 2) ARSENAL, 3) DESAFIOS */}
<section className="bg-white border-b border-gray-200 py-24">
  <div className="mx-auto max-w-6xl px-6">
    
    {/* 1) BLOCO: CERTIFICAÇÕES */}
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-20">
      <div>
        <h2 className="text-3xl font-light text-gray-900 tracking-tight">
          Certifications
        </h2>
        <p className="text-gray-500 mt-3 text-lg leading-relaxed">
          Official validation of competencies and technical specialties.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {Certificados.map((cert) => (
          <span 
            key={cert} 
            className="bg-[#f5f6f7] border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>

    {/* 2) BLOCO: ARSENAL TÉCNICO */}
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-20">
      <div>
        <h2 className="text-3xl font-light text-gray-900 tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Solutions and technologies mastered throughout the career.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {ArsenalSkills.map((skill) => (
          <span 
            key={skill} 
            className="bg-[#f5f6f7] border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* 3) BLOCO: NOVOS DESAFIOS */}
    <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
      <div>
        <h2 className="text-3xl font-light text-gray-900 tracking-tight">
          New Challenges
        </h2>
        <p className="text-gray-500 mt-3 text-lg leading-relaxed">
          Focus on continuous technical mastery to anticipate trends and ensure operational stability.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {LearningSkills.map((skill) => (
          <span 
            key={skill} 
            className="bg-[#f5f6f7] border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* HISTÓRICO / LOG DE EXPERIÊNCIA */}
      <section id="experiencia" className="bg-[#f5f6f7] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">Operational History</h2>
            <p className="text-gray-500 mt-2 text-lg">Career trajectory and impact in corporate environments.</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-12 hover:shadow-md transition">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-xl font-medium text-gray-900">{exp.company}</h3>
                  <p className="text-[#0076CE] font-medium mt-1">{exp.role}</p>
                  <p className="text-gray-500 text-sm mt-3">{exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-[#1c1d1f] text-gray-300 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 border-b border-gray-700 pb-12 mb-8">
            <div>
              <h2 className="text-2xl font-light text-white mb-4">
                Ready for the next challenge.
              </h2>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Whether you're looking to integrate with a strategic team or have a technical discussion about the infrastructure market, feel free to reach out.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end items-start md:items-center">
               <a href="mailto:thiagoaneas@gmail.com" className="bg-[#0076CE] text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-[#005a9e] transition shadow-sm w-full sm:w-auto text-center">
                thiagoaneas@gmail.com
               </a>
              </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Thiago Rodrigues. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/thiagorodrigues-ti" className="hover:text-white transition">LinkedIn</a>
              <a href="#podcasts" className="hover:text-white transition">Media Kit</a>
            </div>
          </div>
        </div>
      </footer>
      
    </main>
  );
}
