import { EnvVarNotFound } from './errors';

export const getEnv = (varName: string) => {
  const value = process.env[varName];
  if (value) {
    return value;
  } else {
    throw new EnvVarNotFound(`Env var ${varName} not found.`);
  }
};
