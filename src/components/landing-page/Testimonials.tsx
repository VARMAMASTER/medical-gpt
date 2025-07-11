import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Content Manager",
		company: "TechCorp",
		quote: "This AI writing tool has completely transformed our content creation process. The suggestions are spot-on and have helped us improve our writing quality significantly.",
		image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80",
	},
	{
		name: "Michael Chen",
		role: "Marketing Director",
		company: "GrowthLabs",
		quote: "The real-time assistance and multi-language support have been game-changers for our global marketing campaigns. Highly recommended!",
		image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80",
	},
	{
		name: "Emily Rodriguez",
		role: "Lead Writer",
		company: "ContentPro",
		quote: "As a professional writer, I was skeptical at first. But this tool has become indispensable in my workflow, helping me write better and faster.",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80",
	},
];

function TestimonialCard({ name, role, company, quote, image, delay }: { name: string, role: string, company: string, quote: string, image: string, delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			viewport={{ once: true }}
			className="group relative p-6 bg-card backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all"
		>
			<div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
			<div className="relative">
				<div className="flex items-center gap-4 mb-6">
					<div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-primary to-accent p-[2px]">
						<div className="w-full h-full rounded-full overflow-hidden">
							<Image
								src={image}
								alt={name}
								width={48}
								height={48}
								className="object-cover"
							/>
						</div>
					</div>
					<div>
						<h4 className="text-lg font-semibold text-white">{name}</h4>
						<p className="text-sm text-muted">
							{role} at {company}
						</p>
					</div>
				</div>
				<blockquote className="text-muted relative">
					<span className="absolute -top-2 -left-2 text-4xl text-primary/20">
						"
					</span>
					{quote}
					<span className="absolute -bottom-4 -right-2 text-4xl text-primary/20">
						"
					</span>
				</blockquote>
			</div>
		</motion.div>
	);
}

export default function TestimonialsSection() {
	return (
		<section
			className="py-20 relative overflow-hidden"
			id="testimonials"
		>
			<div className="absolute inset-0 bg-mesh-pattern opacity-20" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold mb-4"
					>
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							What Our Users
						</span>{" "}
						Say
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-muted text-lg"
					>
						Join thousands of satisfied users who have transformed their writing
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.name}
							{...testimonial}
							delay={0.2 + index * 0.1}
						/>
					))}
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
			<div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
		</section>
	);
}
