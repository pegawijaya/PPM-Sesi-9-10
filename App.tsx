import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, ImageBackground, Dimensions } from 'react-native';

// Data makanan lokal
const foodData = [
  {
    id: 1,
    title: 'Kopi Hitam',
    image: 'https://i.pinimg.com/736x/12/fe/3f/12fe3f8fdf90415d0d59c3c45e7e3864.jpg',
  },
  {
    id: 2,
    title: 'Kopi Susu',
    image: 'https://i.pinimg.com/474x/56/22/85/562285dd588d48e5bd55ae7be20e4f52.jpg',
  },
  {
    id: 3,
    title: 'Kopi Jaahe',
    image: 'https://i.pinimg.com/474x/b1/5c/71/b15c71cc745782c8752e355fa730b78a.jpg',
  },
  {
    id: 4,
    title: 'Susu Jahe',
    image: 'https://i.pinimg.com/474x/a4/9d/22/a49d22da025a2ceca654d173f84e5671.jpg',
  },
  {
    id: 5,
    title: 'Susu Murni',
    image: 'https://i.pinimg.com/474x/19/32/40/193240f3e9ebae6e76e55da8f7e68a27.jpg',
  },
];

// Mengambil ukuran layar perangkat
const { width, height } = Dimensions.get('window');

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'URL_GAMBAR_MAKANAN_ABU_ABU' }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>minuman</Text>
        <FlatList
          data={foodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: 20,
  },
  title: {
    fontSize: width * 0.08, // Ukuran font responsif berdasarkan lebar layar
    fontWeight: 'bold',
    color: '#FFA500',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  foodImage: {
    width: width * 0.8, // Gambar responsif sesuai lebar layar
    height: height * 0.25, // Gambar responsif sesuai tinggi layar
    borderRadius: 15,
    resizeMode: 'cover',
  },
  foodName: {
    marginTop: 10,
    fontSize: width * 0.05, // Ukuran font responsif
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default App;