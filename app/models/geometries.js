const observableModule = require("data/observable");
const topmost = require("ui/frame").topmost;

function Geometries() {
  let viewModel = observableModule.fromObject({
    items: [
      {
        itemType: 'post',
        color: 'white',
        title: 'Cube',
        image: 'https://www.google.com/images/errors/logo_sm_2.png'
      },
      {
        itemType: 'post',
        color: 'gray',
        title: "Jibo",
        image: 'https://cdn.shopify.com/s/files/1/2181/1933/products/JiboBoxclear_400x400.png?v=1508250298'
      },
      {
        itemType: 'post',
        color: 'gray',
        title: "Sphere",
        image: 'https://cdn.shopify.com/s/files/1/2181/1933/products/JiboBoxclear_400x400.png?v=1508250298'
      }
    ],

    selectItemTemplate(item, index, items) {
      return item.itemType;
    },

    onItemTap(args, index) {
      this.selected = args.view.bindingContext;
      this.selected.type = index;
      topmost().navigate({
        moduleName: "./home/home-page",
        //context: this.selected
      });
    }
  });

  return viewModel;
}

module.exports = Geometries;
