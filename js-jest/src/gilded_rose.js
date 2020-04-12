const { ITEM_NAME } = require("./item_name");
const { Item } = require("./item");
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == ITEM_NAME.SULFURAS) {
        continue;
      }

      this.updateItemQuality(this.items[i]);

      this.updateSellInDate(this.items[i]);

      this.updateItemQualityAfterSellByDate(this.items[i]);
    }

    return this.items;
  }

  updateItemQuality(item) {
    const itemName = item.name;
    if (itemName == ITEM_NAME.AGED_BRIE ||
      itemName == ITEM_NAME.BACKSTAGE_PASSES) {
      if (this.isQualityLessThan50(item.quality)) {
        item.quality = item.quality + 1;
        if (itemName == ITEM_NAME.BACKSTAGE_PASSES) {
          if (this.isQualityLessThan50(item.quality)) {
            if (item.sellIn < 11) {
              item.quality = item.quality + 1;
            }
            if (item.sellIn < 6) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    else {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }
  }

  updateSellInDate(item) {
    item.sellIn = item.sellIn - 1;
  }

  updateItemQualityAfterSellByDate(item) {
    if (item.sellIn < 0) {
      if (item.name == ITEM_NAME.AGED_BRIE) {
        if (this.isQualityLessThan50(item.quality)) {
          item.quality = item.quality + 1;
        }
      }
      else if (item.name == ITEM_NAME.BACKSTAGE_PASSES) {
        item.quality = 0;
      }
      else {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
    }
  }

  isQualityLessThan50(quality) {
    return quality < 50;
  }
}

module.exports = {
  Item,
  Shop,
};
