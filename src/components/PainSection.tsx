export const PainSection = () => {
  const painPoints = [
    "Bingung mulai belajar bahasa Jepang dari mana?",
    "Mau kerja ke Jepang tapi tes JLPT susahnya minta ampun?",
    "Udah cari materi sana-sini tapi gak ada yang lengkap?",
    "Belajar mahal tapi hasilnya zonk?"
  ]

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-navy">
          Pernah Merasa Seperti Ini?
        </h2>
        
        <div className="grid gap-6 md:gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 text-left max-w-2xl mx-auto">
              <span className="text-primary text-2xl flex-shrink-0">🔸</span>
              <p className="text-lg md:text-xl text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-navy mb-4">
            Kami pernah di posisi itu.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Makanya kami buat <strong className="text-primary">solusi yang beneran bikin kamu lolos kerja ke Jepang.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}