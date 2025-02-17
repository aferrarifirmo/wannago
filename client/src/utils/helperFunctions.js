//External dependencies
const dayjs = require('dayjs');

export const dateFormatter = (date) => {
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

export const getEngagementOfWannaGo = (wannaGo) => {
  return (
    Math.floor(
      (wannaGo.rejectCounter +
        wannaGo.goingCounter +
        wannaGo.suggestionBoxCounter) /
        wannaGo.openedTimes
    ) || 0
  );
};

export const getSuccessRatioOfWannaGo = (wannaGo) => {
  return wannaGo.goingCounter / wannaGo.openedTimes * 100|| 0;
};

export const aggregateSuccessRatio = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + getSuccessRatioOfWannaGo(wannaGo);
  }, 0);
};

export const aggregateEngagement = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + (getEngagementOfWannaGo(wannaGo) * 100);
  }, 0);
};

export const aggregateRejections = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.rejectCounter;
  }, 0);
};

export const aggregateSuggestions = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.suggestionBoxCounter;
  }, 0);
};

export const aggregatePplGoing = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.goingCounter;
  }, 0);
};

export const aggregateOpenedTimes = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.openedTimes;
  }, 0);
};

export const getTotalWannaGosCreated = (wannaGosOfUser) => {
  return wannaGosOfUser + 1;
};

//Needs testing
export const getActiveWannaGos = (wannaGosOfUser) => {
  return wannaGosOfUser.filter(
    (wannaGo) => new Date(wannaGo.when) > Date.now()
  );
};
export const getOlderWannaGos = (wannaGosOfUser) => {
  return wannaGosOfUser.filter(
    (wannaGo) => new Date(wannaGo.when) < Date.now()
  );
};
export const getNumOfActiveWannaGos = (wannaGosOfUser) => {
  return getActiveWannaGos(wannaGosOfUser).length + 1;
};
export const getNumOfOlderWannaGos = (wannaGosOfUser) => {
  return getOlderWannaGos(wannaGosOfUser).length + 1;
};

