import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, searchResults, errorMessage] = useResults();

    return (
        <View>
            <SearchBar
                searchTerm={term}
                onSearchTermChange={setTerm}
                onSearchTermSubmit={searchApi}
            />
            {errorMessage? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 30,
        color: 'red',
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