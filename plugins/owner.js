module.exports = {
  command: "owner",
  description: "Show owner contacts, website button and command list",
  category: "info",

  async execute(sock, msg) {
    const jid = msg.key.remoteJid;

    const contacts = [
      {
        displayName: "BILAL-KING",
        vcard: `
BEGIN:VCARD
VERSION:3.0
FN:popkid💛
TEL;type=CELL;type=VOICE;waid=923078071982:+923078071982
END:VCARD`.trim(),
      }
    ];

    // Send contacts
    for (const contact of contacts) {
      await sock.sendMessage(jid, {
        contacts: {
          displayName: contact.displayName,
          contacts: [{ vcard: contact.vcard }],
        },
      });
    }

    // Send list message with 1 section
    await sock.sendMessage(jid, {
      title: "📑ᴏᴡɴᴇʀꜱ ɪɴꜰᴏx📑",
      text: "ᴄɪᴄᴋ ᴛʜᴇ ᴏᴡᴇʀꜱ ɪɴꜰᴏ ʙᴜᴛᴛᴏɴ🖲📋",
      footer: "𝗺𝗮𝗱𝗲 𝗯𝘆 BILAL-MD",
      buttonText: "☤ᴏᴡɴᴇʀꜱ ɪɴꜰᴏ☤",
      sections: [
        {
          title: "𝗶 𝗮𝗺 BILAL-KING",
          rows: [
            {
              title: "ɴᴀᴍᴇ",
              description: "𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 BILAL-MD",
              rowId: ".owner",
            },
            {
              title: "ᴀɢᴇ",
              description: "ᴀɢᴇ - NA",
              rowId: ".owner",
            },
            {
              title: "ᴄᴏᴜɴʀᴛʏ",
              description: "Kenya",
              rowId: ".owner",
            },
          ],
        }
      ],
    });
  },
};
