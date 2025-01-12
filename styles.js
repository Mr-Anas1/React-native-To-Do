import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  inputBox: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    fontSize: 18,
    width: 300,
    height: 50,
  },

  button: {
    width: 70,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 4,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
  },

  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },

  taskContainer: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
  },

  task: {
    fontSize: 18,
  },

  completedItem: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

export default styles;
