import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';

import yelpApi from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        try {
            
            await yelpApi.get(`/${id}`)
                .then(res => setResult(res.data));
        } catch (error) {
            console.log("ResultsShowScreen -> error", error);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) return <Text>Loading...</Text>;
    
    return (
        <View style={styles.view}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                styles={styles.list}
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    );
                }}
            >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
    },
    name: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    list: {
        justifyContent: 'space-between',
    },
    image: {
        alignSelf: 'center',
        marginTop: 15,
        width: 300,
        height: 200,
        borderRadius: 4,
    },
});

export default ResultsShowScreen;