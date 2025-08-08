export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "3 bulan lalu aku gak bisa baca Hiragana. Sekarang udah kerja di Jepang & bisa ngobrol langsung!",
      name: "Fitri",
      age: "28 tahun",
      achievement: "Lulus JLPT N3",
      avatar: "👩"
    },
    {
      quote: "Capek nganggur, akhirnya iseng beli videobook ini. Sekarang gaji Rp35 juta/bulan di Jepang.",
      name: "Wildan", 
      age: "30 tahun",
      achievement: "Engineer Jepang",
      avatar: "👨"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl">🎤</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">Apa Kata Mereka?</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-accent p-8 rounded-xl shadow-elegant border">
              <div className="mb-6">
                <p className="text-lg md:text-xl italic text-navy leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-navy text-lg">
                    — {testimonial.name}, {testimonial.age}
                  </h4>
                  <p className="text-primary font-medium">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-japanese-gold">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>
          <p className="text-muted-foreground mt-2">Rating 4.9/5 dari 350+ siswa</p>
        </div>
      </div>
    </section>
  )
}