let Contacts = require('../models/contacts');

exports.list = function (req, res, next){
    
    Contacts.find((err, contactsList) => {
        console.log(contactsList);
        if(err)
        {
            return console.error(err);
        }
        else{
            // console.log(contactsList);
            res.render(
                'contacts/list',
                 {
                      title: 'Contacts List',
                      ContactsList: contactsList
                }
            );
        }
    });

   // res.render('index', { title: 'About' });
}