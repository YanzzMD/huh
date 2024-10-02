;
;
;
const {modul} = require('./module'), moment = require('moment-timezone'), {baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _} = modul, {Boom} = boom, {
        default: makeWASocket,
        BufferJSON,
        initInMemoryKeyStore,
        DisconnectReason,
        AnyMessageContent,
        makeInMemoryStore,
        useMultiFileAuthState,
        delay,
        fetchLatestBaileysVersion,
        generateForwardMessageContent,
        prepareWAMessageMedia,
        generateWAMessageFromContent,
        generateMessageID,
        downloadContentFromMessage,
        jidDecode,
        getAggregateVotesInPollMessage,
        proto
    } = require('@whiskeysockets/baileys'), readline = require('readline'), {color, bgcolor} = require('./lib/color'), colors = require('colors'), {start} = require('./lib/spinner'), {uncache, nocache} = require('./lib/loader'), {imageToWebp, videoToWebp, writeExifImg, writeExifVid} = require('./lib/exif'), {smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize} = require('./lib/func'), prefix = '', question = _0x264571 => {
        const _0x26fecd = readline.createInterface({
            'input': process.stdin,
            'output': process.stdout
        });
        return new Promise(_0x5cfa7d => {
            ;
            _0x26fecd.question(_0x264571, _0x5cfa7d);
        });
    }, store = makeInMemoryStore({
        'logger': pino().child({
            'level': 'silent',
            'stream': 'store'
        })
    }), pairingCode = true;
require('./lib/me/global.js');
nocache('../lib/me/global.js', _0x240341 => console.log(color('[ CHANGE ]', 'green'), color('\'' + _0x240341 + '\'', 'green'), 'Updated'));
require('./index.js');
nocache('../index.js', _0xbf911e => console.log(color('[ CHANGE ]', 'green'), color('\'' + _0xbf911e + '\'', 'green'), 'Updated'));
;
async function NawBotz() {
    const {
            state: _0x2fe127,
            saveCreds: _0xbef84f
        } = await useMultiFileAuthState(global.sessionName), _0x2f6a6f = makeWASocket({
            'logger': pino({ 'level': 'silent' }),
            'printQRInTerminal': !pairingCode,
            'auth': _0x2fe127,
            'browser': [
                'Chrome (Linux)',
                '',
                ''
            ]
        });
    if (pairingCode && !_0x2f6a6f.authState.creds.registered) {
        const _0x20de4a = await question(color('\n\n\nSilahkan masukin nomor Whatsapp kamu contoh 62856:\n', 'white')), _0x5009dc = await _0x2f6a6f.requestPairingCode(_0x20de4a.trim());
        console.log(color('\u26A0︎ Kode Pairing Bot Whatsapp kamu :', 'gold'), color('' + _0x5009dc, 'white'));
    }
    store.bind(_0x2f6a6f.ev);
    _0x2f6a6f.ev.on('connection.update', async _0x34aeaa => {
        const {
            connection: _0x586cad,
            lastDisconnect: _0xe747c2
        } = _0x34aeaa;
        try {
            if (_0x586cad === 'close') {
                let _0xbaf66d = new Boom(_0xe747c2?.error)?.output.statusCode;
                if (_0xbaf66d === DisconnectReason.badSession) {
                    console.log('Bad Session File, Please Delete Session and Scan Again');
                    NawBotz();
                    ;
                } else {
                    if (_0xbaf66d === DisconnectReason.connectionClosed) {
                        console.log('Connection closed, reconnecting....');
                        NawBotz();
                        ;
                    } else {
                        if (_0xbaf66d === DisconnectReason.connectionLost) {
                            console.log('Connection Lost from Server, reconnecting...');
                            NawBotz();
                            ;
                        } else {
                            if (_0xbaf66d === DisconnectReason.connectionReplaced) {
                                console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First');
                                NawBotz();
                                ;
                            } else {
                                if (_0xbaf66d === DisconnectReason.loggedOut) {
                                    console.log('Device Logged Out, Please Scan Again And Run.');
                                    NawBotz();
                                    ;
                                } else {
                                    if (_0xbaf66d === DisconnectReason.restartRequired) {
                                        console.log('Restart Required, Restarting...');
                                        NawBotz();
                                        ;
                                    } else {
                                        if (_0xbaf66d === DisconnectReason.timedOut) {
                                            console.log('Connection TimedOut, Reconnecting...');
                                            NawBotz();
                                            ;
                                        } else {
                                            _0x2f6a6f.end('Unknown DisconnectReason: ' + _0xbaf66d + '|' + _0x586cad);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            (_0x34aeaa.connection == 'connecting' || _0x34aeaa.receivedPendingNotifications == 'false') && console.log(color('\n\uD83E\uDD4AConnecting...', 'red'));
            (_0x34aeaa.connection == 'open' || _0x34aeaa.receivedPendingNotifications == 'true') && (console.log(color(' ', 'magenta')), console.log(color('\uD83C\uDF3FConnected to => ' + JSON.stringify(_0x2f6a6f.user, null, 2), 'yellow')), await delay(1999), console.log(chalk.yellow('\n\n               ' + chalk.bold.blue('[ DabiOff ]') + '\n\n')), console.log(color('•════════════════════════════════════════════════════════•', 'cyan')), console.log(color('\n' + themeemoji + ' Follow My Github: https://github.com/MaouDabi ', 'yellow')), console.log(color(themeemoji + ' Me?: 6285647853109', 'magenta')), console.log(color(themeemoji + ' Create by Dabioff\n', 'yellow')), console.log(color('•════════════════════════════════════════════════════════•', 'cyan')));
            ;
        } catch (_0x1233ea) {
            console.log('Error in Connection.update ' + _0x1233ea);
            NawBotz();
            ;
        }
    });
    await delay(5555);
    start('2', colors.bold.white('\n\nMenunggu Pesan Baru..'));
    _0x2f6a6f.ev.on('creds.update', await _0xbef84f);
    _0x2f6a6f.ev.on('messages.upsert', async _0x46f8ba => {
        ;
        try {
            const _0x533099 = _0x46f8ba.messages[0];
            if (!_0x533099.message) {
                return;
            }
            _0x533099.message = Object.keys(_0x533099.message)[0] === 'ephemeralMessage' ? _0x533099.message.ephemeralMessage.message : _0x533099.message;
            _0x533099.key && _0x533099.key.remoteJid === 'status@broadcast' && await _0x2f6a6f.readMessages([_0x533099.key]);
            if (!_0x2f6a6f.public && !_0x533099.key.fromMe && _0x46f8ba.type === 'notify') {
                return;
            }
            if (_0x533099.key.id.startsWith('BAE5') && _0x533099.key.id.length === 16) {
                return;
            }
            const _0x206a8a = smsg(_0x2f6a6f, _0x533099, store);
            require('./lib/me/global')(_0x2f6a6f, _0x206a8a, _0x46f8ba, store);
        } catch (_0x425db8) {
            console.log(_0x425db8);
        }
    });
    ;
    async function _0x1e69ce(_0x255064) {
        ;
        if (store) {
            const _0x3f5398 = await store.loadMessage(_0x255064.remoteJid, _0x255064.id);
            return _0x3f5398?.message;
        }
        return { 'conversation': 'Cheems Bot Here' };
    }
    return _0x2f6a6f.ev.on('messages.update', async _0x5300ab => {
        ;
        for (const {
                    key: _0x7fa4e5,
                    update: _0x1a3725
                } of _0x5300ab) {
            if (_0x1a3725.pollUpdates && _0x7fa4e5.fromMe) {
                const _0x44f12a = await _0x1e69ce(_0x7fa4e5);
                if (_0x44f12a) {
                    const _0x46da61 = await getAggregateVotesInPollMessage({
                        'message': _0x44f12a,
                        'pollUpdates': _0x1a3725.pollUpdates
                    });
                    var _0x46c8ff = _0x46da61.filter(_0x1fd04b => _0x1fd04b.voters.length !== 0)[0]?.name;
                    if (_0x46c8ff == undefined) {
                        return;
                    }
                    var _0x9c451b = prefix + _0x46c8ff;
                    _0x2f6a6f.appenTextMessage(_0x9c451b, _0x5300ab);
                }
            }
        }
    }), _0x2f6a6f.sendTextWithMentions = async (_0x140c95, _0x5de12b, _0x107ae8, _0x422e42 = {}) => _0x2f6a6f.sendMessage(_0x140c95, {
        'text': _0x5de12b,
        'contextInfo': { 'mentionedJid': [..._0x5de12b.matchAll(/@(\d{0,16})/g)].map(_0x11f4d9 => _0x11f4d9[1] + '@s.whatsapp.net') },
        ..._0x422e42
    }, { 'quoted': _0x107ae8 }), _0x2f6a6f.decodeJid = _0x36a463 => {
        ;
        if (!_0x36a463) {
            return _0x36a463;
        }
        if (/:\d+@/gi.test(_0x36a463)) {
            let _0x346bda = jidDecode(_0x36a463) || {};
            return _0x346bda.user && _0x346bda.server && _0x346bda.user + '@' + _0x346bda.server || _0x36a463;
        } else {
            return _0x36a463;
        }
    }, _0x2f6a6f.ev.on('contacts.update', _0x114f32 => {
        ;
        for (let _0x32ada3 of _0x114f32) {
            let _0x21425c = _0x2f6a6f.decodeJid(_0x32ada3.id);
            if (store && store.contacts) {
                store.contacts[_0x21425c] = {
                    'id': _0x21425c,
                    'name': _0x32ada3.notify
                };
            }
        }
    }), _0x2f6a6f.getName = (_0x453d5d, _0x394085 = false) => {
        ;
        id = _0x2f6a6f.decodeJid(_0x453d5d);
        _0x394085 = _0x2f6a6f.withoutContact || _0x394085;
        ;
        let _0x439007;
        if (id.endsWith('@g.us')) {
            return new Promise(async _0x3c15b6 => {
                ;
                _0x439007 = store.contacts[id] || {};
                if (!(_0x439007.name || _0x439007.subject)) {
                    _0x439007 = _0x2f6a6f.groupMetadata(id) || {};
                }
                _0x3c15b6(_0x439007.name || _0x439007.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'));
            });
        } else {
            _0x439007 = id === '0@s.whatsapp.net' ? {
                'id': id,
                'name': 'WhatsApp'
            } : id === _0x2f6a6f.decodeJid(_0x2f6a6f.user.id) ? _0x2f6a6f.user : store.contacts[id] || {};
        }
        return (_0x394085 ? '' : _0x439007.name) || _0x439007.subject || _0x439007.verifiedName || PhoneNumber('+' + _0x453d5d.replace('@s.whatsapp.net', '')).getNumber('international');
    }, _0x2f6a6f.parseMention = (_0x2118b1 = '') => {
        ;
        return [..._0x2118b1.matchAll(/@([0-9]{5,16}|0)/g)].map(_0xb6513a => _0xb6513a[1] + '@s.whatsapp.net');
    }, _0x2f6a6f.sendContact = async (_0x29d2e2, _0x17c885, _0x33fadd = '', _0x12be9b = {}) => {
        ;
        let _0x4574a6 = [];
        for (let _0x4a6a17 of _0x17c885) {
            _0x4574a6.push({
                'displayName': await _0x2f6a6f.getName(_0x4a6a17),
                'vcard': 'BEGIN:VCARD\nVERSION:3.0\nN:' + await _0x2f6a6f.getName(_0x4a6a17) + '\nFN:' + await _0x2f6a6f.getName(_0x4a6a17) + '\nitem1.TEL;waid=' + _0x4a6a17 + ':' + _0x4a6a17 + '\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:' + ytname + '\nitem2.X-ABLabel:YouTube\nitem3.URL:' + socialm + '\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;' + location + ';;;;\nitem4.X-ABLabel:Region\nEND:VCARD'
            });
        }
        _0x2f6a6f.sendMessage(_0x29d2e2, {
            'contacts': {
                'displayName': _0x4574a6.length + ' Contact',
                'contacts': _0x4574a6
            },
            ..._0x12be9b
        }, { 'quoted': _0x33fadd });
    }, _0x2f6a6f.setStatus = _0x37deb7 => {
        ;
        return _0x2f6a6f.query({
            'tag': 'iq',
            'attrs': {
                'to': '@s.whatsapp.net',
                'type': 'set',
                'xmlns': 'status'
            },
            'content': [{
                    'tag': 'status',
                    'attrs': {},
                    'content': Buffer.from(_0x37deb7, 'utf-8')
                }]
        }), _0x37deb7;
    }, _0x2f6a6f.public = true, _0x2f6a6f.sendImage = async (_0x3064e5, _0x3cad7f, _0x4b7285 = '', _0x1f594d = '', _0x2976bc) => {
        ;
        let _0x595b0f = Buffer.isBuffer(_0x3cad7f) ? _0x3cad7f : /^data:.*?\/.*?;base64,/i.test(_0x3cad7f) ? Buffer.from(_0x3cad7f.split`,`[1], 'base64') : /^https?:\/\//.test(_0x3cad7f) ? await await getBuffer(_0x3cad7f) : fs.existsSync(_0x3cad7f) ? fs.readFileSync(_0x3cad7f) : Buffer.alloc(0);
        return await _0x2f6a6f.sendMessage(_0x3064e5, {
            'image': _0x595b0f,
            'caption': _0x4b7285,
            ..._0x2976bc
        }, { 'quoted': _0x1f594d });
    }, _0x2f6a6f.sendImageAsSticker = async (_0x56ca8d, _0x560216, _0x239fb9, _0x1c72c2 = {}) => {
        ;
        let _0x39701c = Buffer.isBuffer(_0x560216) ? _0x560216 : /^data:.*?\/.*?;base64,/i.test(_0x560216) ? Buffer.from(_0x560216.split`,`[1], 'base64') : /^https?:\/\//.test(_0x560216) ? await await getBuffer(_0x560216) : fs.existsSync(_0x560216) ? fs.readFileSync(_0x560216) : Buffer.alloc(0), _0x14573f;
        _0x1c72c2 && (_0x1c72c2.packname || _0x1c72c2.author) ? _0x14573f = await writeExifImg(_0x39701c, _0x1c72c2) : _0x14573f = await imageToWebp(_0x39701c);
        await _0x2f6a6f.sendMessage(_0x56ca8d, {
            'sticker': { 'url': _0x14573f },
            ..._0x1c72c2
        }, { 'quoted': _0x239fb9 }).then(_0x3f685c => {
            return fs.unlinkSync(_0x14573f), _0x3f685c;
        });
        ;
    }, _0x2f6a6f.sendVideoAsSticker = async (_0x151f28, _0x16e90f, _0x9b3079, _0x34fbd0 = {}) => {
        ;
        let _0x1c8de9 = Buffer.isBuffer(_0x16e90f) ? _0x16e90f : /^data:.*?\/.*?;base64,/i.test(_0x16e90f) ? Buffer.from(_0x16e90f.split`,`[1], 'base64') : /^https?:\/\//.test(_0x16e90f) ? await await getBuffer(_0x16e90f) : fs.existsSync(_0x16e90f) ? fs.readFileSync(_0x16e90f) : Buffer.alloc(0), _0x27abed;
        return _0x34fbd0 && (_0x34fbd0.packname || _0x34fbd0.author) ? _0x27abed = await writeExifVid(_0x1c8de9, _0x34fbd0) : _0x27abed = await videoToWebp(_0x1c8de9), await _0x2f6a6f.sendMessage(_0x151f28, {
            'sticker': { 'url': _0x27abed },
            ..._0x34fbd0
        }, { 'quoted': _0x9b3079 }), _0x27abed;
    }, _0x2f6a6f.copyNForward = async (_0x36379f, _0x466b04, _0x2df35d = false, _0x308799 = {}) => {
        ;
        let _0x5dfd59;
        _0x308799.readViewOnce && (_0x466b04.message = _0x466b04.message && _0x466b04.message.ephemeralMessage && _0x466b04.message.ephemeralMessage.message ? _0x466b04.message.ephemeralMessage.message : _0x466b04.message || undefined, _0x5dfd59 = Object.keys(_0x466b04.message.viewOnceMessage.message)[0], delete (_0x466b04.message && _0x466b04.message.ignore ? _0x466b04.message.ignore : _0x466b04.message || undefined), delete _0x466b04.message.viewOnceMessage.message[_0x5dfd59].viewOnce, _0x466b04.message = { ..._0x466b04.message.viewOnceMessage.message });
        let _0x2d5437 = Object.keys(_0x466b04.message)[0], _0x106509 = await generateForwardMessageContent(_0x466b04, _0x2df35d), _0x256aed = Object.keys(_0x106509)[0], _0x32415d = {};
        if (_0x2d5437 != 'conversation') {
            _0x32415d = _0x466b04.message[_0x2d5437].contextInfo;
        }
        _0x106509[_0x256aed].contextInfo = {
            ..._0x32415d,
            ..._0x106509[_0x256aed].contextInfo
        };
        const _0x36c614 = await generateWAMessageFromContent(_0x36379f, _0x106509, _0x308799 ? {
            ..._0x106509[_0x256aed],
            ..._0x308799,
            ..._0x308799.contextInfo ? {
                'contextInfo': {
                    ..._0x106509[_0x256aed].contextInfo,
                    ..._0x308799.contextInfo
                }
            } : {}
        } : {});
        return await _0x2f6a6f.relayMessage(_0x36379f, _0x36c614.message, { 'messageId': _0x36c614.key.id }), _0x36c614;
    }, _0x2f6a6f.downloadAndSaveMediaMessage = async (_0x19543d, _0x319c8d, _0x42f9ea = true) => {
        ;
        let _0x5835bb = _0x19543d.msg ? _0x19543d.msg : _0x19543d, _0x4c13d1 = (_0x19543d.msg || _0x19543d).mimetype || '', _0x490442 = _0x19543d.mtype ? _0x19543d.mtype.replace(/Message/gi, '') : _0x4c13d1.split('/')[0];
        const _0x1b31ee = await downloadContentFromMessage(_0x5835bb, _0x490442);
        let _0x369520 = Buffer.from([]);
        for await (const _0x3b8a3e of _0x1b31ee) {
            _0x369520 = Buffer.concat([
                _0x369520,
                _0x3b8a3e
            ]);
        }
        let _0x33a902 = await FileType.fromBuffer(_0x369520);
        return trueFileName = _0x42f9ea ? _0x319c8d + '.' + _0x33a902.ext : _0x319c8d, await fs.writeFileSync(trueFileName, _0x369520), trueFileName;
    }, _0x2f6a6f.downloadMediaMessage = async _0x431f2a => {
        ;
        let _0x129e2b = (_0x431f2a.msg || _0x431f2a).mimetype || '', _0x5ccb32 = _0x431f2a.mtype ? _0x431f2a.mtype.replace(/Message/gi, '') : _0x129e2b.split('/')[0];
        const _0x5bb8fd = await downloadContentFromMessage(_0x431f2a, _0x5ccb32);
        let _0x38a786 = Buffer.from([]);
        for await (const _0x15ac27 of _0x5bb8fd) {
            _0x38a786 = Buffer.concat([
                _0x38a786,
                _0x15ac27
            ]);
        }
        return _0x38a786;
    }, _0x2f6a6f.getFile = async (_0xc540d4, _0x5d4c23) => {
        ;
        let _0x720918, _0x4da941 = Buffer.isBuffer(_0xc540d4) ? _0xc540d4 : /^data:.*?\/.*?;base64,/i.test(_0xc540d4) ? Buffer.from(_0xc540d4.split`,`[1], 'base64') : /^https?:\/\//.test(_0xc540d4) ? await (_0x720918 = await getBuffer(_0xc540d4)) : fs.existsSync(_0xc540d4) ? (filename = _0xc540d4, fs.readFileSync(_0xc540d4)) : typeof _0xc540d4 === 'string' ? _0xc540d4 : Buffer.alloc(0), _0x4402cd = await FileType.fromBuffer(_0x4da941) || {
                'mime': 'application/octet-stream',
                'ext': '.bin'
            };
        filename = path.join(__filename, './lib' + new Date() * 1 + '.' + _0x4402cd.ext);
        if (_0x4da941 && _0x5d4c23) {
            fs.promises.writeFile(filename, _0x4da941);
        }
        return {
            'res': _0x720918,
            'filename': filename,
            'size': await getSizeMedia(_0x4da941),
            ..._0x4402cd,
            'data': _0x4da941
        };
    }, _0x2f6a6f.sendMedia = async (_0x2d66b8, _0x46f9d8, _0x56db8d = '', _0x5aaca5 = '', _0x233200 = '', _0x1bb973 = {}) => {
        ;
        let _0x3ac8d8 = await _0x2f6a6f.getFile(_0x46f9d8, true), {
                mime: _0x266093,
                ext: _0x12bfe1,
                res: _0x3de94c,
                data: _0x2c7602,
                filename: _0x1a0ddd
            } = _0x3ac8d8;
        if (_0x3de94c && _0x3de94c.status !== 200 || file.length <= 65536) {
            try {
                throw { 'json': JSON.parse(file.toString()) };
            } catch (_0x4b2abb) {
                if (_0x4b2abb.json) {
                    throw _0x4b2abb.json;
                }
            }
        }
        let _0x20e48e = '', _0x1bbdc2 = _0x266093, _0x73443f = _0x1a0ddd;
        if (_0x1bb973.asDocument) {
            _0x20e48e = 'document';
        }
        if (_0x1bb973.asSticker || /webp/.test(_0x266093)) {
            let {writeExif: _0x559b65} = require('./lib/exif'), _0x5eeda9 = {
                    'mimetype': _0x266093,
                    'data': _0x2c7602
                }; //ini
            _0x73443f = await _0x559b65(_0x5eeda9, {
                'packname': _0x1bb973.packname ? _0x1bb973.packname : global.packname,
                'author': _0x1bb973.author ? _0x1bb973.author : global.author,
                'categories': _0x1bb973.categories ? _0x1bb973.categories : []
            });
            await fs.promises.unlink(_0x1a0ddd);
            _0x20e48e = 'sticker';
            _0x1bbdc2 = 'image/webp';
            ;
        } else {
            if (/image/.test(_0x266093)) {
                _0x20e48e = 'image';
            } else {
                if (/video/.test(_0x266093)) {
                    _0x20e48e = 'video';
                } else {
                    if (/audio/.test(_0x266093)) {
                        _0x20e48e = 'audio';
                    } else {
                        _0x20e48e = 'document';
                    }
                }
            }
        }
        return await _0x2f6a6f.sendMessage(_0x2d66b8, {
            [_0x20e48e]: { 'url': _0x73443f },
            'caption': _0x5aaca5,
            'mimetype': _0x1bbdc2,
            'fileName': _0x56db8d,
            ..._0x1bb973
        }, {
            'quoted': _0x233200,
            ..._0x1bb973
        }), fs.promises.unlink(_0x73443f);
    }, _0x2f6a6f.sendText = (_0x4bcae1, _0x493169, _0x56fa62 = '', _0x4e3966) => _0x2f6a6f.sendMessage(_0x4bcae1, {
        'text': _0x493169,
        ..._0x4e3966
    }, { 'quoted': _0x56fa62 }), _0x2f6a6f.serializeM = _0x57e43c => smsg(_0x2f6a6f, _0x57e43c, store), _0x2f6a6f.sendButtonText = (_0x33bc79, _0x16d4b1 = [], _0x5995c6, _0x44fd6b, _0x2c89ee = '', _0x5f1831 = {}) => {
        ;
        let _0x37bca4 = {
            'text': _0x5995c6,
            'footer': _0x44fd6b,
            'buttons': _0x16d4b1,
            'headerType': 2,
            ..._0x5f1831
        };
        _0x2f6a6f.sendMessage(_0x33bc79, _0x37bca4, {
            'quoted': _0x2c89ee,
            ..._0x5f1831
        });
    }, _0x2f6a6f.sendKatalog = async (_0x1c8a92, _0x4bb46b = '', _0x1d59f9 = '', _0x359ccd, _0x495821 = {}) => {
        ;
        let _0x1c1ce5 = await prepareWAMessageMedia({ 'image': _0x359ccd }, { 'upload': _0x2f6a6f.waUploadToServer });
        const _0x432ac7 = generateWAMessageFromContent(_0x1c8a92, {
            'productMessage': {
                'product': {
                    'productImage': _0x1c1ce5.imageMessage,
                    'productId': '9999',
                    'title': _0x4bb46b,
                    'description': _0x1d59f9,
                    'currencyCode': 'INR',
                    'priceAmount1000': '100000',
                    'url': '' + websitex,
                    'productImageCount': 1,
                    'salePriceAmount1000': '0'
                },
                'businessOwnerJid': ownernumber + '@s.whatsapp.net'
            }
        }, _0x495821);
        return _0x2f6a6f.relayMessage(_0x1c8a92, _0x432ac7.message, { 'messageId': _0x432ac7.key.id });
    }, _0x2f6a6f.send5ButLoc = async (_0x55bd49, _0x5c97b1 = '', _0x1d7038 = '', _0x253f2b, _0x4ea064 = [], _0x38ed88 = {}) => {
        ;
        var _0x21be2d = generateWAMessageFromContent(_0x55bd49, proto.Message.fromObject({
            'templateMessage': {
                'hydratedTemplate': {
                    'hydratedContentText': _0x5c97b1,
                    'locationMessage': { 'jpegThumbnail': _0x253f2b },
                    'hydratedFooterText': _0x1d7038,
                    'hydratedButtons': _0x4ea064
                }
            }
        }), _0x38ed88);
        _0x2f6a6f.relayMessage(_0x55bd49, _0x21be2d.message, { 'messageId': _0x21be2d.key.id });
    }, _0x2f6a6f.sendButImg = async (_0x295204, _0x49e2aa, _0x5d50fd, _0x59d52a, _0x5cfbd0) => {
        ;
        let _0x182b82 = Buffer.isBuffer(_0x49e2aa) ? _0x49e2aa : /^data:.*?\/.*?;base64,/i.test(_0x49e2aa) ? Buffer.from(_0x49e2aa.split`,`[1], 'base64') : /^https?:\/\//.test(_0x49e2aa) ? await await getBuffer(_0x49e2aa) : fs.existsSync(_0x49e2aa) ? fs.readFileSync(_0x49e2aa) : Buffer.alloc(0), _0x43e043 = {
                'image': _0x182b82,
                'jpegThumbnail': _0x182b82,
                'caption': _0x5d50fd,
                'fileLength': '1',
                'footer': _0x59d52a,
                'buttons': _0x5cfbd0,
                'headerType': 4
            };
        _0x2f6a6f.sendMessage(_0x295204, _0x43e043, { 'quoted': m });
    }, _0x2f6a6f.sendFile = async (_0x40e2a6, _0x2b77b4, _0x438bd1 = '', _0x5c1cdf = '', _0x24e878, _0x4cf1e7 = false, _0x183bdf = {}) => {
        ;
        let _0x3c9262 = await _0x2f6a6f.getFile(_0x2b77b4, true), {
                res: _0x273ca4,
                data: _0x24238e,
                filename: _0x1edad5
            } = _0x3c9262;
        if (_0x273ca4 && _0x273ca4.status !== 200 || _0x24238e.length <= 65536) {
            try {
                throw { 'json': JSON.parse(_0x24238e.toString()) };
            } catch (_0x31a76f) {
                if (_0x31a76f.json) {
                    throw _0x31a76f.json;
                }
            }
        }
        const _0xb8f29b = fs.statSync(_0x1edad5).size / 1024 / 1024;
        if (_0xb8f29b >= 1800) {
            throw new Error(' The file size is too large\n\n');
        }
        let _0xbb890e = { quoted: _0x24e878 };
        if (_0x24e878) {
            ;
        }
        if (!_0x3c9262) {
            _0x183bdf.asDocument = true;
        }
        let _0x474afb = '', _0xa09c2d = _0x183bdf.mimetype || _0x3c9262.mime, _0x1f592e;
        if (/webp/.test(_0x3c9262.mime) || /image/.test(_0x3c9262.mime) && _0x183bdf.asSticker) {
            _0x474afb = 'sticker';
        } else {
            if (/image/.test(_0x3c9262.mime) || /webp/.test(_0x3c9262.mime) && _0x183bdf.asImage) {
                _0x474afb = 'image';
            } else {
                if (/video/.test(_0x3c9262.mime)) {
                    _0x474afb = 'video';
                } else {
                    if (/audio/.test(_0x3c9262.mime)) {
                        _0x1f592e = await toAudio(_0x24238e, _0x3c9262.ext);
                        _0x24238e = _0x1f592e.data;
                        _0x1edad5 = _0x1f592e.filename;
                        _0x474afb = 'audio';
                        _0xa09c2d = _0x183bdf.mimetype || 'audio/ogg; codecs=opus';
                        ;
                    } else {
                        _0x474afb = 'document';
                    }
                }
            }
        }
        if (_0x183bdf.asDocument) {
            _0x474afb = 'document';
        }
        delete _0x183bdf.asSticker;
        delete _0x183bdf.asLocation;
        delete _0x183bdf.asVideo;
        delete _0x183bdf.asDocument;
        delete _0x183bdf.asImage;
        ;
        let _0xdcbd0d = {
                ..._0x183bdf,
                'caption': _0x5c1cdf,
                'ptt': _0x4cf1e7,
                [_0x474afb]: { 'url': _0x1edad5 },
                'mimetype': _0xa09c2d,
                'fileName': _0x438bd1 || _0x1edad5.split('/').pop()
            }, _0x48adca;
        try {
            _0x48adca = await _0x2f6a6f.sendMessage(_0x40e2a6, _0xdcbd0d, {
                ..._0xbb890e,
                ..._0x183bdf
            });
        } catch (_0x2e90aa) {
            console.error(_0x2e90aa);
            _0x48adca = null;
            ;
        } finally {
            if (!_0x48adca) {
                _0x48adca = await _0x2f6a6f.sendMessage(_0x40e2a6, {
                    ..._0xdcbd0d,
                    [_0x474afb]: _0x24238e
                }, {
                    ..._0xbb890e,
                    ..._0x183bdf
                });
            }
            return _0x24238e = null, _0x48adca;
        }
    }, _0x2f6a6f.sendFileUrl = async (_0x57f035, _0x2c376c, _0x1db24f, _0x5c5717, _0x59d3cc = {}) => {
        ;
        let _0x150be2 = '', _0x42ce3c = await axios.head(_0x2c376c);
        _0x150be2 = _0x42ce3c.headers['content-type'];
        if (_0x150be2.split('/')[1] === 'gif') {
            return _0x2f6a6f.sendMessage(_0x57f035, {
                'video': await getBuffer(_0x2c376c),
                'caption': _0x1db24f,
                'gifPlayback': true,
                ..._0x59d3cc
            }, {
                'quoted': _0x5c5717,
                ..._0x59d3cc
            });
        }
        let _0x352a2a = _0x150be2.split('/')[0] + 'Message';
        if (_0x150be2 === 'application/pdf') {
            return _0x2f6a6f.sendMessage(_0x57f035, {
                'document': await getBuffer(_0x2c376c),
                'mimetype': 'application/pdf',
                'caption': _0x1db24f,
                ..._0x59d3cc
            }, {
                'quoted': _0x5c5717,
                ..._0x59d3cc
            });
        }
        if (_0x150be2.split('/')[0] === 'image') {
            return _0x2f6a6f.sendMessage(_0x57f035, {
                'image': await getBuffer(_0x2c376c),
                'caption': _0x1db24f,
                ..._0x59d3cc
            }, {
                'quoted': _0x5c5717,
                ..._0x59d3cc
            });
        }
        if (_0x150be2.split('/')[0] === 'video') {
            return _0x2f6a6f.sendMessage(_0x57f035, {
                'video': await getBuffer(_0x2c376c),
                'caption': _0x1db24f,
                'mimetype': 'video/mp4',
                ..._0x59d3cc
            }, {
                'quoted': _0x5c5717,
                ..._0x59d3cc
            });
        }
        if (_0x150be2.split('/')[0] === 'audio') {
            return _0x2f6a6f.sendMessage(_0x57f035, {
                'audio': await getBuffer(_0x2c376c),
                'caption': _0x1db24f,
                'mimetype': 'audio/mpeg',
                ..._0x59d3cc
            }, {
                'quoted': _0x5c5717,
                ..._0x59d3cc
            });
        }
    }, _0x2f6a6f.sendPoll = (_0x2d45e6, _0x360cf7 = '', _0x5d329a = [], _0x51ad5f = 1) => {
        return _0x2f6a6f.sendMessage(_0x2d45e6, {
            'poll': {
                'name': _0x360cf7,
                'values': _0x5d329a,
                'selectableCount': _0x51ad5f
            }
        });
    }, _0x2f6a6f;
}
;
NawBotz();
process.on('uncaughtException', function (_0x300434) {
    ;
    console.log('Caught exception: ', _0x300434);
});
;