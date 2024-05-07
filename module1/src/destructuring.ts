{
  // object destructuring
  const user = {
    id: 1235456,
    name: {
      firstName: "joy",
      middleName: "dip",
      lastName: "banik",
    },
    contactNo: 13216461564,
    address: "Mayapur",
  };

  const {
    contactNo: phoneNo,
    name: { firstName },
  } = user;

  // array destructuring
  const friend = ["ab", "adqwer", "dgfs", "new"];
  const [, , s, ...rest] = friend;
  console.log(friend);
}
