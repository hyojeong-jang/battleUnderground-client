const ENV = {
  dev: {
    GEO_API_KEY: 'AIzaSyDwOqhOoeiEBJmRKZ5DjXVo_s7mmIDmS0U',
    SEOUL_DATA_API: 'http://swopenAPI.seoul.go.kr/api/subway/774b7a4e6f63687337396b684e6872/json/nearBy/0/5/'
  },
  staging: {
    GEO_API_KEY: 'AIzaSyDwOqhOoeiEBJmRKZ5DjXVo_s7mmIDmS0U',
    SEOUL_DATA_API: 'http://swopenAPI.seoul.go.kr/api/subway/774b7a4e6f63687337396b684e6872/json/nearBy/0/5/'
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
