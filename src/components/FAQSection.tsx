import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQSection = () => {
  const faqs = [
    {
      question: "Apakah ini cocok untuk pemula?",
      answer: "Sangat cocok! Videobook ini dirancang khusus untuk pemula yang belum pernah belajar bahasa Jepang sama sekali. Kami mulai dari dasar seperti Hiragana dan Katakana dengan metode yang mudah dipahami."
    },
    {
      question: "Apakah bisa dipelajari tanpa internet stabil?",
      answer: "Ya bisa! Setelah download, semua materi bisa diakses offline. Kamu bisa belajar kapan saja dan dimana saja tanpa perlu koneksi internet."
    },
    {
      question: "Apakah ada jaminan uang kembali?",
      answer: "Ya, kami berikan garansi 30 hari uang kembali 100% jika kamu tidak puas dengan materinya. Kami yakin dengan kualitas produk kami."
    },
    {
      question: "Kapan saya bisa mulai belajar setelah beli?",
      answer: "Langsung setelah pembayaran! Kamu akan mendapat akses download dalam 5 menit setelah pembayaran berhasil."
    },
    {
      question: "Apakah videobook ini bisa diakses selamanya?",
      answer: "Ya! Sekali beli, akses selamanya. Kamu juga akan mendapat update gratis jika ada penambahan materi baru."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-navy">
          Pertanyaan yang Sering Diajukan
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-navy hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-primary">❓</span>
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}