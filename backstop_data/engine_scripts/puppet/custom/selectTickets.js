module.exports = async page => {
  await page.select('#ticket-quantity', '3');
}