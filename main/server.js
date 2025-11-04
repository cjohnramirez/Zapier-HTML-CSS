import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const ZAPIER_HOOK_URL = "https://hooks.zapier.com/hooks/catch/25239454/us6c7q6/";

app.post("/submit", async (req, res) => {
  try {
    const zapRes = await fetch(ZAPIER_HOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!zapRes.ok) throw new Error("Zapier error");

    res.json({ ok: true, message: "Lead sent to Zapier!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Failed to forward to Zapier" });
  }
});

app.listen(3000, () => console.log("Proxy running on http://localhost:3000"));
