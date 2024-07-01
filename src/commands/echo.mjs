import { Command } from '@sapphire/framework';

export class EchoCommand extends Command {
    constructor(context, options) {
        super(context, {
          ...options,
          name: 'say',
          aliases: ['parrot', 'copy'],
          description: 'Replies with the text you provide'
        });
      }

  async messageRun(message, args) {
    const text = await args.rest('string');
    await message.channel.send(text);
  }
}