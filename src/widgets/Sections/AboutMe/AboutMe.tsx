import styles from "./aboutMe.module.css";

import { AboutMeProps } from "./aboutMe.props";

import { P, Photo, Title } from "@/shared/UI";

import { SkillBlock } from "@/widgets/Blocks";
import { AboutMeWave } from "@/widgets/Waves";

export const AboutMe = ({ description, skillsList }: AboutMeProps) => {
	return (
		<section className={styles.about} id="about">
			<div className="container">
				<div className={styles.wrapper}>
					<Photo />
					<div className={styles.description}>
						<Title navyBlueCircle Tag="h2">
							About me
						</Title>
						<Title size="48" Tag="h3" className={styles.title}>
							I&apos;m web-developer
						</Title>
						<div className="divider"></div>
						<P className={styles.descriptionText} color="gray" size="24">
							{description}
						</P>
					</div>
					<div className={styles.skills}>
						{skillsList.map((skill, index) => {
							return (
								<SkillBlock
									key={`skillsList-${index}`}
									title={skill.title}
									imageSrc={skill.imageSrc}
									description={skill.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<AboutMeWave />
		</section>
	);
};
