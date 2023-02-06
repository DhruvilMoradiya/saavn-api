import express from "express";
import router from "../src/routes/router.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api", router);

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
