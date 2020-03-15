import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelpApi from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchApi = useCallback(async () => {
        try {
            const response = await yelpApi.get('/search', {
                params: {
                    limit: 50,
                    location: 'san jose',
                    term
                }
            });

            setSearchResults(response.data.businesses);
        } catch (error) {
            debugger;
            console.log("searchApi -> error", error);
        }
    }, [term, setSearchResults]);

    return (
        <View>
            <SearchBar
                searchTerm={term}
                onSearchTermChange={setTerm}
                onSearchTermSubmit={searchTerm => searchApi(searchTerm)}
            />
            <Text>
                Search Screen
            </Text>
            <Text>
                {`we have found ${searchResults.length} results`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

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