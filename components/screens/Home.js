import React from "react";
import { Text, View, Button } from "react-native";

// import { MotiLink } from "solito/moti";
import { Switch } from "react-native";
import { Drip } from "../../App";
export default function Home({ navigation }) {
  // const { push, replace, back, parseNextPath } = useRouter();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const onPress = () => {
  //   push("/");
  // };
  // const onGoBack = () => {
  //   back();
  // };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Drip.colors.green["500"],
      }}
    >
      {/* <MotiLink
        href={href}
        as={as}
        animate={({ hovered, pressed }) => {
          "worklet";
          return {
            scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          };
        }}
      >
        {children}
      </MotiLink> */}
      <Text
        style={{
          fontWeight: Drip.fontWeight.fontThin,
          backgroundColor: "blue",
        }}
      >
        Home
      </Text>
      <Text>Home</Text>
      <Button onPress={() => alert("TEST")} title={"Fandy"} />
      <Switch
        trackColor={{
          false: Drip.colors.blue["100"],
          true: Drip.colors.blue["500"],
        }}
        thumbColor={
          isEnabled ? Drip.colors.blue["100"] : Drip.colors.blue["500"]
        }
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
