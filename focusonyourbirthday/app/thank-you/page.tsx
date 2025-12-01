import Image from 'next/image'


export default function ThankYou({ searchParams }: { searchParams?: { name?: string } }){
const nameParam = searchParams?.name || null;
const name = nameParam ? decodeURIComponent(nameParam) : "Friend";
return (
<main className="min-h-screen flex flex-col items-center py-16 px-6">
<div className="w-full max-w-xl text-center">
<div className="mb-6">
<Image src="/logo.png" alt="Focus" width={160} height={48} />
</div>


<h1 className="text-5xl font-black">YOU'RE IN!</h1>
<h2 className="mt-4 text-xl font-bold">HEY {name.toUpperCase()}, WE'VE SAVED YOUR BIRTHDAY</h2>


<div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
<p className="text-gray-700 text-center">A few weeks before your big day, our team will reach out with your exclusive birthday specials and help you plan your celebration at Focus.</p>


<div className="mt-6 border-2 border-black rounded-xl p-6 flex flex-col items-center">
<p className="font-bold">WANT A FASTER RESPONSE?</p>
<a href="https://wa.me/<YOUR_NUMBER>?text=I%27d%20like%20to%20plan%20my%20birthday" className="mt-4 bg-black text-white rounded-full px-8 py-3">WHATSAPP US NOW</a>
</div>


<p className="text-center text-gray-500 mt-4">Message us to start planning your birthday celebration right now!</p>
</div>


<a href="/" className="mt-8 inline-block bg-black text-white rounded-full px-8 py-3">BACK TO HOME</a>
</div>
</main>
)
}