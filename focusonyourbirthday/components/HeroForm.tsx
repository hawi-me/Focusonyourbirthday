'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroForm() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', phone: '', email: '', month: '', day: '', size: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const days = Array.from({length:31}, (_,i)=> String(i+1))

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if(!form.name || !form.phone || !form.email || !form.month || !form.day){
      setError('Please fill all required fields')
      return
    }
    setLoading(true)
    try{
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          birthday_month: form.month,
          birthday_day: form.day,
          party_size: form.size,
          created_at: new Date().toISOString()
        })
      })

      if(!res.ok) throw new Error('Failed to save')

      // on success redirect to thank-you with query
      router.push(`/thank-you?name=${encodeURIComponent(form.name)}`)
    }catch(err){
      console.error(err)
      setError('Something went wrong. Try again.')
    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div>
        <label className="text-sm font-medium">Full Name *</label>
        <input name="name" value={form.name} onChange={onChange} className="mt-1 block w-full rounded-md border p-3" placeholder="Your name" />
      </div>

      <div>
        <label className="text-sm font-medium">Phone Number *</label>
        <input name="phone" value={form.phone} onChange={onChange} className="mt-1 block w-full rounded-md border p-3" placeholder="(555) 123-4567" />
      </div>

      <div>
        <label className="text-sm font-medium">Email *</label>
        <input name="email" value={form.email} onChange={onChange} className="mt-1 block w-full rounded-md border p-3" placeholder="you@example.com" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Month *</label>
          <select name="month" value={form.month} onChange={onChange} className="mt-1 block w-full rounded-md border p-3">
            <option value="">Month</option>
            {months.map(m=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Day *</label>
          <select name="day" value={form.day} onChange={onChange} className="mt-1 block w-full rounded-md border p-3">
            <option value="">Day</option>
            {days.map(d=> <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">How many people do you usually celebrate with? (Optional)</label>
        <select name="size" value={form.size} onChange={onChange} className="mt-1 block w-full rounded-md border p-3">
          <option value="">Select party size</option>
          <option value="2-4">2–4</option>
          <option value="5-8">5–8</option>
          <option value="9-12">9–12</option>
          <option value="13+">13+</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className="w-full bg-black text-white rounded-full px-6 py-3 font-semibold">
        {loading ? 'Saving...' : 'Save My Birthday'}
      </button>

      <p className="text-center text-xs text-gray-500">We&#39;ll only use this to send you birthday perks and reminders. No spam.</p>
    </form>
  )
}