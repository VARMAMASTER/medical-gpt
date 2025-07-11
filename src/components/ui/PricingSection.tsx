import * as React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { BiCheck } from "react-icons/bi";

const plans = [
	{
		name: "Starter",
		price: "$10",
		period: "month",
		features: [
			"AI Assistance",
			"Advanced Grammar",
			"Plagiarism Check",
			"Community Access",
		],
	},
	{
		name: "Medium",
		price: "$59",
		period: "month",
		features: [
			"All Starter features",
			"Style Adaptation",
			"Context Awareness",
			"Priority Support",
		],
	},
	{
		name: "Business",
		price: "$289",
		period: "month",
		features: [
			"All Medium features",
			"Enterprise Security",
			"Custom Integrations",
			"Dedicated Manager",
		],
	},
];

interface PricingCardProps {
	title: string;
	price: string;
	features: string[];
	isPopular?: boolean;
	delay: number;
	gradientFrom: string;
	gradientTo: string;
}

function PricingCard({
	title,
	price,
	features,
	isPopular,
	delay,
	gradientFrom,
	gradientTo,
}: PricingCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			viewport={{ once: true }}
			className={`relative p-0.5 rounded-2xl ${
				isPopular
					? "bg-gradient-to-r from-primary to-accent"
					: "bg-gradient-to-r from-white/10 to-white/5"
			}`}
		>
			<div className="relative p-6 rounded-2xl bg-card backdrop-blur-xl h-full">
				{isPopular && (
					<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-medium">
						Most Popular
					</div>
				)}

				<div className="text-center mb-8">
					<h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
					<div className="flex items-baseline justify-center">
						<span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							{price}
						</span>
						<span className="text-muted ml-2">/month</span>
					</div>
				</div>

				<ul className="space-y-4 mb-8">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center text-muted">
							<BiCheck
								className={`w-5 h-5 mr-2 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}
							/>
							{feature}
						</li>
					))}
				</ul>

				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={`w-full py-3 rounded-lg font-medium ${
						isPopular
							? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
							: "bg-white/10 text-white hover:bg-white/20"
					} transition-all`}
				>
					Get Started
				</motion.button>
			</div>
		</motion.div>
	);
}

export default function PricingSection() {
	return (
		<section
			className="py-20 relative overflow-hidden"
			id="pricing"
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
							Simple, Transparent
						</span>{" "}
						Pricing
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-muted text-lg"
					>
						Choose the perfect plan for your writing needs
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<PricingCard
							key={plan.name}
							title={plan.name}
							price={
								plan.price === "$10"
									? "$100"
									: plan.price === "$59"
									? "$590"
									: "$2890"
							}
							features={plan.features}
							isPopular={plan.name === "Medium"}
							delay={0.2 + index * 0.1}
							gradientFrom={
								plan.name === "Medium"
									? "primary"
									: plan.name === "Starter"
									? "blue-400"
									: "purple-400"
							}
							gradientTo={
								plan.name === "Medium"
									? "accent"
									: plan.name === "Starter"
									? "blue-600"
									: "pink-600"
							}
						/>
					))}
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
			<div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
		</section>
	);
}
