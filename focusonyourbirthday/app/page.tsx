'use client'
import Image from 'next/image'
import Link from 'next/link'
import HeroForm from '../components/HeroForm'

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image src="/hero.jpg" alt="balloons" fill className="object-cover" priority />
          <div className="absolute left-4  top-4">
            <Image src="/logo.png" alt="Focus" width={140} height={40} />
          </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center px-6">
        

          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-black">Happy Birthday</h1>
          <p className="mt-4 text-lg md:text-xl font-semibold">Celebrate Your Special day at <span className="italic">FOCUS</span></p>
          <p className="mt-4 max-w-xl mx-auto text-md text-black/80">Tell us when your birthday is and we’ll hook you up with exclusive birthday perks and VIP offers.</p>

          <a href="#birthday-form" className="inline-block mt-6 bg-black text-white rounded-full px-10 py-3 font-semibold shadow">Lock In Your Birthday</a>
        </div>
      </section>

      {/* FORM CARD */}
      <section className="py-16 px-6 flex justify-center">
        <div className="w-full max-w-4xl -mt-20 bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-2xl font-bold text-center">Birthday Perks @Focus</h2>
          <p className="text-sm text-center text-gray-700 mt-2 max-w-2xl mx-auto">Share your info below and join our birthday list! We’ll text and email you exciting birthday deals, help you plan your special day at Focus, and invite you to your own birthday celebration.</p>

          <div id="birthday-form" className="mt-8">
            <HeroForm />
          </div>
        </div>
      </section>

    </main>
  )
}