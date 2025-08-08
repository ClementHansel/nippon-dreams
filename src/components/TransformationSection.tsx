export const TransformationSection = () => {
  const transformations = [
    "Kamu lulus N3 & siap interview kerja ke Jepang",
    "Gaji Rp20–30 juta jadi kenyataan", 
    "Tanpa harus bayar kursus mahal atau belajar sendirian"
  ]

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-navy">
          Bayangkan 3 Bulan dari Sekarang…
        </h2>
        
        <div className="space-y-6 mb-12">
          {transformations.map((transformation, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <span className="text-japanese-gold text-2xl">✅</span>
              <p className="text-lg md:text-xl font-medium">{transformation}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-elegant border">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
            Ini waktunya ubah hidupmu.
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ambil kesempatan yang mungkin tidak datang dua kali.
          </p>
        </div>
      </div>
    </section>
  )
}