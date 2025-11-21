import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import TrendyCollections from '../Trendy/TrendyCollection';
import HotProducts from '../../Shop/Hot/HotProducts';
import DealsOfMonth from '../../Shop/Delas/DealsOfMonth';
import ServiceHighlights from '../../Shop/ServiceHighlights/ServiceHighlights';
import BlogSection from '../../BlogSection/BlogSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <TrendyCollections></TrendyCollections>
            <HotProducts></HotProducts>
            <DealsOfMonth></DealsOfMonth>
            <ServiceHighlights></ServiceHighlights>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;