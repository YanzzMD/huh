const {
    default: makeWASocket,
    makeWALegacySocket,
    BufferJSON,
    Browsers,
    initInMemoryKeyStore,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    DisconnectReason,
    useMultiFileAuthState,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateWAMessage,
    generateForwardMessageContent,
    generateWAMessageContent, 
    generateWAMessageFromContent,
    getAggregateVotesInPollMessage,
    WAMessageStubType,
    getContentType,
    relayMessage,
    WA_DEFAULT_EPHEMERAL,
    makeCacheableSignalKeyStore
} = require("baileys")
global.getAggregateVotesInPollMessage = getAggregateVotesInPollMessage
global.makeCacheableSignalKeyStore = makeCacheableSignalKeyStore
global.makeWASocket = makeWASocket
global.makeWALegacySocket = makeWALegacySocket
global.BufferJSON = BufferJSON
global.Browsers = Browsers
global.initInMemoryKeyStore = initInMemoryKeyStore
global.extractMessageContent = extractMessageContent
global.makeInMemoryStore = makeInMemoryStore
global.proto = proto
global.DisconnectReason = DisconnectReason
global.useMultiFileAuthState = useMultiFileAuthState
global.AnyMessageContent = AnyMessageContent
global.fetchLatestBaileysVersion = fetchLatestBaileysVersion
global.prepareWAMessageMedia = prepareWAMessageMedia
global.downloadContentFromMessage = downloadContentFromMessage
global.getBinaryNodeChild = getBinaryNodeChild
global.jidDecode = jidDecode
global.areJidsSameUser = areJidsSameUser
global.generateWAMessage = generateWAMessage
global.generateForwardMessageContent = generateForwardMessageContent
global.generateWAMessageContent = generateWAMessageContent
global.generateWAMessageFromContent = generateWAMessageFromContent
global.WAMessageStubType = WAMessageStubType
global.getContentType = getContentType
global.relayMessage = relayMessage
global.WA_DEFAULT_EPHEMERAL = WA_DEFAULT_EPHEMERAL
module.export = {
module: {
    axios: require('axios'),
    boom: require('@hapi/boom'),
    baileys: require('@whiskeysocket/baileys'),
    chalk: require('chalk'),
    crypto: require('crypto'),
    cheerio: require('cheerio'),
    child_process: require('child_process'),
    cookie: require('cookie'),
    chokidar: require('chokidar'),
    fs: require('fs'),
    fsx: require('fs-extra'),
    fetch: require('node-fetch'),
    figlet: require('figlet'),
    FormData: require('form-data'),
    FileType: require('file-type'),
	ffmpeg: require('fluent-ffmpeg'),
	human: require('human-readable'),
	Jimp: require('jimp'),
	jsdom: require('jsdom'),
	keyeddb: require('@whiskeysockets/baileys'),
	lodash: require('lodash'),
	moment: require('moment-timezone'),
	ms: require('ms'),
	nodecron: require('node-cron'),
 	os: require('os'),
 	openai: require('openai'),
	path: require('path'),
	perf_hooks: require('perf_hooks'),
	pino: require('pino'),
	parsems: require('parse-ms'),
	process: require('process'),
	PhoneNumber: require('awesome-phonenumber'),
	qs: require('qs'),
    qrcodeterminal: require('qrcode-terminal'),
    qrcode: require('qrcode'),
    request: require('request'),
    speed: require('performance-now'),
    stream: require('stream'),
    syntaxerror: require('syntax-error'),
    util: require('util'),
    Utils: require('@whiskeysockets/baileys/lib/Utils'),
    yargs: require('yargs'),
    webp: require('node-webpmux')
}
}