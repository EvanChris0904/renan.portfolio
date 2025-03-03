import { DiJavascript1 } from "react-icons/di";
import {
	FaCss3Alt,
	FaFigma,
	FaGithub,
	FaHtml5,
	FaReact,
	FaSass
} from "react-icons/fa";
import { RiVuejsLine } from "react-icons/ri";
import {
	SiAdobephotoshop,
	SiFirebase,
	SiFramer,
	SiNextdotjs,
	SiRedux,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiSolidity,
	SiWeb3Dotjs,
	SiEthereum,
	SiJenkins,
	SiDocker,
	SiKubernetes,
	SiAmazonaws
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const SkillsData = {
	fundamentals: {
		title: "Core Technologies",
		skills: [
			{
				name: "HTML5",
				icon: <FaHtml5 />,
				proficiency: "Expert"
			},
			{
				name: "CSS3",
				icon: <FaCss3Alt />,
				proficiency: "Expert"
			},
			{
				name: "JavaScript",
				icon: <DiJavascript1 />,
				proficiency: "Expert"
			}
		]
	},
	blockchain: {
		title: "Blockchain Development",
		skills: [
			{
				name: "Smart Contract",
				icon: <SiSolidity />,
				proficiency: "Expert"
			},
			{
				name: "Solidity",
				icon: <SiSolidity />,
				proficiency: "Expert"
			},
			{
				name: "Web3.js",
				icon: <SiWeb3Dotjs />,
				proficiency: "Expert"
			},
			{
				name: "DeFi Protocols",
				icon: <SiEthereum />,
				proficiency: "Advanced"
			},
			{
				name: "ERC Standards",
				icon: <SiEthereum />,
				proficiency: "Expert"
			},
			{
				name: "Hardhat/Truffle",
				icon: <SiEthereum />,
				proficiency: "Expert"
			},
			{
				name: "OpenZeppelin",
				icon: <SiSolidity />,
				proficiency: "Advanced"
			},
			{
				name: "IPFS",
				icon: <SiWeb3Dotjs />,
				proficiency: "Advanced"
			},
			{
				name: "Chainlink",
				icon: <SiEthereum />,
				proficiency: "Advanced"
			}
		]
	},
	frontend: {
		title: "Frontend Development",
		skills: [
			{
				name: "React.js",
				icon: <FaReact />,
				proficiency: "Expert"
			},
			{
				name: "Next.js",
				icon: <SiNextdotjs />,
				proficiency: "Expert"
			},
			{
				name: "TypeScript",
				icon: <SiTypescript />,
				proficiency: "Expert"
			},
			{
				name: "Vue.js",
				icon: <RiVuejsLine />,
				proficiency: "Advanced"
			},
			{
				name: "Redux",
				icon: <SiRedux />,
				proficiency: "Expert"
			},
			{
				name: "React Native",
				icon: <TbBrandReactNative />,
				proficiency: "Advanced"
			},
			{
				name: "Tailwind CSS",
				icon: <SiTailwindcss />,
				proficiency: "Expert"
			},
			{
				name: "Styled Components",
				icon: <SiStyledcomponents />,
				proficiency: "Expert"
			},
			{
				name: "SASS",
				icon: <FaSass />,
				proficiency: "Expert"
			}
		]
	},
	devops: {
		title: "DevOps & Infrastructure",
		skills: [
			{
				name: "Docker",
				icon: <SiDocker />,
				proficiency: "Expert"
			},
			{
				name: "Kubernetes",
				icon: <SiKubernetes />,
				proficiency: "Advanced"
			},
			{
				name: "CI/CD (Jenkins)",
				icon: <SiJenkins />,
				proficiency: "Expert"
			},
			{
				name: "AWS",
				icon: <SiAmazonaws />,
				proficiency: "Advanced"
			},
			{
				name: "Git/GitHub",
				icon: <FaGithub />,
				proficiency: "Expert"
			},
			{
				name: "Firebase",
				icon: <SiFirebase />,
				proficiency: "Advanced"
			}
		]
	}
};
