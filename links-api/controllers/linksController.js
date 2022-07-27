const pool = require('../database');
const jwt = require('jsonwebtoken');

const linksControllers = {

    getLinks: async (req, res) => {
        const token = req.headers['x-access-token'];
        const { id } = jwt.verify(token, 'links-api');
        await pool.query(`SELECT * FROM links WHERE user_id = ?`, id, (err, row) => {
            if (!err) {
                res.json(row);
            } else {
                res.json(err);
            }
        });
    },

    getLinksId: async (req, res) => {
        const token = req.headers['x-access-token'];
        const { id } = jwt.verify(token, 'links-api')
        await pool.query(`SELECT * FROM links WHERE  id = ${req.params.id}`, (err, row) => {
            try {
                if (row[0].user_id == id) res.status(200).json(row[0])
                else return res.status(404).json({ message: 'Link Not Found' });
            } catch (error) {
                //Si hace una peticion hacia un Link que no existe en la base de datos
                return res.status(404).json({ message: 'Link Not Found' });
            }
        })
    },

    postLink: async (req, res) => {
        const token = req.headers['x-access-token']
        const {id} = jwt.verify(token, 'links-api')
        const { title, url, description } = req.body;
        const  newLink = {
            title,
            url,
            description,
            user_id : id
        }
        await pool.query(`INSERT INTO links SET ?`, newLink, (err) => {

        });
    },

    deletLink: async (req, res) => {
        const { id } = req.params;
        await pool.query('DELETE  FROM links WHERE id = ?', id, (err) => {
            if (!err) {
                res.json({
                    status: 'Link Deleted'
                })
            } else {
                res.json(err);
            }
        });
    },

    updateLink: async (req, res) => {
        const { id } = req.params;
        const { title, description, url } = req.body;
        const  updateLink = {
            title,
            url,
            description,
        }
        await pool.query(`UPDATE  links SET ?  WHERE id = ${id}`, updateLink, (err) => {
            if (!err) {
                res.json({
                    status: 'Link Updated'
                })
            } else {
                res.json(err);
            }
        });
    }

}


module.exports = linksControllers;