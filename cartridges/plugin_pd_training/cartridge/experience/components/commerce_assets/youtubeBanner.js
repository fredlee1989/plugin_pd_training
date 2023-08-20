'use strict';
/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for the Youtube Banner component
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.videoId = content.videoId;
    model.videoWidth = content.videoWidth ? content.videoWidth : 0;
    model.videoHeight = content.videoHeight ? content.videoHeight : 390;
    model.autoplay = content.autoplay ? '1' : '0';
    model.playerControls = content.playerControls ? '1' : '0';
    model.videoLoop = content.videoLoop ? '1' : '0';

    // instruct 24 hours relative pagecache
    var expires = new Date();
    expires.setDate(expires.getDate() + 1); // this handles overflow automatically
    response.setExpires(expires);

    return new Template('experience/components/commerce_assets/youtubeBanner').render(model).text;
};
