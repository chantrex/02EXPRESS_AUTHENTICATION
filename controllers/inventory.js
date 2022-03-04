let Inventory = require('../models/inventory');

exports.list = function (req, res, next){
    
    Inventory.find((err, inventoryList) => {
        console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else{
            // console.log(inventoryList);
            res.render(
                'inventory/list',
                 {
                      title: 'Inventory List',
                      InventoryList: inventoryList
                }
            );
        }
    });

   // res.render('index', { title: 'About' });
}