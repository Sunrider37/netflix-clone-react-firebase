import React from 'react'
import { useContent } from '../hooks'
import selectionMap from '../utils/selection-filter';
import { BrowseContainer } from '../containers/browse';


export default function Browse() {

    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionMap({series, films})
    console.log(slides)


    return <BrowseContainer slides={slides} ></BrowseContainer>

        // we need slides
        // series and films
        // pass to the browse container
    
}















