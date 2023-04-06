import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const credentials = {
  email: "e@e.com",
  senha: "123",
};

const key = "qwertyuiopasdfghjklç789456";

app.post("/auth", (req, res) => {
  const { email, senha } = req.body;

  if (email === credentials.email && senha === credentials.senha) {
    return res.status(200).json({
      token: jwt.sign(
        {
          email,
          role: "admin",
        },
        key
      ),
    });
  }
  return res.status(404).json({
    error: "dados conferem",
  });
});

app.listen(3000, () => console.log("Running on port 3000!"));
