import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';


export default function ProductSatu({ navigation, route }) {
  const { product } = route.params;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      image: require('../gambar/hik1.jpeg'),
      route: 'HikSatu', 
    },
    {
      image: require('../gambar/hik2.jpeg'),
      route: 'HikSatu', // Ganti dengan nama rute halaman detail yang diinginkan
    },
    {
      image: require('../gambar/hik3.jpeg'),
      route: 'HikSatu', // Ganti dengan nama rute halaman detail yang diinginkan
    },
    {
      image: require('../gambar/hik4.jpeg'),
      route: 'HikSatu', // Ganti dengan nama rute halaman detail yang diinginkan
    },
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : carouselImages.length - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex < carouselImages.length - 1 ? prevIndex + 1 : 0);
  };

  const handleCarouselImagePress = (route) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pilih Package Yang Anda Butuhkan</Text>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <View style={styles.carouselContainer}>
        <Button title="Prev" onPress={handlePrevImage} />
        <TouchableOpacity onPress={() => handleCarouselImagePress(carouselImages[currentImageIndex].route)}>
          <Image
            source={carouselImages[currentImageIndex].image}
            style={styles.carouselImage}
          />
        </TouchableOpacity>
        <Button title="Next" onPress={handleNextImage} />
      </View>
      <Text style={styles.paragraph}>
      1.    Ada Pilihan Resolusi Kamera Besar</Text>
      <Text style={styles.paragraph}>
        Kelebihan CCTV Hikvision yang pertama adalah adanya pilihan CCTV dengan kamera beresolusi besar. Kelebihan ini bisa diandalkan oleh pihak-pihak tertentu. Misalnya oleh mereka yang ingin memberikan keamanan ekstra pada benda-benda berharga.
      </Text>
        <Text style={styles.paragraph}>2.    Menawarkan Banyak Pilihan</Text>
        <Text style={styles.paragraph}>
        Pilihan yang ditawarkan oleh Hikvision untuk produk CCTV cukup beragam. Bisa dipilih berdasarkan jumlah kamera dalam satu paketnya, bisa dipilih berdasarkan kapasitas harddisk, dan juga bisa dipilih berdasarkan resolusi kamera yang diberikan. Semakin besar resolusi kamera atau effective pixels maka akan semakin tajam pula video yang didapatkan.
      </Text>
      <Button
        title="Go back to Menu"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  carouselImage: {
    width: 220,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  Bold: {
    fontWeight: 'bold',
  },
});
