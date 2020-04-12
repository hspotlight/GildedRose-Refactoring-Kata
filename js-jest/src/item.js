class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class SulfurasItem extends Item {
}
exports.Item = Item;
exports.SulfurasItem = SulfurasItem;