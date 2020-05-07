import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default TopRanking = ({ rankingList, onBackButtonPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Ranking 10</Text>
      <View style={styles.inner}>
      <View>
        { rankingList.slice(0, 3).map((user, idx) => {
          return <View>
            {
              idx === 0
              && <View style={styles.top1}>
                <Image style={styles.image1} source={require('../assets/images/1st.jpg')} />
                <Text style={styles.firstText}>
                  {`${user.station.split(' ')[0]}역 \n${user.nickname}`}
                </Text>
                <Text style={styles.firstText}>
                  {user.game_score}
                </Text>
              </View>
            }
            {
              idx === 1
              && <View style={styles.top2}>
                <Image style={styles.image2} source={require('../assets/images/2nd.jpg')} />
                <Text style={styles.secondText}>
                  {`${user.station.split(' ')[0]}역 ${user.nickname}`}
                </Text>
                <Text style={styles.secondText}>
                  {user.game_score}
                </Text>
              </View>
            }
            {
              idx === 2
              && <View style={styles.top3}>
                <Image style={styles.image3} source={require('../assets/images/3rd.jpg')} />
                <Text style={styles.thirdText}>
                  {`${user.station.split(' ')[0]}역 ${user.nickname}`}
                </Text>
                <Text style={styles.thirdText}>
                  {user.game_score}
                </Text>
              </View>
            }
          </View>
        })}
      </View>
      { rankingList.slice(3, 10).map((user, idx) => {
        return <View key={idx} style={styles.user}>
          <Text style={styles.rank}>
            {`${idx + 4}th`}
          </Text>
          <Text style={styles.rank}>
            {`${user.station.split(' ')[0]}역  ${user.nickname}`}
          </Text>
          <Text style={styles.rank}>
            {user.game_score}
          </Text>
        </View>
      })}
      </View>
      <TouchableOpacity
        onPress={onBackButtonPress}
      >
        <Text style={styles.button}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inner: {
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    padding: '5%'
  },
  title: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'black',
    fontFamily: 'silkscreen',
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20
  },
  user:{
    flexDirection: 'row',
    marginBottom: '3%',
    justifyContent: 'space-between',
    height: 30,
  },
  rank: {
    fontFamily: 'dunggeunmo',
    fontSize: 15
  },
  button: {
    fontFamily: 'silkscreen',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  image1: {
    width: 80,
    height: 60
  },
  image2: {
    width: 50,
    height: 40
  },
  image3: {
    width: 25,
    height: 25
  },
  top1: {
    flexDirection: 'row',
    marginBottom: '3%',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 10,
    marginBottom: 20
  },
  top2: {
    flexDirection: 'row',
    marginBottom: '3%',
    justifyContent: 'space-between',
    height: 40,
    marginBottom: 20
  },
  top3: {
    flexDirection: 'row',
    marginBottom: '3%',
    justifyContent: 'space-between',
    height: 25,
    marginBottom: 20
  },
  firstText: {
    fontFamily: 'dunggeunmo',
    fontSize: 20
  },
  secondText: {
    fontFamily: 'dunggeunmo',
    fontSize: 18
  },
  thirdText: {
    fontFamily: 'dunggeunmo',
    fontSize: 16
  }
});
