import { WaitTxBroadcastResult } from "@terra-money/feather.js";
import { Env } from "@terra-money/terrain";

export class Lib {
  env: Env;

  constructor(env: Env){
    this.env = env;
  }

  getCount = (env = this.env) => {
    return env.client.query("{{project-name}}", { get_count: {} })
  }

  increment = (env = this.env) : Promise<WaitTxBroadcastResult> => {
    return env.client.execute( env.wallets.validator, "{{project-name}}", { increment: {} })
  }
  
  reset = (env = this.env, count: number ) : Promise<WaitTxBroadcastResult> => {
    return env.client.execute(env.wallets.validator, "{{project-name}}", { reset: { count } })
  }
};

export default Lib;