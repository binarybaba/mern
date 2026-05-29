import { app } from "./app";
import { connectDB } from "./db";

connectDB().then(() => {
  app.listen(process.env.PORT ?? 8000, () => {
    console.log(`Moseying on ${process.env.PORT}`);
  })
}).catch(() => {
  console.log('MongoDB connection failed')
});