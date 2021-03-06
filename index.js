/**
 * index.js - Loads the Test adapter.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

'use strict';

const TuyaAdapter = require("./lib/tuya-adapter");

module.exports = (addonManager, manifest) => {
    new TuyaAdapter(addonManager, manifest);
};