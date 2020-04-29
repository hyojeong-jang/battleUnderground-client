const ENV = {
  dev: {
    GEO_API_KEY: 'AIzaSyDwOqhOoeiEBJmRKZ5DjXVo_s7mmIDmS0U',
    SEOUL_DATA_API: 'http://swopenAPI.seoul.go.kr/api/subway/774b7a4e6f63687337396b684e6872/json/nearBy/0/5/',
    SEOUL_DATA_REAL_TIME_API:'http://swopenAPI.seoul.go.kr/api/subway/6d7770716b636873313131586a576a54/json/realtimeStationArrival/0/5/',
    HOST_URL: 'http://192.168.0.37:4000'
  },
  staging: {
    GEO_API_KEY: 'AIzaSyDwOqhOoeiEBJmRKZ5DjXVo_s7mmIDmS0U',
    SEOUL_DATA_API: 'http://swopenAPI.seoul.go.kr/api/subway/774b7a4e6f63687337396b684e6872/json/nearBy/0/5/',
    SEOUL_DATA_REAL_TIME_API:'http://swopenAPI.seoul.go.kr/api/subway/6d7770716b636873313131586a576a54/json/realtimeStationArrival/0/5/',
    HOST_URL: 'http://192.168.0.37:4000'
  },
};

const getEnvVars = () => {
  if (__DEV__) {
    return ENV.dev;
  } else {
    return ENV.staging;
  }
};

export default getEnvVars;
