import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const router = useRouter();

  const handleGoToPerfil = () => {
    router.push({
      pathname: "/perfil",
      params: { name, avatar },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Mini Perfil</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>URL do Avatar</Text>
      <TextInput
        style={styles.input}
        placeholder="https://..."
        value={avatar}
        onChangeText={setAvatar}
        autoCapitalize="none"
      />

      <View style={styles.button}>
        <Button
          title="Ver Perfil"
          onPress={handleGoToPerfil}
          disabled={!name.trim()}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
  },
});
