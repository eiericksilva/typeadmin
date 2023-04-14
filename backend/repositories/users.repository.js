export const getUser = (email) => {
  const users = [
    {
      email: "x@x.com",
      senha: "123",
      role: "admin",
    },
    {
      email: "y@y.com",
      senha: "123",
      role: "customer",
    },
  ];

  return users.find((user) => user.email === email);
};
