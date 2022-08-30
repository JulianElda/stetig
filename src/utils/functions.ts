export const formatTime = function (ms: number): string {
  const totalSeconds: number = ms / 1000;
  const minutes: number = Math.floor(totalSeconds / 60);
  const seconds: number = totalSeconds % 60;

  const padNumber = function (amount: number): string {
    return amount >= 10 ? "" + amount : "0" + amount;
  };

  return padNumber(minutes) + ":" + padNumber(seconds);
};
