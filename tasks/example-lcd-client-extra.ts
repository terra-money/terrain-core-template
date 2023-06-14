import { Env, task } from "@terra-money/terrain";

task(async (env: Env) => {
  const { client, wallets } = env;
  
  // query is a thin wrapper of contract query
  const count = await client.query("{{project-name}}", { get_count: {} });
  console.log("prev count = ", count);

  // execute is a thin wrapper of signing and broadcasting execute contract
  await client.execute("{{project-name}}", wallets.validator, {
    increment: {},
  });
  const count2 = await client.query("{{project-name}}", { get_count: {} });
  console.log("new count = ", count2);
});
