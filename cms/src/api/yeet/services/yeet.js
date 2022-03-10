'use strict';

/**
 * yeet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yeet.yeet');
