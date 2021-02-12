var unqHsh = (a,o) => a.filter(i=> o.hasOwnProperty(i) ? false : (o[i] = true));
var xx = /gmail|yahoo|cox|hotmail|outlook|\blive\b|ymail|bellsouth|mindspring|comcast|\baol\b|rocketmail|windstream|earthlink|aol.com|att.net|comcast.net|facebook.com|gmail.com|gmx.com|googlemail.com|google.com|hotmail.com|hotmail.co.uk|mac.com|me.com|mail.com|msn.com|live.com|sbcglobal.net|verizon.net|yahoo.com|yahoo.co.uk|email.com|fastmail.fm|games.com|gmx.net|hush.com|hushmail.com|icloud.com|iname.com|inbox.com|lavabit.com|love.com|outlook.com|pobox.com|protonmail.ch|protonmail.com|tutanota.de|tutanota.com|tutamail.com|tuta.io|keemail.me|rocketmail.com|safe-mail.net|wow.com|ygm.com|ymail.com|zoho.com|yandex.com|bellsouth.net|charter.net|cox.net|earthlink.net|juno.com|btinternet.com|virginmedia.com|blueyonder.co.uk|freeserve.co.uk|live.co.uk|ntlworld.com|o2.co.uk|orange.net|sky.com|talktalk.co.uk|tiscali.co.uk|virgin.net|wanadoo.co.uk|bt.com|sina.com|sina.cn|qq.com|naver.com|hanmail.net|daum.net|nate.com|yahoo.co.jp|yahoo.co.kr|yahoo.co.id|yahoo.co.in|yahoo.com.sg|yahoo.com.ph|163.com|yeah.net|126.com|21cn.com|aliyun.com|foxmail.com|hotmail.fr|live.fr|laposte.net|yahoo.fr|wanadoo.fr|orange.fr|gmx.fr|sfr.fr|neuf.fr|free.fr|gmx.de|hotmail.de|live.de|online.de|t-online.de|web.de|yahoo.de|libero.it|virgilio.it|hotmail.it|aol.it|tiscali.it|alice.it|live.it|yahoo.it|email.it|tin.it|poste.it|teletu.it|mail.ru|rambler.ru|yandex.ru|ya.ru|list.ru|hotmail.be|live.be|skynet.be|voo.be|tvcablenet.be|telenet.be|hotmail.com.ar|live.com.ar|yahoo.com.ar|fibertel.com.ar|speedy.com.ar|arnet.com.ar|yahoo.com.mx|live.com.mx|hotmail.es|hotmail.com.mx|prodigy.net.mx|yahoo.ca|hotmail.ca|bell.net|shaw.ca|sympatico.ca|rogers.com|yahoo.com.br|hotmail.com.br|outlook.com.br|uol.com.br|bol.com.br|terra.com.br|ig.com.br|itelefonica.com.br|r7.com|zipmail.com.br|globo.com|globomail.com|oi.com.br|rediffmail.com|yahoo.es|live.nl|bigpond.com|yahoo.in|yahoo.com.au|optonline.net|freenet.de|aliceadsl.fr|home.nl|voila.fr|planet.nl|arcor.de|frontiernet.net|hetnet.nl|live.com.au|zonnet.nl|club-internet.fr|optusnet.com.au|bluewin.ch|windstream.net|centurytel.net|chello.nl|live.ca|aim.com|bigpond.net.au|123mail.org|2-mail.com|4email.net|50mail.com|9mail.org|aapt.net.au|adam.com.au|airpost.net|allmail.net|anonymous.to|asia.com|berlin.com|bestmail.us|bigpond.com.au|comic.com|consultant.com|contractor.net|dodo.com.au|doglover.com|doramail.com|dr.com|dublin.com|dutchmail.com|elitemail.org|elvisfan.com|emailaccount.com|emailcorner.net|emailengine.net|emailengine.org|emailgroups.net|emailplus.org|emailsrvr.org|emailuser.net|eml.cc|everymail.net|everyone.net|excite.com|execs.com|exemail.com.au|f-m.fm|fast-email.com|fast-mail.org|fastem.com|fastemail.us|fastemailer.com|fastest.cc|fastimap.com|fastmail.cn|fastmail.co.uk|fastmail.com.au|fastmail.es|fastmail.im|fastmail.in|fastmail.jp|fastmail.mx|fastmail.net|fastmail.nl|fastmail.se|fastmail.to|fastmail.tw|fastmail.us|fastmailbox.net|fastmessaging.com|fastservice.com|fea.st|financier.com|fireman.net|flashmail.com|fmail.co.uk|fmailbox.com|fmgirl.com|fmguy.com|ftml.net|galaxyhit.com|hailmail.net|icqmail.com|iinet.net.au|imap-mail.com|imap.cc|imapmail.org|innocent.com|inorbit.com|inoutbox.com|internet-e-mail.com|internet-mail.org|lycos.com|mybox.xyz|netzero.net|postmaster.co.uk|reddif.com|runbox.com|sync.xyz|thexyz.ca|thexyz.co.uk|thexyz.com|thexyz.eu|thexyz.in|thexyz.mobi|thexyz.net|vfemail.net|webmail.wiki|xyz.am|z9mail.com|zilladog.com|zooglemail.com/i;

`['somethingas@att.net']`.split(/\n/).map(
        r=> /\[/.test(r) ? JSON.parse(r.trim().replace(/'/g,'"')) : ['']
    )
.map(
    r=> r.filter(
        t=> xx.test(t)
    )
)
.map(
    r=> r.length ? r : ['NO personal EMAILS']
).map(
    r=> unqHsh(r.map(r=> r.toLowerCase()),{}).reduce((a,b)=> a+'\t'+b)
).reduce((a,b)=> a+'\n'+b);
