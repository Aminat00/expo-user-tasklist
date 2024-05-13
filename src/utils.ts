export function returnCurrentWeek() {
	const currentDate = new Date();
	const currentDayOfWeek = currentDate.getDay();
	const startDate = new Date(currentDate);
	startDate.setDate(startDate.getDate() - currentDayOfWeek);
	const week = [];

	for (let i = 0; i < 7; i++) {
		const day = new Date(startDate);
		day.setDate(startDate.getDate() + i);
		week.push(day);
	}

	return week;
}

export const getCurrentWeekText = (date: Date) => {
	const today = new Date();
	const currentWeek = returnCurrentWeek();
	const nextWeekStartDate = new Date(
		currentWeek[6].getTime() + 1 * 24 * 60 * 60 * 1000
	);
	const nextWeekEndDate = new Date(
		nextWeekStartDate.getTime() + 6 * 24 * 60 * 60 * 1000
	);

	if (date >= currentWeek[0] && date <= currentWeek[6]) {
		return "This Week";
	} else if (date >= nextWeekStartDate && date <= nextWeekEndDate) {
		return "Next Week";
	}

	return "";
};

// Function to get the day name from the date
export const getDayName = (date: Date): string => {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);

	if (date.toDateString() === today.toDateString()) {
		return "Today";
	} else if (date.toDateString() === tomorrow.toDateString()) {
		return "Tomorrow";
	} else {
		return date.toLocaleDateString("en-US", { weekday: "long" });
	}
};
