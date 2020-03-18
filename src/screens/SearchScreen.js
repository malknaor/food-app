import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, searchResults, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        // price => $ || $$ || $$$ || $$$$
        return searchResults.filter(result => result.price === price);
    };

    return (
        <>
            <SearchBar
                searchTerm={term}
                onSearchTermChange={setTerm}
                onSearchTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
                <ResultsList
                    title="I'm Rich"
                    results={filterResultsByPrice('$$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 30,
        color: 'red',
    },
    resultsCounter: {
        marginLeft: 15,
        marginBottom: 5,
    }
});

export default SearchScreen;

/*
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RestaurantList = () => {

    return (
        <View>
            <Text>
                Search
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default RestaurantList;
*/