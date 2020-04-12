const { ITEM_NAME } = require("./item_name");
const { SulfurasItem, AgedBrieItem, BackStagePassesItem } = require("./item");
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      item.updateQuality();
    });

    return this.items;
  }
}

module.exports = {
  Shop,
};
