function _0x2923(_0x3553e2,_0x69f5ab){const _0x2d5393=_0x2d53();return _0x2923=function(_0x29234d,_0x4e13d7){_0x29234d=_0x29234d-0x171;let _0x130ed9=_0x2d5393[_0x29234d];return _0x130ed9;},_0x2923(_0x3553e2,_0x69f5ab);}const _0x1c1976=_0x2923;(function(_0x308f65,_0x4ce737){const _0x30f899=_0x2923,_0x4653b7=_0x308f65();while(!![]){try{const _0x21d844=parseInt(_0x30f899(0x1f6))/0x1+-parseInt(_0x30f899(0x1d6))/0x2*(-parseInt(_0x30f899(0x1f0))/0x3)+parseInt(_0x30f899(0x196))/0x4*(-parseInt(_0x30f899(0x1e5))/0x5)+-parseInt(_0x30f899(0x1fc))/0x6*(parseInt(_0x30f899(0x19c))/0x7)+parseInt(_0x30f899(0x1b6))/0x8*(parseInt(_0x30f899(0x1f9))/0x9)+-parseInt(_0x30f899(0x202))/0xa+parseInt(_0x30f899(0x1fb))/0xb;if(_0x21d844===_0x4ce737)break;else _0x4653b7['push'](_0x4653b7['shift']());}catch(_0x493de6){_0x4653b7['push'](_0x4653b7['shift']());}}}(_0x2d53,0x8c657),require(_0x1c1976(0x1fd)));const pino=require('pino'),{Boom}=require('@hapi/boom'),fs=require('fs'),fss=require(_0x1c1976(0x1a6)),moment=require(_0x1c1976(0x20a)),chalk=require(_0x1c1976(0x1e8)),FileType=require(_0x1c1976(0x1aa)),path=require(_0x1c1976(0x171)),axios=require(_0x1c1976(0x188)),PhoneNumber=require(_0x1c1976(0x1d3)),{exec,execSync}=require(_0x1c1976(0x18b)),Config=require(_0x1c1976(0x208)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x1c1976(0x1bf)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require(_0x1c1976(0x1d0)),{default:KishConnect,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,Browsers,getAggregateVotesInPollMessage,extractMessageContent,getContentType,normalizeMessageContent,downloadMediaMessage,getBinaryNodeChild,WAMediaUpload,getBinaryNodeChildren,generateWAMessage,WA_DEFAULT_EPHEMERAL}=require('@whiskeysockets/baileys'),NodeCache=require('node-cache'),Pino=require('pino'),readline=require('readline'),{parsePhoneNumber}=require(_0x1c1976(0x1c3)),makeWASocket=require(_0x1c1976(0x1ef))['default'];var sessionFolderPath=path['join'](__dirname,_0x1c1976(0x1a0)),sessionPath=path[_0x1c1976(0x1d9)](sessionFolderPath,_0x1c1976(0x195));console[_0x1c1976(0x18f)](Config[_0x1c1976(0x184)]),Dec_Sess();const store=makeInMemoryStore({'logger':pino()['child']({'level':_0x1c1976(0x191),'stream':_0x1c1976(0x1ad)})});async function Dec_Sess(){const _0x1312ea=_0x1c1976;execSync(_0x1312ea(0x1d2)+sessionPath),exec(_0x1312ea(0x172)+sessionPath),exec(_0x1312ea(0x1b3)+sessionFolderPath);let _0x493c18=Config[_0x1312ea(0x184)][_0x1312ea(0x1f7)](/_K_I_S_H_/g,''),_0x3e9e94=Buffer[_0x1312ea(0x190)](_0x493c18,_0x1312ea(0x201))['toString'](_0x1312ea(0x1bc)),_0x3aa7f8=_0x3e9e94['replace'](/_K_I_S_H_/g,''),_0x431f5a=Buffer['from'](_0x3aa7f8,'base64')['toString']('utf-8');if(!fs['existsSync'](sessionPath)){if(_0x431f5a['length']<0x1e){const _0x24f78d=require('axios');let {data:_0x1bccfe}=await _0x24f78d[_0x1312ea(0x1c2)]('https://paste.c-net.org/'+_0x431f5a);await fs['writeFileSync'](sessionPath,JSON[_0x1312ea(0x1ed)](_0x1bccfe));}}}async function startKish(){const _0x5d7809=_0x1c1976;await delay(0xbb8),await delay(0x7d0);let {version:_0x45bc2c,isLatest:_0x2e55a0}=await fetchLatestBaileysVersion();const {state:_0x2b275c,saveCreds:_0x2dfd59}=await useMultiFileAuthState('./session'),_0x57660e=new NodeCache(),_0x22cd30=makeWASocket({'logger':pino({'level':_0x5d7809(0x191)}),'printQRInTerminal':!![],'browser':Browsers['ubuntu'](_0x5d7809(0x1a8)),'auth':_0x2b275c,'version':_0x45bc2c});store[_0x5d7809(0x1d1)](_0x22cd30['ev']),_0x22cd30['ev']['on'](_0x5d7809(0x1a3),async _0x3a57ce=>{const _0x2eb884=_0x5d7809;try{const _0x3489af=_0x3a57ce[_0x2eb884(0x18e)][0x0];if(!_0x3489af['message'])return;_0x3489af[_0x2eb884(0x175)]=Object[_0x2eb884(0x1d7)](_0x3489af[_0x2eb884(0x175)])[0x0]===_0x2eb884(0x1ce)?_0x3489af['message'][_0x2eb884(0x1ce)][_0x2eb884(0x175)]:_0x3489af[_0x2eb884(0x175)];_0x3489af[_0x2eb884(0x197)]&&_0x3489af['key']['remoteJid']==='status@broadcast'&&(autoread_status&&await _0x22cd30[_0x2eb884(0x19e)]([_0x3489af[_0x2eb884(0x197)]]));if(!_0x22cd30[_0x2eb884(0x176)]&&!_0x3489af['key'][_0x2eb884(0x1bb)]&&_0x3a57ce['type']==='notify')return;if(_0x3489af[_0x2eb884(0x197)]['id'][_0x2eb884(0x182)]('BAE5')&&_0x3489af[_0x2eb884(0x197)]['id'][_0x2eb884(0x1b4)]===0x10)return;const _0x4f81e4=smsg(_0x22cd30,_0x3489af,store);require('./Kish')(_0x22cd30,_0x4f81e4,_0x3a57ce,store);}catch(_0x40beba){console[_0x2eb884(0x18f)](_0x40beba);}}),_0x22cd30['sendContact']=async(_0x642c6,_0x2050cf,_0x22d8d8='',_0x3219df={})=>{const _0xd10890=_0x5d7809;let _0x5639e2=[];for(let _0x4a8a15 of _0x2050cf){_0x5639e2[_0xd10890(0x18d)]({'displayName':await _0x22cd30[_0xd10890(0x1e9)](_0x4a8a15+'@s.whatsapp.net'),'vcard':_0xd10890(0x179)+await _0x22cd30[_0xd10890(0x1e9)](_0x4a8a15+_0xd10890(0x1db))+_0xd10890(0x1a2)+await _0x22cd30['getName'](_0x4a8a15+_0xd10890(0x1db))+_0xd10890(0x1c1)+_0x4a8a15+':'+_0x4a8a15+_0xd10890(0x192)});}_0x22cd30[_0xd10890(0x181)](_0x642c6,{'contacts':{'displayName':global[_0xd10890(0x17b)],'contacts':_0x5639e2},..._0x3219df},{'quoted':_0x22d8d8});},_0x22cd30[_0x5d7809(0x1a9)]=_0xdaa07d=>{const _0x3b468a=_0x5d7809;if(!_0xdaa07d)return _0xdaa07d;if(/:\d+@/gi['test'](_0xdaa07d)){let _0x22b3c3=jidDecode(_0xdaa07d)||{};return _0x22b3c3['user']&&_0x22b3c3[_0x3b468a(0x1b7)]&&_0x22b3c3[_0x3b468a(0x194)]+'@'+_0x22b3c3[_0x3b468a(0x1b7)]||_0xdaa07d;}else return _0xdaa07d;},_0x22cd30['ev']['on']('contacts.update',_0x105566=>{const _0x571fb8=_0x5d7809;for(let _0x1cce42 of _0x105566){let _0x1f90b5=_0x22cd30[_0x571fb8(0x1a9)](_0x1cce42['id']);if(store&&store[_0x571fb8(0x1f4)])store[_0x571fb8(0x1f4)][_0x1f90b5]={'id':_0x1f90b5,'name':_0x1cce42[_0x571fb8(0x1e6)]};}}),_0x22cd30[_0x5d7809(0x1e9)]=(_0x429fe0,_0x3698a3=![])=>{const _0x5088c1=_0x5d7809;id=_0x22cd30[_0x5088c1(0x1a9)](_0x429fe0),_0x3698a3=_0x22cd30[_0x5088c1(0x1eb)]||_0x3698a3;let _0x5e0fed;if(id['endsWith']('@g.us'))return new Promise(async _0x17b2a9=>{const _0x16b8e4=_0x5088c1;_0x5e0fed=store[_0x16b8e4(0x1f4)][id]||{};if(!(_0x5e0fed[_0x16b8e4(0x1a7)]||_0x5e0fed[_0x16b8e4(0x1b2)]))_0x5e0fed=_0x22cd30[_0x16b8e4(0x174)](id)||{};_0x17b2a9(_0x5e0fed[_0x16b8e4(0x1a7)]||_0x5e0fed[_0x16b8e4(0x1b2)]||PhoneNumber('+'+id[_0x16b8e4(0x1f7)](_0x16b8e4(0x1db),''))[_0x16b8e4(0x17f)](_0x16b8e4(0x1f5)));});else _0x5e0fed=id==='0@s.whatsapp.net'?{'id':id,'name':_0x5088c1(0x1ba)}:id===_0x22cd30[_0x5088c1(0x1a9)](_0x22cd30[_0x5088c1(0x194)]['id'])?_0x22cd30['user']:store[_0x5088c1(0x1f4)][id]||{};return(_0x3698a3?'':_0x5e0fed[_0x5088c1(0x1a7)])||_0x5e0fed['subject']||_0x5e0fed[_0x5088c1(0x1c6)]||PhoneNumber('+'+_0x429fe0[_0x5088c1(0x1f7)](_0x5088c1(0x1db),''))[_0x5088c1(0x17f)]('international');},_0x22cd30[_0x5d7809(0x176)]=![],_0x22cd30[_0x5d7809(0x1a4)]=_0x5ce233=>smsg(_0x22cd30,_0x5ce233,store),_0x22cd30['ev']['on']('connection.update',async _0x290f3b=>{const _0x34ff12=_0x5d7809,{connection:_0xb459c6,lastDisconnect:_0x1e2e3a}=_0x290f3b;if(_0xb459c6==_0x34ff12(0x1ab)){console[_0x34ff12(0x18f)](chalk[_0x34ff12(0x1d5)](_0x34ff12(0x193))),console[_0x34ff12(0x18f)](chalk[_0x34ff12(0x183)](_0x34ff12(0x19d))),console[_0x34ff12(0x18f)](chalk[_0x34ff12(0x205)]('\x0a\x0a🧩Connected'));const _0x402727=[_0x34ff12(0x1f3),_0x34ff12(0x1ea),'green',_0x34ff12(0x19b),_0x34ff12(0x189)];let _0xdec5d5=0x0;function _0x167b4b(){const _0x21feb1=_0x34ff12,_0x48587d=_0x402727[_0xdec5d5];console[_0x21feb1(0x18f)](chalk[_0x21feb1(0x1e3)](_0x48587d)(_0x21feb1(0x1b1))),_0xdec5d5=(_0xdec5d5+0x1)%_0x402727[_0x21feb1(0x1b4)],setTimeout(_0x167b4b,0xea60);}_0x167b4b();}_0xb459c6===_0x34ff12(0x199)&&_0x1e2e3a&&_0x1e2e3a[_0x34ff12(0x1bd)]&&_0x1e2e3a[_0x34ff12(0x1bd)][_0x34ff12(0x173)][_0x34ff12(0x1f2)]!=0x191&&startKish();}),_0x22cd30['ev']['on'](_0x5d7809(0x17a),_0x2dfd59),_0x22cd30['ev']['on'](_0x5d7809(0x1a3),()=>{}),_0x22cd30['sendText']=(_0xda404e,_0x265402,_0x218aae='',_0x109009)=>_0x22cd30[_0x5d7809(0x181)](_0xda404e,{'text':_0x265402,..._0x109009},{'quoted':_0x218aae,..._0x109009}),_0x22cd30['sendTextWithMentions']=async(_0x424796,_0x1edcf7,_0x4ac75f,_0x2b1954={})=>_0x22cd30[_0x5d7809(0x181)](_0x424796,{'text':_0x1edcf7,'mentions':[..._0x1edcf7['matchAll'](/@(\d{0,16})/g)]['map'](_0x5885da=>_0x5885da[0x1]+'@s.whatsapp.net'),..._0x2b1954},{'quoted':_0x4ac75f}),_0x22cd30[_0x5d7809(0x1c4)]=async(_0x24bb96,_0x381c80,_0x239066,_0x2c502d={})=>{const _0x3626b3=_0x5d7809;let _0x25b6c2=Buffer[_0x3626b3(0x1f8)](_0x381c80)?_0x381c80:/^data:.*?\/.*?;base64,/i[_0x3626b3(0x1d4)](_0x381c80)?Buffer[_0x3626b3(0x190)](_0x381c80[_0x3626b3(0x1b8)]`,`[0x1],_0x3626b3(0x201)):/^https?:\/\//['test'](_0x381c80)?await await getBuffer(_0x381c80):fs[_0x3626b3(0x1e0)](_0x381c80)?fs[_0x3626b3(0x1cf)](_0x381c80):Buffer['alloc'](0x0),_0x5b8aad;return _0x2c502d&&(_0x2c502d[_0x3626b3(0x203)]||_0x2c502d[_0x3626b3(0x198)])?_0x5b8aad=await writeExifImg(_0x25b6c2,_0x2c502d):_0x5b8aad=await imageToWebp(_0x25b6c2),await _0x22cd30[_0x3626b3(0x181)](_0x24bb96,{'sticker':{'url':_0x5b8aad},..._0x2c502d},{'quoted':_0x239066}),_0x5b8aad;},_0x22cd30['sendVideoAsSticker']=async(_0x24fdbd,_0x4d2aea,_0x396d24,_0x171607={})=>{const _0x52efae=_0x5d7809;let _0x598e68=Buffer[_0x52efae(0x1f8)](_0x4d2aea)?_0x4d2aea:/^data:.*?\/.*?;base64,/i['test'](_0x4d2aea)?Buffer[_0x52efae(0x190)](_0x4d2aea[_0x52efae(0x1b8)]`,`[0x1],_0x52efae(0x201)):/^https?:\/\//[_0x52efae(0x1d4)](_0x4d2aea)?await await getBuffer(_0x4d2aea):fs['existsSync'](_0x4d2aea)?fs[_0x52efae(0x1cf)](_0x4d2aea):Buffer[_0x52efae(0x1c5)](0x0),_0x2835f1;return _0x171607&&(_0x171607['packname']||_0x171607[_0x52efae(0x198)])?_0x2835f1=await writeExifVid(_0x598e68,_0x171607):_0x2835f1=await videoToWebp(_0x598e68),await _0x22cd30[_0x52efae(0x181)](_0x24fdbd,{'sticker':{'url':_0x2835f1},..._0x171607},{'quoted':_0x396d24}),_0x2835f1;},_0x22cd30[_0x5d7809(0x1ff)]=async(_0x52e5a3,_0x3566cf,_0x490a05=!![])=>{const _0x54c836=_0x5d7809;let _0x35892a=_0x52e5a3[_0x54c836(0x209)]?_0x52e5a3[_0x54c836(0x209)]:_0x52e5a3,_0x15d3d4=(_0x52e5a3['msg']||_0x52e5a3)[_0x54c836(0x204)]||'',_0x7bb5a7=_0x52e5a3['mtype']?_0x52e5a3[_0x54c836(0x17d)][_0x54c836(0x1f7)](/Message/gi,''):_0x15d3d4[_0x54c836(0x1b8)]('/')[0x0];const _0x1231e0=await downloadContentFromMessage(_0x35892a,_0x7bb5a7);let _0x123e3d=Buffer[_0x54c836(0x190)]([]);for await(const _0x479d6d of _0x1231e0){_0x123e3d=Buffer['concat']([_0x123e3d,_0x479d6d]);}let _0x8daeb2=await FileType[_0x54c836(0x1af)](_0x123e3d);return trueFileName=_0x490a05?_0x3566cf+'.'+_0x8daeb2[_0x54c836(0x1dd)]:_0x3566cf,await fs[_0x54c836(0x185)](trueFileName,_0x123e3d),trueFileName;},_0x22cd30[_0x5d7809(0x207)]=async(_0x4a2b6c,_0x4bf0da,_0x1cb0e8=!![],_0xc6ffcd={})=>{const _0x566d0a=_0x5d7809;let _0x3a9c3a;_0xc6ffcd[_0x566d0a(0x1c7)]&&_0x4bf0da[_0x566d0a(0x175)][_0x566d0a(0x1e1)]?.['message']&&(_0x3a9c3a=Object['keys'](_0x4bf0da[_0x566d0a(0x175)][_0x566d0a(0x1e1)][_0x566d0a(0x175)])[0x0],delete _0x4bf0da['message']['viewOnceMessage'][_0x566d0a(0x175)][_0x3a9c3a][_0x566d0a(0x178)],_0x4bf0da['message']=proto['Message'][_0x566d0a(0x200)](JSON[_0x566d0a(0x180)](JSON[_0x566d0a(0x1ed)](_0x4bf0da[_0x566d0a(0x175)]['viewOnceMessage'][_0x566d0a(0x175)]))),_0x4bf0da[_0x566d0a(0x175)][_0x3a9c3a]['contextInfo']=_0x4bf0da['message'][_0x566d0a(0x1e1)]['contextInfo']);let _0x5203aa=getContentType(_0x4bf0da[_0x566d0a(0x175)]),_0x12a9d5=generateForwardMessageContent(_0x4bf0da,!!_0x1cb0e8),_0x12e993=getContentType(_0x12a9d5);if(_0x1cb0e8&&typeof _0x1cb0e8===_0x566d0a(0x1fa)&&_0x1cb0e8>0x1)_0x12a9d5[_0x12e993][_0x566d0a(0x1c0)][_0x566d0a(0x1cc)]+=_0x1cb0e8;return _0x12a9d5[_0x12e993]['contextInfo']={..._0x4bf0da[_0x566d0a(0x175)][_0x5203aa][_0x566d0a(0x1c0)]||{},..._0x12a9d5[_0x12e993][_0x566d0a(0x1c0)]||{}},_0x12a9d5=generateWAMessageFromContent(_0x4a2b6c,_0x12a9d5,{..._0xc6ffcd,'userJid':_0x22cd30['user'][_0x566d0a(0x17c)]}),await _0x22cd30['relayMessage'](_0x4a2b6c,_0x12a9d5['message'],{'messageId':_0x12a9d5[_0x566d0a(0x197)]['id'],'additionalAttributes':{..._0xc6ffcd}}),_0x12a9d5;},_0x22cd30['ev']['on'](_0x5d7809(0x18c),async _0x1441ee=>{const _0x294b92=_0x5d7809;if(global[_0x294b92(0x1de)]==_0x294b92(0x1b5)){console[_0x294b92(0x18f)](_0x1441ee);try{let _0x1aa432=await _0x22cd30['groupMetadata'](_0x1441ee['id']),_0x16006c=_0x1441ee[_0x294b92(0x17e)];for(let _0x3385c5 of _0x16006c){try{ppuser=await _0x22cd30[_0x294b92(0x1cb)](_0x3385c5,_0x294b92(0x1e2));}catch(_0x15ab0a){ppuser=_0x294b92(0x1df);}try{ppgroup=await _0x22cd30[_0x294b92(0x1cb)](_0x1441ee['id'],_0x294b92(0x1e2));}catch(_0x26e0d0){ppgroup=_0x294b92(0x19f);}memb=_0x1aa432['participants'][_0x294b92(0x1b4)],KishWlcm=await getBuffer(ppuser),KishLft=await getBuffer(ppuser);if(_0x1441ee[_0x294b92(0x1da)]=='add'){const _0x2b5668=await getBuffer(ppuser);let _0x25de1d=_0x3385c5;const _0x42aa34=moment['tz'](_0x294b92(0x177))['format'](_0x294b92(0x1a1)),_0xa362ff=moment['tz']('Africa/Nairobi')['format']('DD/MM/YYYY'),_0x2caae2=_0x1aa432[_0x294b92(0x17e)][_0x294b92(0x1b4)];Kishbody=_0x294b92(0x1d8)+_0x1aa432['subject']+'\x0a│⊳\x20\x20📋\x20Name:\x20@'+_0x25de1d['split']('@')[0x0]+_0x294b92(0x1a5)+_0x2caae2+_0x294b92(0x19a)+_0x42aa34+'\x20'+_0xa362ff+'\x0a└──────────⊰',_0x22cd30[_0x294b92(0x181)](_0x1441ee['id'],{'text':Kishbody,'contextInfo':{'mentionedJid':[_0x3385c5],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x294b92(0x187)],'body':''+ownername,'previewType':_0x294b92(0x1ca),'thumbnailUrl':'','thumbnail':KishWlcm,'sourceUrl':''+link}}});}else{if(_0x1441ee[_0x294b92(0x1da)]==_0x294b92(0x1b0)){const _0x525886=await getBuffer(ppuser),_0x140c25=moment['tz'](_0x294b92(0x177))[_0x294b92(0x1fe)]('HH:mm:ss'),_0x50c404=moment['tz'](_0x294b92(0x177))[_0x294b92(0x1fe)](_0x294b92(0x18a));let _0x12c1dd=_0x3385c5;const _0x27722f=_0x1aa432['participants'][_0x294b92(0x1b4)];Kishbody=_0x294b92(0x1c9)+_0x1aa432[_0x294b92(0x1b2)]+'\x0a│⊳\x20\x20📃\x20Reason:\x20Left\x0a│⊳\x20\x20📔\x20Name:\x20@'+_0x12c1dd['split']('@')[0x0]+_0x294b92(0x1a5)+_0x27722f+'th\x0a│⊳\x20\x20🕒\x20Time:\x20'+_0x140c25+'\x20'+_0x50c404+_0x294b92(0x1ac),_0x22cd30[_0x294b92(0x181)](_0x1441ee['id'],{'text':Kishbody,'contextInfo':{'mentionedJid':[_0x3385c5],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x294b92(0x187)],'body':''+ownername,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':KishLft,'sourceUrl':''+link}}});}}}}catch(_0x25c2a9){console[_0x294b92(0x18f)](_0x25c2a9);}}}),_0x22cd30[_0x5d7809(0x1f1)]=async _0x367fee=>{const _0x44ae99=_0x5d7809;let _0x500298=(_0x367fee[_0x44ae99(0x209)]||_0x367fee)[_0x44ae99(0x204)]||'',_0x34f488=_0x367fee[_0x44ae99(0x17d)]?_0x367fee['mtype'][_0x44ae99(0x1f7)](/Message/gi,''):_0x500298[_0x44ae99(0x1b8)]('/')[0x0];const _0x37ba87=await downloadContentFromMessage(_0x367fee,_0x34f488);let _0x295717=Buffer[_0x44ae99(0x190)]([]);for await(const _0x3048f0 of _0x37ba87){_0x295717=Buffer['concat']([_0x295717,_0x3048f0]);}return _0x295717;};}return startKish();let file=require[_0x1c1976(0x1b9)](__filename);function _0x2d53(){const _0x478453=['mtype','participants','getNumber','parse','sendMessage','startsWith','gray','sessionId','writeFileSync','rate-overlimit','botname','axios','purple','DD/MM/YYYY','child_process','group-participants.update','push','messages','log','from','silent','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:brashokish499@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://www.instagram.com/ayushpandeyy_023\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;India;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','🟨Welcome\x20to\x20Kish-md','user','/creds.json','36biijin','key','author','close','th\x0a│⊳\x20\x20🕰️\x20Joined:\x20','blue','56ZYvuRI','\x0a\x0a🚀Initializing...','readMessages','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','/session','HH:mm:ss','\x0aFN:','messages.upsert','serializeM','\x0a│⊳\x20\x20👥\x20Members:\x20','fs-extra','name','Firefox','decodeJid','file-type','open','\x0a└──────────⊰','store','Socket\x20connection\x20timeout','fromBuffer','remove','\x0a\x0a⏳️waiting\x20for\x20messages','subject','mkdir\x20','length','true','1124512uxzpVy','server','split','resolve','WhatsApp','fromMe','utf-8','error','includes','./Gallery/lib/exif','contextInfo','\x0aitem1.TEL;waid=','get','libphonenumber-js','sendImageAsSticker','alloc','verifiedName','readViewOnce','Connection\x20Closed','┌──⊰🍁𝑭𝑨𝑹𝑬𝑾𝑬𝑳𝑳🍁⊰\x0a│⊳\x20\x20👤\x20From:\x20','PHOTO','profilePictureUrl','forwardingScore','redBright','ephemeralMessage','readFileSync','./Gallery/lib/myfunc','bind','rm\x20-rf\x20','awesome-phonenumber','test','green','824nixxsp','keys','┌──⊰\x20🎗𝑾𝑬𝑳𝑪𝑶𝑴𝑬🎗⊰\x0a│⊳\x20\x20🌐\x20To:\x20','join','action','@s.whatsapp.net','Update\x20','ext','welcome','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','existsSync','viewOnceMessage','image','keyword','uncaughtException','596535vUhPdl','notify','Value\x20not\x20found','chalk','getName','yellow','withoutContact','cache','stringify','Timed\x20Out','@whiskeysockets/baileys','4788LdBpkn','downloadMediaMessage','statusCode','red','contacts','international','968914wkFQyh','replace','isBuffer','72MZcWQq','number','4893526TcyesS','564414GHYfdG','./Config','format','downloadAndSaveMediaMessage','fromObject','base64','7944660BkRXYu','packname','mimetype','cyan','Caught\x20exception:\x20','copyNForward','./Config.js','msg','moment-timezone','path','rm\x20-r\x20','output','groupMetadata','message','public','Africa/Nairobi','viewOnce','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','creds.update','ownername','jid'];_0x2d53=function(){return _0x478453;};return _0x2d53();}fs['watchFile'](file,()=>{const _0x109082=_0x1c1976;fs['unwatchFile'](file),console[_0x109082(0x18f)](chalk[_0x109082(0x1cd)](_0x109082(0x1dc)+__filename)),delete require[_0x109082(0x1ec)][file],require(file);}),process['on'](_0x1c1976(0x1e4),function(_0x2eba4e){const _0x19b8ff=_0x1c1976;let _0x2740ce=String(_0x2eba4e);if(_0x2740ce[_0x19b8ff(0x1be)](_0x19b8ff(0x1ae)))return;if(_0x2740ce[_0x19b8ff(0x1be)]('item-not-found'))return;if(_0x2740ce[_0x19b8ff(0x1be)](_0x19b8ff(0x186)))return;if(_0x2740ce[_0x19b8ff(0x1be)](_0x19b8ff(0x1c8)))return;if(_0x2740ce[_0x19b8ff(0x1be)](_0x19b8ff(0x1ee)))return;if(_0x2740ce[_0x19b8ff(0x1be)](_0x19b8ff(0x1e7)))return;console[_0x19b8ff(0x18f)](_0x19b8ff(0x206),_0x2eba4e);});