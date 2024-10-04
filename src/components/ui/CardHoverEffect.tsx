import { cn } from "@/lib/utils";
import { CardTypes } from "@/types/shirts";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const CardHoverEffect = ({
	items,
	className,
}: {
	items: CardTypes[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
				className
			)}
		>
			{items.map((item) => (
				<div
					key={item?.id}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(item.id)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === item.id && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-red-primary block  rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<Image
							src={item.img}
							alt={item.title}
							className="w-full rounded-lg border"
						/>
						<CardTitle>{item.title}</CardTitle>
						<div className="flex gap-4">
							<CardDescription>${item.previousPrice}</CardDescription>
							<CardDescription>
								$<del>{item.previousPrice}</del>
							</CardDescription>
						</div>
					</Card>
				</div>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent  group-hover:border-red-primary relative z-20 text-[#060606]",
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-4 space-y-4">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4 className={cn(" font-bold tracking-wide", className)}>{children}</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p className={cn("tracking-wide leading-relaxed font-bold text-lg", className)}>
			{children}
		</p>
	);
};
