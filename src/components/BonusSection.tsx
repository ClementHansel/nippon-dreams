import { JapaneseButton } from "@/components/ui/japanese-button"

export const BonusSection = () => {
  const bonuses = [
    {
      title: "Study Case: Lolos Kerja ke Jepang",
      value: "Rp150rb",
      icon: "🎁"
    },
    {
      title: "Strategi Belajar N3 3 Bulan", 
      value: "Rp200rb",
      icon: "🎁"
    },
    {
      title: "Panduan Visa Kerja Jepang Lengkap",
      value: "Rp300rb", 
      icon: "🎁"
    }
  ]

  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">🔥</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">💎</div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-4xl animate-pulse">🔥</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              BONUS TERBATAS: Untuk 100 Pembeli Pertama
            </h2>
            <span className="text-4xl animate-pulse">🔥</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">{bonus.icon}</div>
              <h3 className="font-bold text-lg mb-2">{bonus.title}</h3>
              <p className="text-japanese-gold font-bold">(Senilai {bonus.value})</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 max-w-2xl mx-auto">
          <p className="text-xl mb-2">Total Nilai: <span className="line-through text-gray-300">Rp1.397.000</span></p>
          <div className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-japanese-gold">🎉 Harga Hari Ini: </span>
            <span className="text-white">Hanya Rp147.000</span>
          </div>
          <p className="text-2xl font-bold text-primary mb-8">💥 Hemat 90%!</p>
          
          <JapaneseButton variant="hero" size="xl" className="w-full md:w-auto">
            Saya Mau Dapatkan Videobook + Bonus
          </JapaneseButton>
        </div>
      </div>
    </section>
  )
}