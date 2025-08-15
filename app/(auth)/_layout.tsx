import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome " options={{ headerShown: false }} />
        <Stack.Screen name="sign-In" options={{ headerShown: false }} />
        <Stack.Screen name="sign-Up" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
