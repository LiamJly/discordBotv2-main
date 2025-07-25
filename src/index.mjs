import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

const token = process.env.DISCORD_TOKEN
const client = new SapphireClient({
  intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  loadMessageCommandListeners: true
});

client.login(token);
