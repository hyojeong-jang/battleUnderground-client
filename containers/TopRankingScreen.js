import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import TopRanking from '../components/TopRanking';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default TopRankingScreen = ({ navigation }) => {
  const rankingList = useSelector(state => state.socket.topRanking);

  const onBackButtonPress = useCallback(() => {
    navigation.navigate('GameResult');
  });

  const [fontsLoaded] = useFonts({
    'silkscreen': require('../assets/fonts/silkscreen.ttf'),
    'dunggeunmo': require('../assets/fonts/DungGeunMo.ttf')
  });

  if (fontsLoaded) {
    return (
      <TopRanking
        rankingList={rankingList}
        onBackButtonPress={onBackButtonPress}
      />
    )
  } else {
    return <AppLoading />
  }
}

