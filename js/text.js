const isVerified = "";

// if (isVerified === true) {
//   console.log("user is verified");
// } else {
//   console.log("user is not verified");
// }

// console.log(
//   `${isVerified === true ? "user is verified" : "user is not verified"}`
// );

function getTimes(time) {
  // day
  const day = parseInt(time / 86400);
  // get hour anf rest second
  const hour = parseInt(time / 3600);
  //   get seconds
  let remainingSec = time % 3600;
  //   get minutes
  const minute = parseInt(remainingSec / 60);
  //   get seconds
  remainingSec = remainingSec % 60;
  return `${day} days ${hour} hour ${minute} minutes ${remainingSec} seconds ago`;
}

const result = getTimes(723641);
console.log(result);
