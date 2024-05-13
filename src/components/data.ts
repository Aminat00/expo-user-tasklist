import { CardType } from "./types";

export interface CardData {
	id: string;
	cardType: CardType;
	date: string;
	title: string;
	description: string;
	label?: string;
}

// Function to generate a unique ID for each task
function generateId(): string {
	// Generate a random string of characters as the ID
	return Math.random().toString(36).slice(2, 11);
}
function getRandomCardType(): CardType {
	const cardTypes: CardType[] = [
		CardType.pending,
		CardType.inProgress,
		CardType.completed,
	];
	const randomIndex = Math.floor(Math.random() * cardTypes.length);
	return cardTypes[randomIndex];
}
// Function to generate random labels
function getRandomLabel(): string | undefined {
	const labels = ["High priority", undefined];
	const randomIndex = Math.floor(Math.random() * labels.length);
	return labels[randomIndex];
}
// Generate data for this week's tasks
function generateThisWeekTasks(): CardData[] {
	const today = new Date();
	const todayTimestamp = today.getTime();
	const daysInWeek = 7;
	const tasks = [];

	for (let i = 0; i < daysInWeek; i++) {
		const taskDate = new Date(todayTimestamp + i * 24 * 60 * 60 * 1000);
		tasks.push({
			id: generateId(),
			cardType: getRandomCardType(),
			date: taskDate.toISOString(),
			title: "Implement new feature for application",
			description:
				"Work on implementing new feature according to specifications.",
			label: getRandomLabel(),
		});
	}

	return tasks;
}

// Generate data for next week's tasks
function generateNextWeekTasks(): CardData[] {
	const today = new Date();
	const todayTimestamp = today.getTime();
	const daysInWeek = 7;
	const tasks = [];

	for (let i = 0; i < daysInWeek; i++) {
		const taskDate = new Date(todayTimestamp + (7 + i) * 24 * 60 * 60 * 1000);
		tasks.push({
			id: generateId(),
			cardType: getRandomCardType(),
			date: taskDate.toISOString(),
			title: "Refactor codebase for performance optimization",
			description:
				"Analyze codebase and refactor for better performance and maintainability.",
			label: getRandomLabel(),
		});
	}

	return tasks;
}

// Merge this week's and next week's tasks
export const thisWeekTasks = generateThisWeekTasks();
const nextWeekTasks = generateNextWeekTasks();
export const allTasks = [...thisWeekTasks, ...nextWeekTasks];
