export const useRecord = () => {
  const getRecord = () => {
    let localStorageRecord = localStorage.getItem("best-record");
    return localStorageRecord ? localStorageRecord : 0;
  };

  const saveRecord = (attempts) => {
    let record = getRecord();

    if (!record || attempts < parseInt(record)) {
      localStorage.setItem("best-record", attempts);
    }
  };

  return {
    getRecord,
    saveRecord,
  };
};
