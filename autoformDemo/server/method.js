/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */

Meteor.methods({
    quickMethod: function () {
        console.log('method call with arguments',arguments);
        //console.log(JSON.stringify(doc));
        //check(doc,Schemas.Books);
    }
})