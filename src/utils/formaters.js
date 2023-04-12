export const formateUTCDate = (date) => {
  const YYYYMMDD = date.split("T")[0]
  const time = date.split("T")[1].split(":")
  const hours = time[0]
  const minutes = time[1]
  return {
    date: YYYYMMDD,
    time: `${hours}:${minutes}`,
  }
}
