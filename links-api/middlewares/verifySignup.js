const pool = require('../database');

const checkDuplicateUser = async (req, res, next) => {
   const {username} = req.body; 
   await pool.query('SELECT * FROM users WHERE username = ?', username, (err,row) => {
   if(row.length > 0) return res.status(401).json({ message: 'username alredy exits' });

   next()
 })
} 


module.exports = checkDuplicateUser;