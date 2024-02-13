var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    } //localhost:3000/users/example
);
router.get('/example/:nimi',
    function(request,response){
        response.send('Hello '+request.params.nimi);
        console.log(request.params.nimi);
    } 
    //localhost:3000/users/example/Jim
);
router.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    } 
    //localhost:3000/users/example/Jim&Jones
);
router.post('/',
    function(request,response){
        response.send(request.body.firstName+" "+request.body.lastName);
        console.log(request.body.firstName+" "+request.body.lastName);
    }
);
module.exports = router;
