import * as React from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/Label';
import { animations } from '@/lib/animations';

export default function LabelDemo() {
	const [hoveredLabel, setHoveredLabel] = React.useState<string | null>(null);

	const labels = [
		{ id: 'name', text: 'Name' },
		{ id: 'email', text: 'Email' },
		{ id: 'message', text: 'Message' },
	];

	return (
		<div className="grid gap-8 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl">
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				variants={animations.slideUp}
				transition={animations.spring}
				className="space-y-6"
			>
				{labels.map((label) => (
					<div key={label.id} className="space-y-2">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onHoverStart={() => setHoveredLabel(label.id)}
							onHoverEnd={() => setHoveredLabel(null)}
						>
							<Label
								htmlFor={label.id}
								className={`text-lg transition-all duration-300 ${
									hoveredLabel === label.id
										? 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
										: 'bg-gradient-to-r from-purple-500 to-pink-500'
								}`}
							>
								{label.text}
							</Label>
						</motion.div>
						<input
							type="text"
							id={label.id}
							className="w-full px-4 py-2 bg-black/20 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
							placeholder={`Enter your ${label.text.toLowerCase()}`}
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
}
