import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        // add styles for the item container
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        // add styles for the left section
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity:0.4,
        borderRadius: 12,
        marginRight: 15,
    },
    itemText: {
        // add styles for the text
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: '#55bcf6',
    },
});

export default Task;
