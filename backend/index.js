const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json('Hello, this is the backend');
});

app.get('/view', (req, res) => {
    const q = 'SELECT * FROM products';
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/view', (req, res) => {
    const { name, price } = req.body;
    const q = 'INSERT INTO products (`name`, `price`) VALUES (?, ?)';
    const values = [name, price];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json('Product created');
    });
});

app.put('/view/:id', (req, res) => {
    const productId = req.params.id;
    const { name, price } = req.body;
    const q = 'UPDATE products SET `name` = ?, `price` = ? WHERE id = ?';
    const values = [name, price, productId];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json('Product updated');
    });
});

app.delete('/view/:id', (req, res) => {
    const productId = req.params.id;
    const q = 'DELETE FROM products WHERE id = ?';
    db.query(q, [productId], (err, data) => {
        if (err) return res.json(err);
        return res.json('Product deleted');
    });
});

app.listen(8080, () => {
    console.log('Server is running on 8080');
});
