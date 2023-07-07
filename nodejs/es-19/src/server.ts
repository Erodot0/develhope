import "dotenv/config";
import app from "./app";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`The server is actually running in http://localhost:${port}`)
})

//npm run build