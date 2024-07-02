'use strict';

/**
 * drivers router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::drivers.drivers');
