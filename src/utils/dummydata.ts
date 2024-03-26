interface Summary {
  bearish: number;
  bullish: number;
  neutral: number;
  EMA20: number;
  SMA20: number;
  RSI14: number;
  AwesomeOsc: number;
  Macd12269: number;
  CCI20: number;
}

interface SupportResistance {
  S1: number;
  S2: number;
  S3: number;
  R1: number;
  R2: number;
  R3: number;
  bullish: number;
}

interface MovingAverages {
  EMA5: number;
  SMA5: number;
  EMA10: number;
  bearish: number;
  bullish: number;
  neutral: number;
}

interface Oscillators {
  RSI14: number;
  StochK143_3: number;
  CCI20: number;
  bearish: number;
  bullish: number;
  neutral: number;
}

interface TimeFrameData {
  summary: Summary;
  supportResistance: SupportResistance;
  movingAverages: MovingAverages;
  oscillators: Oscillators;
}

export const dummyData: { [key: string]: TimeFrameData } = {
  "5min": {
    summary: {
      bearish: 7,
      bullish: 10,
      neutral: 11,
      EMA20: 22022.99,
      SMA20: 2000,
      RSI14: 46.94,
      AwesomeOsc: -28.74,
      Macd12269: -10.47,
      CCI20: -18.83,
    },
    supportResistance: {
      S1: 21915.83,
      S2: 21750.87,
      S3: 21453.47,
      R1: 22213.23,
      R2: 22345.67,
      R3: 22643.07,
      bullish: 10,
    },
    movingAverages: {
      EMA5: 22010.21,
      SMA5: 22008.87,
      EMA10: 22011.69,
      bearish: 7,
      bullish: 10,
      neutral: 11,
    },
    oscillators: {
      RSI14: 46.94,
      StochK143_3: 44.51,
      CCI20: -18.83,
      bearish: 2,
      bullish: 8,
      neutral: 0,
    },
  },
  "10min": {
    summary: {
      bearish: 2,
      bullish: 15,
      neutral: 9,
      EMA20: 22020.55,
      SMA20: 2000,
      RSI14: 48.27,
      AwesomeOsc: -25.39,
      Macd12269: -8.62,
      CCI20: -16.94,
    },
    supportResistance: {
      S1: 21910.45,
      S2: 21745.23,
      S3: 21448.76,
      R1: 22219.79,
      R2: 22352.04,
      R3: 22649.85,
      bullish: 4,
    },
    movingAverages: {
      EMA5: 22007.89,
      SMA5: 22006.12,
      EMA10: 22009.23,
      bearish: 2,
      bullish: 8,
      neutral: 0,
    },
    oscillators: {
      RSI14: 48.27,
      StochK143_3: 46.82,
      CCI20: -16.94,
      bearish: 4,
      bullish: 6,
      neutral: 7,
    },
  },
  "15min": {
    summary: {
      bearish: 5,
      bullish: 12,
      neutral: 7,
      EMA20: 22018.22,
      SMA20: 2050,
      RSI14: 50.11,
      AwesomeOsc: -22.64,
      Macd12269: -6.93,
      CCI20: -14.57,
    },
    supportResistance: {
      S1: 21905.67,
      S2: 21740.45,
      S3: 21443.98,
      R1: 22225.57,
      R2: 22357.82,
      R3: 22655.63,
      bullish: 12,
    },
    movingAverages: {
      EMA5: 22005.01,
      SMA5: 22003.24,
      EMA10: 22006.35,
      bearish: 5,
      bullish: 12,
      neutral: 7,
    },
    oscillators: {
      RSI14: 50.11,
      StochK143_3: 48.65,
      CCI20: -14.57,
      bearish: 3,
      bullish: 9,
      neutral: 4,
    },
  },
  "30min": {
    summary: {
      bearish: 8,
      bullish: 9,
      neutral: 5,
      EMA20: 22015.88,
      SMA20: 2100,
      RSI14: 52.24,
      AwesomeOsc: -19.82,
      Macd12269: -5.17,
      CCI20: -12.41,
    },
    supportResistance: {
      S1: 21900.89,
      S2: 21735.67,
      S3: 21439.2,
      R1: 22231.35,
      R2: 22363.6,
      R3: 22661.41,
      bullish: 9,
    },
    movingAverages: {
      EMA5: 22002.13,
      SMA5: 22000.36,
      EMA10: 22003.47,
      bearish: 8,
      bullish: 9,
      neutral: 5,
    },
    oscillators: {
      RSI14: 52.24,
      StochK143_3: 50.48,
      CCI20: -12.41,
      bearish: 6,
      bullish: 7,
      neutral: 2,
    },
  },
  hour: {
    summary: {
      bearish: 11,
      bullish: 6,
      neutral: 3,
      EMA20: 22013.54,
      SMA20: 2150,
      RSI14: 54.37,
      AwesomeOsc: -17.0,
      Macd12269: -3.41,
      CCI20: -10.25,
    },
    supportResistance: {
      S1: 21896.11,
      S2: 21730.89,
      S3: 21434.42,
      R1: 22237.13,
      R2: 22369.38,
      R3: 22667.19,
      bullish: 7,
    },
    movingAverages: {
      EMA5: 21999.25,
      SMA5: 21997.48,
      EMA10: 22000.59,
      bearish: 11,
      bullish: 6,
      neutral: 3,
    },
    oscillators: {
      RSI14: 54.37,
      StochK143_3: 52.31,
      CCI20: -10.25,
      bearish: 9,
      bullish: 4,
      neutral: 1,
    },
  },
  day: {
    summary: {
      bearish: 14,
      bullish: 3,
      neutral: 1,
      EMA20: 22011.2,
      SMA20: 2200,
      RSI14: 56.5,
      AwesomeOsc: -14.18,
      Macd12269: -1.65,
      CCI20: -8.09,
    },
    supportResistance: {
      S1: 21891.33,
      S2: 21726.11,
      S3: 21429.64,
      R1: 22242.91,
      R2: 22375.16,
      R3: 22672.97,
      bullish: 6,
    },
    movingAverages: {
      EMA5: 21996.37,
      SMA5: 21994.6,
      EMA10: 21997.71,
      bearish: 14,
      bullish: 3,
      neutral: 1,
    },
    oscillators: {
      RSI14: 56.5,
      StochK143_3: 54.14,
      CCI20: -8.09,
      bearish: 12,
      bullish: 1,
      neutral: 0,
    },
  },
};
