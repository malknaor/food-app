import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.score}>{`${result.rating} Stars, ${result.review_count} Reviewrs`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginLeft: 15,
    },
    image: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',

    },
    score: {
        fontSize: 13,
        color: 'gray',
    },
});

export default ResultDetail;