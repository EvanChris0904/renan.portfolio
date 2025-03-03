import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

// Animation variants defined outside component for better performance and reusability
const animations = {
	container: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	},
	
	heading: {
		hidden: { 
			y: -100,
			opacity: 0,
			scale: 0.8
		},
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 12,
				duration: 0.8
			}
		}
	},

	skillCard: {
		hidden: { 
			opacity: 0,
			y: 50,
			scale: 0.5,
			rotate: -10
		},
		visible: { 
			opacity: 1,
			y: 0,
			scale: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 150,
				damping: 15,
				duration: 0.8
			}
		},
		hover: {
			scale: 1.15,
			rotate: [0, -8, 8, 0],
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 10,
				duration: 0.4
			}
		}
	},

	skillCategory: {
		hidden: { 
			x: -100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 12,
				duration: 0.6
			}
		}
	}
};

const Skills = () => {
	return (
		<section className='skills' id='skills'>
			<div className='container'>
				<motion.div
					className='heading'
					variants={animations.heading}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.3 }}
				>
					<motion.p 
						className='heading-sub-text'
						whileHover={{ scale: 1.05 }}
					>
						What I work with
					</motion.p>
					<motion.p 
						className='heading-text'
						whileHover={{ scale: 1.05 }}
					>
						My Skills
					</motion.p>
				</motion.div>

				<motion.div
					className='skills-box'
					variants={animations.container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
				>
					{Object.values(SkillsData).map((category, categoryIndex) => (
						<motion.div 
							key={categoryIndex} 
							className="skill-category"
							variants={animations.skillCategory}
						>
							<motion.h3 
								className="category-title"
								whileHover={{ scale: 1.05 }}
							>
								{category.title}
							</motion.h3>
							
							<motion.div 
								className="category-skills"
								variants={animations.container}
							>
								{category.skills.map((skill, skillIndex) => (
									<motion.div 
										className='skill-card' 
										key={skillIndex}
										variants={animations.skillCard}
										whileHover="hover"
										whileTap={{ scale: 0.95 }}
									>
										<motion.div 
											className='skill-icon'
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											{skill.icon}
										</motion.div>
										<motion.small className='skill-desc'>
											{skill.name}
										</motion.small>
										<motion.small className='skill-proficiency'>
											{skill.proficiency}
										</motion.small>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
