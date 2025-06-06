import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import { SocialLinkProps } from "./socialLink.props";

export const SocialLink = ({ item, iconType = "contacts", ...props }: SocialLinkProps): JSX.Element => {
	return (
		<Link href={item.link} target="_blank" aria-label={`Visit my ${item.name}`} {...props}>
			<Image
				src={iconType === "contacts" ? item.contactsIcon : item.asideIcon}
				alt={item.name}
				width={35}
				height={35}
				unoptimized
			/>
		</Link>
	);
};
