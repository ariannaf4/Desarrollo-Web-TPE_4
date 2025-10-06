const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios ORDER BY id');
    res.json({
      success: true,
      count: result.rows.length,
      usuarios: result.rows
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;
    
    if (!nombre || !correo || !contraseña) {
      return res.status(400).json({
        success: false,
        error: 'Todos los campos son requeridos'
      });
    }

    const result = await pool.query(
      'INSERT INTO usuarios (nombre, correo, contraseña) VALUES ($1, $2, $3) RETURNING *',
      [nombre, correo, contraseña]
    );

    res.status(201).json({
      success: true,
      message: 'Usuario creado exitosamente',
      usuario: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});