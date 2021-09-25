import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import { initializeApp } from "firebase/app";

import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoListScreen from "./src/screens/MemoListScreen";

import { firebaseConfig } from "./env";

const Stack = createStackNavigator();

const app = initializeApp(firebaseConfig);

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="LogIn"
				screenOptions={{
					headerStyle: { backgroundColor: "#467fd3" },
					headerTitleStyle: { color: "#fff" },
					headerTitle: "Memo App",
					headerTintColor: "#fff",
					headerBackTitle: "Back",
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
					gestureEnabled: true,
					gestureDirection: "horizontal",
				}}
			>
				<Stack.Screen name="MemoList" component={MemoListScreen} />
				<Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
				<Stack.Screen name="MemoEdit" component={MemoEditScreen} />
				<Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
				<Stack.Screen
					name="LogIn"
					component={LogInScreen}
					options={{
						cardStyleInterpolator:
							CardStyleInterpolators.forFadeFromBottomAndroid,
					}}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUpScreen}
					options={{
						cardStyleInterpolator:
							CardStyleInterpolators.forFadeFromBottomAndroid,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
