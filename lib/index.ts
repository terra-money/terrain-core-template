import { Env } from "@terra-money/terrain";
import { {{client-name}} } from './clients/{{client-name}}'

export class Lib extends {{client-name}} {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['{{project-name}}'].contractAddresses.default)
    this.env = env;
  }
};

export default Lib;
