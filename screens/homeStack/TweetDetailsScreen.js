import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';

import TweetContent from '../../components/TweetContent';

const TweetDetailScreen = () => {
  const {
    params: { tweet },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: tweet.author.name,
    });
  }, []);

  return (
    <View testID='TweetDetailScreen' style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
