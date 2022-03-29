import { View, Button, TextInput, StyleSheet } from "react-native";
import React from "react";

const Login = () => {
  const handleLogin = () => {};

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor={"white"}
      />
      <Button onPress={handleLogin} title="Login" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {},
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
    backgroundColor: "black",
    color: "white",
  },
});

export default Login;
