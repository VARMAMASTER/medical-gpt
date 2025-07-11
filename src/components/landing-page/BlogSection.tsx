import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	image: string;
	slug: string;
	delay: number;
}

function BlogCard({
	title,
	excerpt,
	date,
	readTime,
	image,
	slug,
	delay,
}: BlogPostProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			viewport={{ once: true }}
			className="group relative bg-card backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all"
		>
			<div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
			<div className="relative">
				<div className="relative h-48 overflow-hidden">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover transition-transform group-hover:scale-105"
					/>
				</div>
				<div className="p-6">
					<div className="flex items-center text-sm text-muted mb-4 gap-4">
						<time dateTime={date}>{date}</time>
						<span>{readTime} read</span>
					</div>
					<h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
						{title}
					</h3>
					<p className="text-muted mb-4">{excerpt}</p>
					<Link
						href={`/blog/${slug}`}
						className="inline-flex items-center text-primary hover:text-accent transition-colors"
					>
						Read More
						<svg
							className="ml-2 w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}

export default function BlogSection() {
	const posts = [
		{
			title: "The Future of AI Writing: What to Expect in 2025",
			excerpt:
				"Explore the latest trends and innovations in AI-powered writing assistance and what they mean for content creators.",
			date: "2025-07-01",
			readTime: "5 min",
			image: "/blog/future-ai.jpg",
			slug: "future-of-ai-writing-2025",
		},
		{
			title: "10 Ways to Improve Your Writing with AI",
			excerpt:
				"Practical tips and techniques to enhance your writing using artificial intelligence tools.",
			date: "2025-06-28",
			readTime: "4 min",
			image: "/blog/improve-writing.jpg",
			slug: "improve-writing-with-ai",
		},
		{
			title: "AI Writing Ethics: Finding the Right Balance",
			excerpt:
				"A deep dive into the ethical considerations of using AI in content creation and writing.",
			date: "2025-06-25",
			readTime: "6 min",
			image: "/blog/ai-ethics.jpg",
			slug: "ai-writing-ethics",
		},
	];

	return (
		<section className="py-20 relative overflow-hidden" id="blog">
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
							Latest from
						</span>{" "}
						Our Blog
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-muted text-lg"
					>
						Stay updated with the latest insights and tips on AI-powered writing
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((post, index) => (
						<BlogCard key={post.slug} {...post} delay={0.2 + index * 0.1} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="text-center mt-12"
				>
					<Link
						href="/blog"
						className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-primary to-accent rounded-lg shadow-glow hover:shadow-glow-lg transition-shadow"
					>
						View All Posts
					</Link>
				</motion.div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
			<div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
		</section>
	);
}
