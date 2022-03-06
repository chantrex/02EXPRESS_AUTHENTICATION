let Contacts = require('../models/contacts');
const inventory = require('../models/inventory');

exports.list = function (req, res, next){
    
    Contacts.find((err, contactsList) => {
        console.log(contactsList);
        if(err)
        {
            return console.error(err);
        }
        else{
            res.render(
                'contacts/list',
                 {
                      title: 'Contacts List',
                      ContactsList: contactsList
                }
            );
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
   
    let newContact = Contacts();

    res.render('contacts/add_edit', {
        title: 'Add a new Business Contact',
        contacts: newContact
    })
}

module.exports.processAddPage = (req, res, next) => {

    let newContact = Contacts({
        _id: req.body.id,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });


    Contacts.create(newContact, (err, contacts) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business list
            console.log(contacts);
            res.redirect('/contacts/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let _id = req.params.id;
    Contacts.findById(id, (err, movie) => {
      if (err) 
      {
        console/log(err);
        res.end(err);
      } 
      else
       {
        res.render("contacts/add_edit", {
            title: "Edit Contact",
            contacts: contactToEdit,
        });
      }
    });
  };
  
  module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updateContact = Contacts({
        _id: req.body.id,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });
  

  inventory.updateOne({_id: id}, updateContact, (err) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect("/contacts/list");
        }
     });
}  


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
  
    Contacts.remove({ _id: id }, (err) => {
      if (err) 
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect("/contacts/list");
      }
    });
};
