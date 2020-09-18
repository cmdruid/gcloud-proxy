export default function authenticate(req, res, next) {
    /* Authentication middleware function. */

    const bearer = req.headers['authorization'],
          token  = (bearer) ? bearer.split(' ')[1] : '';

    if (token === process.env.API_KEY) return next();
    
    return res.sendStatus(403);
};
