import { JapaneseButton } from "@/components/ui/japanese-button"

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🎌</div>
        <div className="absolute top-20 right-20 text-6xl">⛩️</div>
        <div className="absolute bottom-20 left-20 text-7xl">🌸</div>
        <div className="absolute bottom-10 right-10 text-5xl">🗾</div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
          Siap Mulai Petualanganmu ke Jepang?
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🎌</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              Dapatkan Videobook + 3 Bonus Spesial
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-3xl">💰</span>
            <p className="text-xl md:text-2xl font-bold">
              Cuma Rp147.000 Hari Ini
            </p>
          </div>
          
          <JapaneseButton variant="hero" size="xl" className="w-full md:w-auto text-lg md:text-xl px-12 py-6">
            Ya, Saya Mau Mulai Belajar Bahasa Jepang
          </JapaneseButton>
        </div>
        
        <div className="text-center space-y-2 opacity-90">
          <p className="text-sm">🔒 Pembayaran 100% Aman & Terpercaya</p>
          <p className="text-sm">⚡ Akses Langsung Setelah Pembayaran</p>
          <p className="text-sm">🎯 Garansi 30 Hari Uang Kembali</p>
        </div>
      </div>
    </section>
  )
}