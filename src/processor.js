// process the Mail object based on everything
const config = require('../config.json');
const oooConfig = require('../oooConfig.json');
const send = require('./mailSender');
const checkTriggers = require('./triggersCheck.js');
const applyActions = require('./actionApply.js');

// find all js files in one folder and import them
const fs = require('fs').promises;
const path = require('path');
const rulesFolderPath = path.join(__dirname, '..', 'rules');
let rules = [];


var isLoaded = false;

async function loadRules() {
    try {
        // Read all files in the folder
        if (isLoaded)
            return true;

        const files = await fs.readdir(rulesFolderPath);
        const jsFiles = files.filter(file => path.extname(file) === '.js');

        rules = jsFiles.map(file => require(path.join(rulesFolderPath, file)));
        isLoaded = true;

        return true;
    } catch (err) {
        console.error('ERROR: Could not find the folder rules in the main directory.', err);
        process.exit(1);
    }
}

module.exports.load = loadRules;

module.exports.process = (mail) => {
    console.log('processing mail', mail);
    console.log('check load: ', rules);
    
    // 1. Check if OOO is enabled.
    if (oooConfig.status) {
        console.log('ooo is on');
        // 1.1- check if blacklist is enabled
        if (oooConfig.blacklist_status) {

            var isBlacklisted = false;

            // If it is, check if email is in blacklist
            if (oooConfig.blacklist.includes(mail.getFrom())) {
                isBlacklisted = true;
            }
            // Check if it follows the blacklist rule. To do.
            
            if (isBlacklisted) {
                console.log('blacklisted email');
                return;
            }
            // Not blacklisted, continue
        }

        // 1.2 - check if whitelist is enabled
        if (oooConfig.whitelist_status) {

            var isWhitelisted = false;

            // If it is, check if email is in whitelist
            if (oooConfig.whitelist.includes(mail.getFrom())) {
                console.log('not whitelisted email');
                return;
            }
            // Check if it follows the whitelist rule. To do.
            
            // If it wasnt whitelisted for ooo, then just reject.
            if (!isWhitelisted) {
                    console.log('Not whitelisted email');
                    return;
            }

            // Whitelisted, continue
        }

        // Proceed with OOO:
        console.log("OOO is on, sending email");
        send(mail.getFromAddress(), oooConfig.subject, oooConfig.message, mail.getID());
        
    }


    // 2. OOO is not enabled, check for rules and triggers
    for (let rule of rules) {
        
        // Check if the triggers in the rule apply
        if (checkTriggers(mail, rule.trigger)) {
            // Apply the actions in the rule
            applyActions(rule.actions, mail);
        }

    }
}