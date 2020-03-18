import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => {
    
    return (
        <View style={styles.view}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => <ResultDetail result={item} />}
            >
            </FlatList>
        </View >
    );
};

const styles = StyleSheet.create({
    view: {
        marginBottom: 10,
    },
    title: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList;
