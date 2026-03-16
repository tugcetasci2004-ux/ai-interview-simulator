/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mic, 
  BookOpen, 
  BarChart3, 
  ChevronRight, 
  Play, 
  CheckCircle2,
  Cpu,
  UserCircle2
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">InterviewAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Nasıl Çalışır?</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Özellikler</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Fiyatlandırma</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Giriş Yap</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
            Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Gradients */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[100px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Yeni Nesil Mülakat Hazırlığı
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Yapay Zeka ile <br />
            <span className="text-blue-600">Mülakatlara Hazırlan</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Gerçekçi senaryolar, sektörel sorular ve anlık geri bildirimlerle mülakat stresini yenin. 
            AI mentorunuzla pratik yapın, kariyerinizde bir adım öne geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Hemen Ücretsiz Dene
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-slate-700 font-semibold">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
              </div>
              Nasıl Çalışır?
            </button>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">10,000+</span> aday mülakatlarını başarıyla tamamladı.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Dashboard Preview / AI Avatar Placeholder */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-4">
            <div className="bg-slate-50 rounded-2xl p-6 aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Canlı Simülasyon</span>
              </div>
              
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl mb-6 relative">
                <UserCircle2 className="w-20 h-20 text-white/90" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl text-slate-800">AI Mülakat Mentorunuz</h3>
                <p className="text-sm text-slate-500">"Bize biraz kendinden bahseder misin?"</p>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute bottom-6 right-6 bg-white p-3 rounded-xl shadow-lg border border-slate-50 flex items-center gap-3 animate-bounce">
                <div className="w-2 h-8 bg-blue-100 rounded-full overflow-hidden">
                  <div className="w-full h-1/2 bg-blue-600" />
                </div>
                <span className="text-xs font-bold text-slate-700">Ses Analizi Aktif</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Göz Teması', val: '%92', color: 'bg-emerald-500' },
                { label: 'Özgüven', val: '%88', color: 'bg-blue-500' },
                { label: 'Netlik', val: '%95', color: 'bg-indigo-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{stat.label}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-800">{stat.val}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${stat.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

const StepCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Süreç Nasıl İşler?</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Mülakat Başarısına Giden 3 Adım</h3>
        <p className="text-lg text-slate-600">
          Gelişmiş AI teknolojimiz ile mülakat sürecini simüle ediyor ve size özel bir gelişim haritası sunuyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <StepCard 
          icon={Mic}
          title="Ses Analizi"
          description="Konuşma hızınız, tonlamanız ve duraksamalarınız anlık olarak analiz edilir. Heyecanınızı kontrol etmeyi öğrenin."
          delay={0.1}
        />
        <StepCard 
          icon={BookOpen}
          title="Sektörel Sorular"
          description="Yazılımdan pazarlamaya, 50+ farklı sektör için özel olarak hazırlanmış, en sık sorulan mülakat soruları."
          delay={0.2}
        />
        <StepCard 
          icon={BarChart3}
          title="Detaylı Raporlama"
          description="Mülakat sonunda performansınızın güçlü ve zayıf yönlerini içeren kapsamlı bir analiz raporu alın."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <Cpu className="text-white w-4 h-4" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">InterviewAI</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Gizlilik</a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Kullanım Şartları</a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">İletişim</a>
        </div>
        <p className="text-slate-400 text-sm">
          © 2026 InterviewAI. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
