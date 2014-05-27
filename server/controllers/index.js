var DrugController   = require('./drug.js');
var TweetController  = require('./tweet.js');
var EffectController = require('./effect.js');
var Models           = require('../models');
var controllerUtils  = require('./controllerUtils.js');

module.exports = {
  getDrugs: controllerUtils.robustQuery(Models.Drug, {
    matching: {},
    fields: "name company",
    options: {}
  }),

  getEffects: controllerUtils.robustQuery(Models.Effect, {
    matching: {},
    fields: "name",
    options: {}
  }),

  getTweets: controllerUtils.robustQuery(Models.Tweet, {
    matching: {},
    fields: "tweet link",
    options: {}
  }),

  postDrug: controllerUtils.robustPost(Models.Drug, {
    name: "name",
    company: "company"
  }),

  postEffect: controllerUtils.robustPost(Models.Effect, {
    name: "name"
  }),

  postTweet: controllerUtils.robustPost(Models.Tweet, {
    link: 'link',
    tweet: 'tweet'
  }),

  postEffectToDrug: EffectController.postEffectToDrug,
  getEffectsFromDrug: EffectController.getEffectsFromDrug,
};
