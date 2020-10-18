client.on("message", message => {
    if(message.mentions.has("@everyone")) return;//n responde ao @everyone
    if(message.mentions.has(client.user.id)) message.reply(`\<:developer:756876877448085535> **G-FORCE COMMUNITY** \nOlá, talvez você esteja precisando de ajuda, bom, então ajudarei você, veja abaixo algumas ajudas básica.\n \<:info:766085845945942018> \`${prefix}\` é o meu prefixo.\n\`${prefix}ajuda\` para ver a minha lista de comandos.`)//responde quando mensiona ele
})