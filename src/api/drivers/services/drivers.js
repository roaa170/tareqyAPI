'use strict';

/**
 * drivers service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drivers.drivers');
