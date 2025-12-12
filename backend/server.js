import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Exemple : récupérer des données supabase
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) return res.status(500).json(error);
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
