const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!" 

Client.on('ready', ()=> {
    console.log("Il bot è online");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return; 

     
   else if(message.content.startsWith(prefix + "compravendita"))
    {
        
        message.channel.send(":euro: **Compravendita:** \n Non è consentita la compravendita/donazione di account o offerte di scalate a pagamento né la richiesta di queste ultime da parte degli utenti.");
        if (message.content === "!compravendita") {
            message.delete()
        }

       
    }

   else if(message.content.startsWith(prefix + "linguaggio")){

        message.channel.send(":face_with_symbols_over_mouth:**Linguaggio:** \n  È vietato bestemmiare e non è ammesso l'uso di parole volgari o offensive.");
        if(message.content === "!linguaggio") {
            message.delete()
        }
    }

   else if(message.content.startsWith(prefix + "privacy")){

          message.channel.send(" :lock: **Privacy:** \n Non è concesso inviare foto, numeri di telefono, screen di conversazioni o contenuti privati di qualsiasi persona (neppure di se stessi perché Telegram è il regno dei fake).");
          if(message.content === "!privacy"){
          message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "offtopic")){

        message.channel.send(":joystick: **Off-topic:** \n Evitare di scrivere messaggi non inerenti al tema principale del gruppo: CLASH ROYALE ©®. L'eccessivo OT porterà al warn dell'utente. Per fare OT puoi andare nel gruppo #:globe_with_meridians:chat-globale:globe_with_meridians:");
        if(message.content === "!offtopic"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "pubblicita")){

        message.channel.send(" :newspaper2: **Pubblicita':** \n E' vietato sponsorizzare altri gruppi Discord, canali YouTube, pagine Facebook e simili o proprie attivita'/hobby che siano per lucro o meno (da grafico, videomaker, ecc.) senza il consenso degli admin. La stessa cosa vale anche per spam più indiretti come “ho un canale/attivita', per maggiori info contattatemi in privato”.  Contattaci nella chat dedicata alle collaborazioni!");
        if(message.content === "!pubblicita"){
                message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "pvt")) {

        message.channel.send(":envelope_with_arrow: **Contattare in privato:** \n Condanniamo i reclutamenti, le pubblicita' di ogni tipo e il disturbare in privato. Chi e' nel nostro gruppo non deve avere rotture di scatole in privato. Segnalateci queste persone nella chat dedicata ai problemi .");
        if(message.content === "!pvt"){
               message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "spam")){

        message.channel.send(":mailbox_with_mail: **Reclutamento:** \n Lo spam del proprio clan puo' essere effettuato massimo due volte al giorno. Il reclutamento è indirizzato e consentito solo ed esclusivamente ai clan, sono vietati quindi spam riguardanti team o community. E' possibile inserire (se in possesso) il logo del proprio clan all'interno del messaggio di reclutamento ma non e' consentito inserire il logo del team/community di appartenenza.");
        if(message.content === "!spam") {
            message.delete ()
        }
    }

    else if(message.content.startsWith(prefix + "supercell")){
        message.channel.send(":x: **Supercell:** \n Tutto ciò che non è previsto nelle politiche della Supercell, non è permesso nemmeno qua: vietato proporre o richiedere pushing, sharing o vendite e parlare di server privati.");
        
        if(message.content === "!supercell"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "tornei")){
        message.channel.send(":bar_chart: **Tornei:** \n  È possibile spammare tornei (non sponsorizzati) solo dopo aver avuto l'adesione dello staff.Se il tuo clan organizza tornei esclusivamente interni, quindi non sponsorizzati, puoi aggiungere questo dettaglio al messaggio di reclutamento.");

        if(message.content === "!tornei"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "esreclutamento")){
        message.channel.send("ESEMPIO RECLUTAMENTO: \n \nSalve ragazzi siamo:\nNOME CLAN\nTAG DEL CLAN\nIMMAGINE CLAN AGGIORNATA\nSI LINK");

        if(message.content === "!esreclutamento"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "esscambio")){
        message.channel.send("ESEMPIO SCAMBIO:\n\n:one:GETTONE LEGGENDARIO\nCERCO: PRINCIPESSA\nCEDO: ARCIERE MAGICO\n\n:two:GETTONE EPICO\nCERCO: PRINCIPE\nCEDO: BARILE GOBLIN\n\n:three:GETTONE RARO\n\n:four:GETTONE COMUNE");

        if(message.content === "!esscambio"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "instagram")){
        message.channel.send(":camera_with_flash: INSTAGRAM :camera_with_flash: \n\n (https://instagram.com/clash.royaleitafan?igshid=1nw6st4xi7teg) \n- Meme \n- Reclutedì (I vostri clan nelle nostre storie)\n- Tutte le info sugli eventi ITA FAN");

        if(message.content === "!instagram"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "telegram")){
        message.channel.send(":iphone:TELEGRAM:iphone:\n\nClash Royale Ita Fan  > https://t.me/ClashRoyaleItaFanC\n╚ Possibilità di postare reclutamenti, scambi e di cercare clan.\n\nBRAWL STARS ITA FAN :crossed_swords::crossed_swords: > https://t.me/BrawlStarsItaFanC\n╚Gruppo dedicato a Brawl Stars, per reclutamento e opinioni in questo fantastico gruppo.\n\nClash of Clans The Family  > https://t.me/Clashofclansthefamily \n:small_blue_diamond:FONDATO IL 03/2019 Gruppo ufficiale della The Family Community ❗ :small_blue_diamond:Gruppo in cui si discute della nostra passione in comune:arrow_down: :beginner:CLASH OF CLANS:crossed_swords:\n:link: (Community in collaborazione con ITA FAN GAMING)");

        if(message.content === "!telegram"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "gfacebook")){
        message.channel.send(":blue_circle: GRUPPO FACEBOOK :blue_circle:\n https://www.facebook.com/groups/ClashRoyaleItaFan \nPossibilità di postare reclutamenti, scambi e di cercare clan.");

        if(message.content === "!gfacebook"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "pfacebook")){
        message.channel.send(":blue_circle: PAGINA FACEBOOK :blue_circle:\n https://www.facebook.com/ClashRoyaleItaFanT/ \nTutte le info sugli eventi ITA FAN.");

        if(message.content === "!pfacebook"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "twitch")){
        message.channel.send(":red_circle::movie_camera: TWITCH :movie_camera::red_circle:\n\nhttps://www.twitch.tv/itafangaming \n:man_in_tuxedo_tone3:DiscosTv(Streamer ufficiale ITA FAN)");

        if(message.content === "!twitch"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "network")){
        message.channel.send("NETWORK GAMING ITA\n\n:question:Cercavi un NETWORK che unisse tutti i migliori giochi targati Supercell (Clash Royale, Clash of Clans, Brawl Stars) :video_game:, un gruppo offtopic,☕️ uno sparatutto :gun: e il famosissimo Minecraft:pick:?\n\nLISTA GRUPPI\n╠ CLASH ROYALE ITA FAN  :crossed_swords::crossed_swords:  (https://t.me/ClashRoyaleItaFanC) \n╠ BRAWL STARS ITA FAN :crossed_swords::crossed_swords:  (https://t.me/BrawlStarsItaFanC) \n╠ Clash of Clash TFCC  (http://telegram.me/Clashofclansthefamily) \n╠ HypixelCommunity  (http://t.me/HypixelCommunityGroup) \n╠ PUBG MOBILE ITA FAN :gun::flag_it:  (https://t.me/pubgitamobile) \n╚ BAR ITA FAN ☕️:crossed_swords:  (https://t.me/BarItaFan) \n\n:arrow_right:Lo abbiamo creato noi per te❗️:tada:\n:envelope_with_arrow:Unisciti al nostro canale per non perderti nessun evento!:confetti_ball:");

        if(message.content === "!network"){
            message.delete()
        }
    }

    else if(message.content.startsWith(prefix + "social")){
        message.channel.send("SOCIAL PRINCIPALI :red_circle:\n╠ INSTAGRAM :point_left:  (https://instagram.com/clash.royaleitafan?igshid=1nw6st4xi7teg)\n╠ GRUPPO FACEBOOK :point_left:  (https://www.facebook.com/groups/ClashRoyaleItaFan/)\n╚ PAGINA FACEBOOK :point_left:  (https://www.facebook.com/ClashRoyaleItaFanT/)\n\nSOCIAL Testuali/Vocali :iphone:\n╠ DISCORD :point_left:  (https://discord.gg/7UkqYWG)\n╚ TELEGRAM :point_left:  (https://t.me/ClashRoyaleItaFanC)\n\nTWITCH  :movie_camera:\n╚ :man_tone3:DicosTv :point_left:\n Il link del canale della nostra community https://www.twitch.tv/itafangaming \n Il link del canale privato del nostro streamer https://www.twicht.tv/Dicostv \n\nTWITTER  :bird:\n╚ TWITTER :point_left: (https://twitter.com/ClashRoyaleItaF?s=09)");

        if(message.content === "!social"){
            message.delete()
        }
    }

})


Client.login("") //RICORDATI DI METTERE IL TOKEN DEL BOT 