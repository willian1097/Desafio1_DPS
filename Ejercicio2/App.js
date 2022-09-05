import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Fila from './components/Fila';
import planetas from './datos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header titulo="Planetas y estrellas"></Header>
      <FlatList
        style= {styles.lista}
        data = {planetas}
        renderItem = {Fila}
        keyExtractor = {item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lista: {
    padding: 10,
    backgroundColor: '#BBDEFB',
  }
});

export default App;
