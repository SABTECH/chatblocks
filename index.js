const Bot = require("./Bot");
const Component = require("./Component");

const Block = require("./components/Block");
const Text = require("./components/Text");
const ButtonTemplate = require("./components/ButtonTemplate");
const Button = require("./components/Button");
const QuickReply = require("./components/QuickReply");
const QuickReplies = require("./components/QuickReplies");
const GenericTemplate = require("./components/GenericTemplate");
const MediaTemplate = require("./components/MediaTemplate");
const ListTemplate = require("./components/ListTemplate");

const MarkSeen = require("./components/MarkSeen");
const TypingOn = require("./components/TypingOn");
const TypingOff = require("./components/TypingOff");

const createElement = require("./createElement");

module.exports = {
    Bot,
    Component,
    Block,
    Text,
    ButtonTemplate,
    Button,
    QuickReply,
    QuickReplies,
    GenericTemplate,
    MediaTemplate,
    ListTemplate,
    MarkSeen,
    TypingOn,
    TypingOff,
    createElement
};