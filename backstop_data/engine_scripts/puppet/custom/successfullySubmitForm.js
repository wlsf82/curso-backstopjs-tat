const fillMandatoryFields = require('./fillMandatoryFields');

module.exports = async page => {
  await fillMandatoryFields(page);
  await page.click('button[type="submit"]');
}