export const getUsers = (req, res) => {
  return res.status(200).json([
    {
      email: "e@e.com",
    },
  ]);
};
