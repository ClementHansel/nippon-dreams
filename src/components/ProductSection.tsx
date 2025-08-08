import { JapaneseButton } from "@/components/ui/japanese-button"

export const ProductSection = () => {
  const features = [
    "Pemula total",
    "Mau kerja di Jepang", 
    "Ingin lulus JLPT N5–N3 dalam waktu cepat"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-4xl mb-6">
            <span>🎌</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Perkenalkan: Videobook Belajar Bahasa Jepang dari 0
            </h2>
            <span>🎌</span>
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
            Belajar Bahasa Jepang jadi mudah & menyenangkan!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
              Dirancang khusus untuk kamu yang:
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-japanese-gold text-xl">✅</span>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-accent p-6 rounded-lg shadow-elegant">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎥</span>
                <h4 className="text-xl font-bold text-navy">Materi Visual Interaktif</h4>
              </div>
              <p className="text-lg text-muted-foreground">
                Dari Hiragana-Katakana hingga grammar dan percakapan.
              </p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-elegant border">
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-navy">Videobook Premium</h3>
              <p className="text-muted-foreground mb-6">
                Semua yang kamu butuhkan untuk menguasai bahasa Jepang dari nol hingga siap kerja.
              </p>
              <JapaneseButton variant="primary" size="lg" className="w-full">
                Lihat Isi Lengkap
              </JapaneseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}