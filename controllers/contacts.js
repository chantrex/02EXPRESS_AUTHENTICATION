let Contacts = require('../models/contacts');

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
     Contacts: newContact
    })
}

module.exports.processAddPage = (req, res, next) => {

    let newContact = Contacts({
        _id: req.body.id,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });


    Contacts.create(newContact, (err, contac) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business list
            res.redirect('contacts/list');
        }
    });
}