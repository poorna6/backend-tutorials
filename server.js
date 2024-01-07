const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5001 || 5002;

app.listen(PORT, () => {
  console.log(`    🟢 Server started successfully`);
  console.log(`    🟢 Server is running on port ${PORT}`);
});
