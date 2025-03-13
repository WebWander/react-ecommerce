import { connectDB } from "./database";
import { User } from "./models/User";

async function main() {
  const db = await connectDB();
  const usersCollection = db.collection<User>("users");

  // Insert a document
  const newUser: User = { name: "Alice", email: "alice@example.com" };
  const result = await usersCollection.insertOne(newUser);
  console.log("Inserted user with ID:", result.insertedId);

  // Find all users
  const users = await usersCollection.find().toArray();
  console.log("Users:", users);

  // Close the connection
  await db.client.close();
}

main();
