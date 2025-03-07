
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { chefAgent } from './agents/chefAgent';

// export const weatherMastra = new Mastra({
//   workflows: { weatherWorkflow },
//   agents: { weatherAgent },
//   logger: createLogger({
//     name: 'Mastra',
//     level: 'info',
//   }),
// });

export const mastra = new Mastra({

  agents: { chefAgent },
});
