module.exports = (req, res, next) =>{
    if(req.query.age < 18){
        res.send('Invalid age');
    } else if(!req.query.age){
        res.send('Please enter a valid age');
    }else{
        next();
    }
}