import jwt from "jsonwebtoken";

const getUser = (email) => {
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

export const authenticate = (req, res) => {
  const { email, senha } = req.body;

  const user = getUser(email);

  if (senha === user.senha) {
    if (user.role !== "admin") {
      return res.status(403).send({
        error: "User not authorized",
      });
    }

    return res.status(200).json({
      token: jwt.sign(
        {
          email,
          role: "admin",
        },
        process.env.JWT_TOKEN,
        {
          expiresIn: "24h",
        }
      ),
    });
  }

  return res.status(401).json({
    error: "Authentication data error",
  });
};
