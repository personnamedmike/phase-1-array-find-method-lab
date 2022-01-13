// code your solution here

function superbowlWin(arr) {
  const results = arr.find((el) => el.result === "W");
  console.log(results);
  if (results) {
    return results.year;
  }
}
