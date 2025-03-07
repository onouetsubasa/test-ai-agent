import { chefAgent } from './mastra/agents/chefAgent';


async function main() {
  const query =
    "In my kitchen I have: pasta, canned tomatoes, garlic, olive oil, and some dried herbs (basil and oregano). What can I make?";
  console.log(`Query: ${query}`);
 
  const response = await chefAgent.generate([{ role: "user", content: query }]);
  console.log("\n👨‍🍳 Chef Michel:", response.text);
}
 
main();