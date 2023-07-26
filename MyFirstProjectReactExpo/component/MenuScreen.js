import React, { useRef, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

const products = [
  {
    id: 1,
    name: 'Package Produk Hikvision',
    image: require('../gambar/hikpack.jpg'),
    
    route: 'ProductSatu', 
  },
  {
    id: 2,
    name: 'Package Produk Hilook',
    image: require('../gambar/hilpack.jpg'),
    price: 20,
    route: 'ProductDua', 
  },
  {
    id: 3,
    name: 'Package Produk Dahua',
    image: require('../gambar/dahpack.jpg'),
    price: 20,
    route: 'ProductTiga', 
  },
  {
    id: 4,
    name: 'Package Produk UNV',
    image: require('../gambar/unvpack.jpg'),
    price: 20,
    route: 'ProductEmpat', 
  },
];

export default function MenuScreen() {
  const navigation = useNavigation();
  const carouselRef = useRef(null);

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate(item.route, { product: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      
    </TouchableOpacity>
  );

  const carouselImages = [
    require('../gambar/1.jpeg'),
    require('../gambar/22.jpeg'),
    require('../gambar/3.jpeg'),
  ];

  useEffect(() => {
    // Mengatur gerakan otomatis pada carousel
    carouselRef.current.startAutoplay();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <Image source={require('../gambar/ww.png')} style={styles.menuImage} />
      <Text style={styles.title}>Network & Security System</Text>
      <Carousel
        ref={carouselRef}
        data={carouselImages}
        renderItem={({ item }) => <Image source={item} style={styles.carouselImage} />}
        sliderWidth={8000}
        itemWidth={6000}
        autoplay
        autoplayDelay={100}
        autoplayInterval={2000}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Network & Security System</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1673af',
    paddingBottom: 16,
  },
  menuImage: {
    width: 300,
    height: 150,
    marginBottom: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  productList: {
    justifyContent: 'center',
  },
  productContainer: {
    alignItems: 'center',
    margin: 4,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 3,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },

  carouselImage: {
    width: 485,
    height: 200,
    marginBottom: 16,
    alignSelf: 'center',
  },
});
