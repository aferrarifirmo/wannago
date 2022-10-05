const dayjs = require('dayjs');

export const dateFormatter = (date: number) => {
  const toFormat = dayjs(date);
  const dateTime = {
    day: toFormat.format('DD'),
    month: toFormat.format('MMMM'),
    year: toFormat.format('YYYY'),
    time: toFormat.format('hh:mmA'),
    wannaGoFormat: toFormat.format('MMMM DD, YYYY'),
  };
  return dateTime;
};

export const getEngagementOfWannaGo = (wannaGo:
  {rejectCounter: number,
    goingCounter: number,
    suggestionBoxCounter: number,
    openedTimes: number
  }) => {
  return (
    Math.floor(
      (wannaGo.rejectCounter +
        wannaGo.goingCounter +
        wannaGo.suggestionBoxCounter) /
        wannaGo.openedTimes
    ) * 100 || 0
  );
};

export const getSuccessRatioOfWannaGo = (wannaGo: {goingCounter: number, openedTimes: number}) => {
  return wannaGo.goingCounter / wannaGo.openedTimes * 100 || 0;
};

// export const aggregateSuccessRatio = (wannaGosOfUser: []) => {
//   return wannaGosOfUser.reduce((acc, wannaGo) => {
//     return acc + getSuccessRatioOfWannaGo(wannaGo);
//   }, 0);
// };

export const aggregateEngagement = (wannaGosOfUser: []) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    console.log('acc ', acc)
    return acc + (getEngagementOfWannaGo(wannaGo));
  }, 0);
};

export const aggregateRejections = (wannaGosOfUser: []) => {
  return wannaGosOfUser.reduce((acc, wannaGo: {rejectCounter: number}) => {
    return acc + wannaGo.rejectCounter;
  }, 0);
};

export const aggregateSuggestions = (wannaGosOfUser: []) => {
  return wannaGosOfUser.reduce((acc, wannaGo: {suggestionBoxCounter: number}) => {
    return acc + wannaGo.suggestionBoxCounter;
  }, 0);
};

export const aggregatePplGoing = (wannaGosOfUser: []) => {
  return wannaGosOfUser.reduce((acc, wannaGo: {goingCounter: number}) => {
    return acc + wannaGo.goingCounter;
  }, 0);
};

export const aggregateOpenedTimes = (wannaGosOfUser: []) => {
  return wannaGosOfUser.reduce((acc, wannaGo: {openedTimes: number}) => {
    return acc + wannaGo.openedTimes;
  }, 0);
};

export const getTotalWannaGosCreated = (wannaGosOfUser: number) => {
  return wannaGosOfUser + 1;
};

//Needs testing
export const getActiveWannaGos = (wannaGosOfUser: []) => {
  return wannaGosOfUser.filter(
    (wannaGo: {when: number}) => {
      const wannaGoWhen = Number(new Date(wannaGo.when));
      const now = Date.now();
      return wannaGoWhen > now;
    }
    // (wannaGo) => new Date(wannaGo.when) > Date.now() // this was the only line inside the filter()
  );
};
export const getOlderWannaGos = (wannaGosOfUser: []) => {
  return wannaGosOfUser.filter(
    (wannaGo: {when: number}) => {
      const wannaGoWhen = Number(new Date(wannaGo.when));
      const now = Date.now();
      return wannaGoWhen < now
    });
};
export const getNumOfActiveWannaGos = (wannaGosOfUser: []) => {
  return getActiveWannaGos(wannaGosOfUser).length + 1;
};
export const getNumOfOlderWannaGos = (wannaGosOfUser: []) => {
  return getOlderWannaGos(wannaGosOfUser).length + 1;
};
