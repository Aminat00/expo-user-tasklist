import React from "react";
import { getCurrentWeekText } from "utils";
import { allTasks } from "./data";
import { Text } from "react-native";
import { colors } from "theme";
import { Card } from "./card";

export const ListView = () =>
	allTasks.map((task, index) => {
		const isNewWeek =
			index === 0 ||
			getCurrentWeekText(new Date(task.date)) !==
				getCurrentWeekText(new Date(allTasks[index - 1].date));

		return (
			<React.Fragment key={task.id}>
				{isNewWeek && (
					<Text
						style={{
							fontSize: 16,
							lineHeight: 28,
							fontWeight: "700",
							color: colors.textBlue,
						}}>
						{getCurrentWeekText(new Date(task.date))}
					</Text>
				)}
				<Card
					cardType={task.cardType}
					date={task.date}
					title={task.title}
					description={task.description}
					label={task.label}
				/>
			</React.Fragment>
		);
	});
