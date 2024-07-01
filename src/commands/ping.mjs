import { Command } from '@sapphire/framework';

export class EchoCommand extends Command {
    constructor(context, options) {
        super(context, {
          ...options,
          name: 'ping',
          aliases: ['repeat'],
          description: 'repeat x times the message you send'
        });
      }

  async messageRun(message, args) {
    const text1 = await args.pick('string');
    const iteration = await args.pick('integer');
    await message.delete();
    for (let i = 0; i < iteration; i++)
    await message.channel.send(`${text1}`);
    }
  }