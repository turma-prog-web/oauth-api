const customError = require('../../helpers/customError')
const { SUCCESS } = require('../../helpers/http-status-code')

const authenticate = (req, res) => {
    if(!req.user){
        const { preconditionFiled } = customError;
        return res.status(preconditionFiled.statusCode).send(preconditionFiled)
    }
    const user = handlerUserInformations(req.user);
    return res.status(SUCCESS).send({ user });
}


const handlerUserInformations = (user) => ({
    name: user.provider == "github" ? user.username : user.displayName,
    code: user.id,
    email: user?.emails[0]?.value || '',
    picture: user.photos[0]?.value,
    active: true
})


module.exports = { authenticate }