import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import config from '../config/config.json' assert { type: 'json' };


const token = config.token
const client = new SapphireClient({
  intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  loadMessageCommandListeners: true
});

client.login(token);
