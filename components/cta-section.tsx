import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  heading?: string
  subtext?: string
  buttonText?: string
  buttonLink?: string
}

export default function CTASection({
  heading = "Ready to work with us?",
  subtext = "Contact us today to discuss your industrial design needs.",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg text-gray-300 mb-10">{subtext}</p>
          <Button asChild className="minimal-button bg-white text-black hover:bg-gray-200">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

