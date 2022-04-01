import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { NewsContext } from "../API/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authData, setAuthData } = useContext(NewsContext);
  const handleLogin = async (email, password) => {
    // Alert.alert("hello", email, password);
    if (!email || !password) {
      Alert.alert("Please enter email & password");
    } else {
      try {
        await auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            setAuthData(user);
          });
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQY3UwfG60sU5D5_ZkJgBu6BYj_CcD-fjQrAT2FwiXaFjb65PTs",
            height: 100,
            width: 100,
          }}
        />
      </View>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(e) => {
          setEmail(e);
        }}
        placeholder="Enter email"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(e) => {
          setPassword(e);
        }}
        placeholder="Enter password"
        placeholderTextColor={"white"}
      />
      <Pressable
        style={styles.button}
        onPress={() => handleLogin(email, password)}
        color="#841584"
        disabled={!email && !password}
      >
        <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 16,
    marginTop: "auto",
    marginBottom: "auto",
  },
  imageContainer: {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    marginBottom: 16,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
    backgroundColor: "black",
    color: "white",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "black",
  },
});

export default Login;
