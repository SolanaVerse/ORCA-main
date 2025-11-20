'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'


const schema = z.object({
name: z.string().min(2),
email: z.string().email(),
message: z.string().min(10)
})


type FormData = z.infer<typeof schema>


export default function ContactForm() {
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })


async function onSubmit(data: FormData) {
try {
const response = await fetch('/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
})
if (response.ok) {
alert('Thanks! We received your message and will get back to you soon.')
} else {
alert('Sorry, there was an error sending your message. Please try again.')
}
} catch (error) {
alert('Sorry, there was an error sending your message. Please try again.')
}
}


return (
<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
<div>
<input 
{...register('name')} 
placeholder="Your name" 
className={`w-full p-4 rounded-lg bg-[#071021] border transition-colors ${
errors.name ? 'border-red-500' : 'border-neutral-700 focus:border-orca-500'
}`} 
/>
{errors.name && <p className="text-red-400 text-sm mt-1">Name is required (min 2 characters)</p>}
</div>

<div>
<input 
{...register('email')} 
placeholder="Email address" 
type="email"
className={`w-full p-4 rounded-lg bg-[#071021] border transition-colors ${
errors.email ? 'border-red-500' : 'border-neutral-700 focus:border-orca-500'
}`} 
/>
{errors.email && <p className="text-red-400 text-sm mt-1">Please enter a valid email address</p>}
</div>

<div>
<textarea 
{...register('message')} 
placeholder="Tell us about your project and requirements" 
rows={6} 
className={`w-full p-4 rounded-lg bg-[#071021] border transition-colors resize-none ${
errors.message ? 'border-red-500' : 'border-neutral-700 focus:border-orca-500'
}`} 
/>
{errors.message && <p className="text-red-400 text-sm mt-1">Message is required (min 10 characters)</p>}
</div>

<button 
type="submit" 
disabled={isSubmitting} 
className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-orca-600 to-neon hover:from-orca-700 hover:to-neon/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
>
{isSubmitting ? 'Sending...' : 'Send Message'}
</button>
</form>
)
}