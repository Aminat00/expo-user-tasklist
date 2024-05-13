import React from "react";
import { Text, View } from "react-native";
import { getDayName, returnCurrentWeek } from "utils";
import { CardData, allTasks } from "./data";
import { Card } from "./card";
import { CurrentWeek } from "./current-week";
import { colors } from "theme";

interface TasksByDate {
	[date: string]: CardData[];
}

export const CalendarView = () => {
	const currentWeek = returnCurrentWeek();

	const currentWeekTasks = allTasks.filter((task) => {
		const taskDate = new Date(task.date);

		return (
			taskDate >= currentWeek[0] &&
			taskDate <= currentWeek[6] &&
			taskDate.getDay() !== 0
		);
	});

	const tasksByDate: TasksByDate = currentWeekTasks.reduce(
		(acc: TasksByDate, task: CardData) => {
			const dateKey: string = new Date(task.date).toDateString();
			acc[dateKey] = [...(acc[dateKey] || []), task];
			return acc;
		},
		{}
	);

	return (
		<View style={{ gap: 16 }}>
			<CurrentWeek />
			{currentWeek.map((day: Date, index: number) => (
				<View key={index} style={{ gap: 16 }}>
					{day.getDay() !== 0 && (
						<Text
							style={{
								fontSize: 16,
								lineHeight: 28,
								fontWeight: "700",
								color: colors.textBlue,
							}}>
							{getDayName(day)}
						</Text>
					)}
					{tasksByDate[day.toDateString()] &&
						tasksByDate[day.toDateString()].map((task, taskIndex) => (
							<Card
								key={taskIndex}
								cardType={task.cardType}
								date={task.date}
								title={task.title}
								description={task.description}
								label={task.label}
							/>
						))}
				</View>
			))}
		</View>
	);
};
