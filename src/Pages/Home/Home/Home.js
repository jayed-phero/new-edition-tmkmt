import React from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import NewsUpdate from '../NewsUpdate/NewsUpdate';
import PrincipalSection from '../PrincipleSection/PrincipalSection';
import ShortInfo from '../ShortInfo/ShortInfo';

const Home = () => {
    return (
        <div>
            <HomeScreen/>
            <PrincipalSection/>
            <ShortInfo/>
            <NewsUpdate/>
        </div>
    );
};

export default Home;