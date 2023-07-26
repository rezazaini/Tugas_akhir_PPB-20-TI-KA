import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function HikTiga() {
  const handleWhatsAppButtonPress = () => {
    Linking.openURL('https://wa.me/+6289650084330'); // Ganti dengan URL WhatsApp yang diinginkan
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Package 16 Channel</Text>
      <Image source={require('../component/hik/product.jpg')} style={styles.image} />
      <Text style={styles.paragraph}>
        Tujuh kamera Indoor dengan berbagai Spesifikasi dan berbagai pilihan.
      </Text>
      <Image source={require('../component/hik/product1.jpg')} style={styles.image} />
      <Text style={styles.paragraph}>
        Lima Unit kamera Outdoor dengan berbagai Spesifikasi.
      </Text>
      <Image source={require('../component/hik/product2.jpg')} style={styles.image} />
      <Text style={styles.paragraph}>
        Empat unit kamera DOM dengan berbagai keunggulan dan pilihan.
      </Text>
      <Image source={require('../component/hik/produc3.jpg')} style={styles.image} />
      <Text style={styles.paragraph}>
        Satu Unit DVR (Digital Video Recording) yang memiliki 16 Channel 
      </Text>

      <Text style={styles.paragraph}>
        Untuk Konsultasi dan Pemesanan Anda bisa klik Tautan dibawah untuk info lebih lanjut 
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleWhatsAppButtonPress}>
        <Image source={require('../gambar/wa2.png')} style={styles.whatsappLogo} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 16,
    borderRadius: 100,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 8,
  },
  whatsappLogo: {
    width: 60,
    height: 60,
  },
});
