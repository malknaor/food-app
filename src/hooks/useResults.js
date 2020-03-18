import { useState, useEffect } from 'react';

import yelpApi from '../api/yelp';

const useResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelpApi.get('/search', {
                params: {
                    limit: 50,
                    location: 'san jose',
                    term: searchTerm
                }
            });

            setSearchResults(response.data.businesses);
        } catch (error) {
            setErrorMessage(error.toString());
        }
    };

    // Initial Search 
    useEffect(() => {
        searchApi('Pizza');
    }, []);

    return [
        searchApi,
        searchResults,
        errorMessage
    ];
};

export default useResults;