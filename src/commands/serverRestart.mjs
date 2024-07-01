import { Command } from '@sapphire/framework';


export class ShutdownCommand extends Command {
    constructor(context, options) {
        super(context, {
          ...options,
          name: 'shutdown',
          aliases: ['serverstop'],
          description: 'shutdowns palworld server'
        });
      }

      async messageRun(message, args){
        const secondsBeforeStop = await args.pick('integer');
        const announceMessage = `Le serveur s'arrêtera dans ${secondsBeforeStop} secondes.`

      let shutdownData = JSON.stringify({
        "waittime": secondsBeforeStop,
        "message": announceMessage        
      });

      let request = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46MTIzNDU2'
        },
        body: shutdownData
      };

      try{
        const response = await fetch(`http://localhost:8212/v1/api/shutdown`, request);

        if (!response.ok) {
            throw new Error(`HTTP ERROR ! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(JSON.stringify(responseData));
      } catch(error) {
        console.error('ERROR:', error);
      }
      await message.channel.send(`requête de shutdown envoyée, vérifier logs.`);
    }
}