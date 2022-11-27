import { React } from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({bg,text,hexCode}) => {
    const dynamicStyle = {
        boxStyle :{
           backgroundColor:bg
       },
    //    textColor:{
    //         color:
    //           parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
    //             ? 'black'
    //             : 'white',
    //    }

    }
    return (
        <View style={[styles.box,dynamicStyle.boxStyle]}>
            <Text style={[styles.text]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 8,
        marginBottom: 14,
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.1,
        textAlign: "center",
    },
});

export default ColorBox