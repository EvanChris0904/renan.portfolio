import React from "react";
import { FiDownload, FiFolder, FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WorkCard = ({ w, tabId }) => {
	return (
		<div>
			{tabId === "react-native" ? (
				<div className='works-card'>
					<div className='works-container'>
						<div className='top-work'>
							<FiFolder className='work-folder' />
							<div className='right'>
								{w.gitlink && (
									<Link className='work-git' to={w.gitlink} target='_blank'>
										<FiGithub />
									</Link>
								)}
								<a
									href={w.app}
									download={w.title}
									target='_blank'
									rel='noreferrer'
									className='work-link'
								>
									<FiDownload />
								</a>
							</div>
						</div>
						<a
							href={w.app}
							download={w.title}
							target='_blank'
							rel='noreferrer'
							className='work-content-link'
						>
							<div className='mid-work'>
								<p className='work-title'>{w.title}</p>
								<p className='work-desc'>{w.desc}</p>
							</div>
							<div className='bottom-work'>
								{w.tech.map((e, index) => {
									return <small key={index}>{e}</small>;
								})}
							</div>
						</a>
					</div>
				</div>
			) : (
				<div className='works-card'>
					<div className='works-container'>
						<div className='top-work'>
							<FiFolder className='work-folder' />
							<div className='right'>
								{w.gitlink && (
									<Link className='work-git' to={w.gitlink} target='_blank'>
										<FiGithub />
									</Link>
								)}
								<Link className='work-link' to={w.site} target='_blank'>
									<IoOpenOutline />
								</Link>
							</div>
						</div>
						<Link to={w.site} target='_blank' className='work-content-link'>
							<div className='mid-work'>
								<p className='work-title'>{w.title}</p>
								<p className='work-desc'>{w.desc}</p>
							</div>
							<div className='bottom-work'>
								{w.tech.map((e, index) => {
									return <small key={index}>{e}</small>;
								})}
							</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default WorkCard;
