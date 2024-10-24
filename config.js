const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fKYWxQLA#O36W0I3_B7tLp9LUx0mM51w7GPJ0ZhReaTm9kPukVN0",
MONGODB: process.env.MONGODB || "",
};
