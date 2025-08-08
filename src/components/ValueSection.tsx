export const ValueSection = () => {
  const values = [
    {
      icon: "🎮",
      title: "Belajar Seru & Visual",
      subtitle: "(Metode Gamifikasi)",
      description: "Belajar seperti bermain game, lebih seru dan mudah diingat"
    },
    {
      icon: "💸", 
      title: "10x Lebih Hemat",
      subtitle: "(Tanpa bayar les jutaan)",
      description: "Hemat hingga 90% dibanding kursus offline tradisional"
    },
    {
      icon: "🇯🇵",
      title: "Fokus Kerja di Jepang",
      subtitle: "(Bukan sekadar belajar bahasa umum)",
      description: "Materi khusus untuk persiapan kerja dan tes JLPT"
    },
    {
      icon: "📈",
      title: "Terbukti Efektif",
      subtitle: "(87% siswa lulus N3 & dapat kerja dalam 3 bulan)",
      description: "Track record yang sudah terbukti dengan hasil nyata"
    }
  ]

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-navy">
          Kenapa Harus Videobook Ini?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-elegant border hover:shadow-glow transition-all duration-300">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-navy">
                {value.title}
              </h3>
              <p className="text-primary font-medium mb-4">{value.subtitle}</p>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}