"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LensProps {
	children: React.ReactNode;
	id: string | number; // Accept an id for identifying the image
	hovering: boolean;
	setHovering?: (hovering: boolean) => void;
	zoomFactor?: number;
	lensSize?: number;
	position?: {
		x: number;
		y: number;
	};
	isStatic?: boolean;
}

export const Lens: React.FC<LensProps> = ({
	children,
	hovering,
	setHovering,
	zoomFactor = 1.5,
	lensSize = 170,
	isStatic = false,
	position = { x: 200, y: 150 },
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setMousePosition({ x, y });
	};

	return (
		<div
			ref={containerRef}
			className="relative overflow-hidden rounded-lg z-20"
			onMouseEnter={() => setHovering && setHovering(true)}
			onMouseLeave={() => setHovering && setHovering(false)}
			onMouseMove={handleMouseMove}
		>
			{children}

			{isStatic ? (
				<div>
					<motion.div
						initial={{ opacity: 0, scale: 0.58 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="absolute inset-0 overflow-hidden"
						style={{
							maskImage: `radial-gradient(circle ${lensSize / 2}px at ${
								position.x
							}px ${position.y}px, black 100%, transparent 100%)`,
							WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${
								position.x
							}px ${position.y}px, black 100%, transparent 100%)`,
							transformOrigin: `${position.x}px ${position.y}px`,
						}}
					>
						<div
							className="absolute inset-0"
							style={{
								transform: `scale(${zoomFactor})`,
								transformOrigin: `${position.x}px ${position.y}px`,
							}}
						>
							{children}
						</div>
					</motion.div>
				</div>
			) : (
				<AnimatePresence>
					{hovering && (
						<div>
							<motion.div
								initial={{ opacity: 0, scale: 0.58 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.3, ease: "easeOut" }}
								className="absolute inset-0 overflow-hidden"
								style={{
									maskImage: `radial-gradient(circle ${lensSize / 2}px at ${
										mousePosition.x
									}px ${mousePosition.y}px, black 100%, transparent 100%)`,
									WebkitMaskImage: `radial-gradient(circle ${
										lensSize / 2
									}px at ${mousePosition.x}px ${
										mousePosition.y
									}px, black 100%, transparent 100%)`,
									transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
									zIndex: 50,
								}}
							>
								<div
									className="absolute inset-0"
									style={{
										transform: `scale(${zoomFactor})`,
										transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
									}}
								>
									{children}
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			)}
		</div>
	);
};
