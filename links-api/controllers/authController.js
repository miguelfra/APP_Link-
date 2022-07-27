const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../database');
const authController = {
    signup: async (req, res) => {
        const { password, username, email } = req.body;
        const passwordHas = await encryptPassword(password);
        try {
            pool.query(`INSERT INTO users(username, email, password) VALUES('${username}', '${email}', '${passwordHas}')`, (err, row) => {
                if (!err) {
                    const token = jwt.sign({ id: row.insertId }, 'links-api', {
                        expiresIn: 86400
                    })

                    res.json({ token })
                } else {
                    console.log(err);
                }
            })
        } catch (error) {
            res.json(error)
        }
    },

    signIn: async (req, res) => {
         try {
            const { username, password } = req.body;
            
            await pool.query(`SELECT * FROM users WHERE username = ?`, username , async (err, row) => {
                if (row.length == 0) return res.status(400).json({ message: 'User not Found' })

                const matchPassword = await comparePassword(password, row[0].password)
                if (!matchPassword) return res.status(401).json({ message: 'Invalid Password' })

                const token = jwt.sign({ id: row[0].id }, 'links-api', {
                    expiresIn: 86400
                })

                res.json({ token });
            })
        } catch (error) {
            
        }

    }

}


const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}
const comparePassword = async (password, dbPassword) => {
    return await bcrypt.compare(password, dbPassword)
}

module.exports = authController; 