import { Text, View, ImageBackground, StyleSheet} from "react-native";

const images = [
  require("../assets/welcome-artist.jpg"),
  require("../assets/welcome-athlete.jpg"),
  require("../assets/welcome-businessman.jpg"),
];

export default function Index() {
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={getRandomImage()}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Welcome to InfyNews</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Metropolis-Regular'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});