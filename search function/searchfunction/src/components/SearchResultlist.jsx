import React from 'react'

import "./SearchResultlist.css"
import { SearchResult } from './SearchResult';

export const SearchResultlist = ({results}) => {

    return <div className='results-list'>
        {
        results.map((results, id) => {
            return <SearchResult/>
        })
    }
    </div>;
  
};
