import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContenidoFila = ({ titulo, descripcion, img }) => (
  <View style={styles.fila}>
    <View style={styles.contenedorImg}>
      <Image style={styles.img} source={img} />
    </View>
    <View style={styles.textos}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    alignItems: "center"
  },
  textos: {
    padding: 15,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#0D47A1",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    color: "#0D47A1",
  },
  descripcion: {
    textAlign: "justify",
    color: "#0D47A1",
  },
  contenedorImg: {
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 88,
    height: 88,
    borderRadius: 100,
    resizeMode: "center",
    margin: 8,
  },
});

export default ContenidoFila;
