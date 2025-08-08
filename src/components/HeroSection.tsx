import { JapaneseButton } from "@/components/ui/japanese-button"
import heroImage from "@/assets/hero-japan.jpg"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Mau Kerja di Jepang & Dapat <span className="bg-gradient-hero bg-clip-text text-transparent">Gaji Rp20 Juta/Bulan?</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium opacity-90">
          Mulai Kuasai Bahasa Jepang dari Nol — Tanpa Kursus Mahal, Tanpa Ribet!
        </p>
        
        <div className="space-y-4 mb-10 text-lg md:text-xl">
          <div className="flex items-center justify-center gap-3">
            <span className="text-japanese-gold text-2xl">✅</span>
            <span>350+ siswa kami sudah tembus JLPT N3 hanya dalam 3 bulan.</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-japanese-gold text-2xl">✅</span>
            <span>Bisa kamu pelajari sendiri di rumah tanpa pengalaman sebelumnya.</span>
          </div>
        </div>
        
        <JapaneseButton variant="hero" size="xl" className="animate-pulse">
          🎌 Saya Mau Mulai Belajar Sekarang
        </JapaneseButton>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 animate-bounce">🌸</div>
      <div className="absolute bottom-20 left-10 text-4xl opacity-30 animate-pulse">🗾</div>
    </section>
  )
}