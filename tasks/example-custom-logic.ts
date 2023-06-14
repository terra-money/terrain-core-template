import { Env, task } from "@terra-money/terrain";
import { MnemonicKey } from "@terra-money/feather.js"

task(async (_env: Env) => {
  console.log("creating new key");
  const key = new MnemonicKey();
  console.log("private key", key.privateKey.toString("base64"));
  console.log("mnemonic", key.mnemonic);
});
