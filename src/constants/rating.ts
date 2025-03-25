import { Locale, RatingType } from "@/types";

export const ratings: Locale<RatingType> = {
	en: [
		{ percentage: 95, name: "Website development" },
		{ percentage: 75, name: "Build applications" },
		{ percentage: 90, name: "SEO" },
		{ percentage: 90, name: "Creativity" },
		{ percentage: 80, name: "UX/UI design" },
		{ percentage: 94, name: "Soft skills" },
	],
	ru: [
		{ percentage: 95, name: "Разработка сайтов" },
		{ percentage: 75, name: "Создание ПО" },
		{ percentage: 90, name: "SEO-оптимизация" },
		{ percentage: 90, name: "Креативность" },
		{ percentage: 80, name: "UX/UI дизайн" },
		{ percentage: 94, name: '"Мягкие" навыки' },
	],
	de: [
		{ percentage: 95, name: "Webseitenentwicklung" },
		{ percentage: 75, name: "Anwendungsentwicklung" },
		{ percentage: 90, name: "SEO" },
		{ percentage: 90, name: "Kreativität" },
		{ percentage: 80, name: "UX/UI Design" },
		{ percentage: 94, name: "Soft Skills" },
	],
	fi: [
		{ percentage: 95, name: "Verkkosivujen kehittäminen" },
		{ percentage: 75, name: "Sovellusten rakentaminen" },
		{ percentage: 90, name: "SEO" },
		{ percentage: 90, name: "Luovuus" },
		{ percentage: 80, name: "UX/UI-suunnittelu" },
		{ percentage: 94, name: "Pehmeät taidot" },
	],
	zh: [
		{ percentage: 95, name: "网站开发" },
		{ percentage: 75, name: "应用开发" },
		{ percentage: 90, name: "SEO优化" },
		{ percentage: 90, name: "创意能力" },
		{ percentage: 80, name: "UX/UI设计" },
		{ percentage: 94, name: "软技能" },
	],
};
