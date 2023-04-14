import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

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

export const app = express();
app.use(express.json());
app.use(cors());

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, key);
    next();
  } catch (e) {
    return res.status(401).json({ error: "Not authorized" });
  }
};

export const key = process.env.JWT_TOKEN;

app.get("/users", isAuthenticated, (req, res) => {
  return res.status(200).json([
    {
      email: "e@e.com",
    },
  ]);
});

app.post("/auth", (req, res) => {
  const { email, senha } = req.body;

  console.log(senha);

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
        key,
        {
          expiresIn: "24h",
        }
      ),
    });
  }
  return res.status(404).json({
    error: "dados conferem",
  });
});
