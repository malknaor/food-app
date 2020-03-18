import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity  } from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.view}>
            {results.length > 0 && <Text style={styles.title}>{title}</Text>}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
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

export default withNavigation(ResultsList);
