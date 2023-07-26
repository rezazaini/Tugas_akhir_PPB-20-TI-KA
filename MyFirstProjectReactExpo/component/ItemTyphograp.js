import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ItemTyphograp = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    backgrounfColor: "brown",
                    color:"#fff",
                    tectAlign:"center",
                    textDecorationLine: "underline",
                    padding:10,
                    marginBottom:10
                }}
            >Hostory of Bicycle</Text>
            <Text style={styles.paragrapf}>
                A Bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or 
                motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached
                to a frame, one behind the other, A bicycle rider is called a cyclist, 
                or bicyclist.
            </Text>
        </View>
    );
};

export { ItemTyphograp };