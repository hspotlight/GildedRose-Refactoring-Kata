class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class SulfurasItem extends Item {
}
class AgedBrieItem extends Item {
}
class BackStagePassesItem extends Item {

}
exports.Item = Item;
exports.SulfurasItem = SulfurasItem;
exports.AgedBrieItem = AgedBrieItem;
exports.BackStagePassesItem = BackStagePassesItem;