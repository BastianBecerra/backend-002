const { Pool } = require('pg')
const format = require('pg-format')
const bcrypt = require('bcryptjs')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "desafiolatam279",
    database: "ecommerce",
    allowExitOnIdle: true
})

const getProducts = async () => {
    const query = " select * from productos"
    const { rows: productos } = await pool.query(query)
    return productos
}

const getProduct = async (id) => {
    const query = " select * from productos where id = $1"
    const value = [id]
    const { rows: productos } = await pool.query(query, value)
    return productos
}

const deleteProduct = async(id) =>{
    const query = " delete from productos where id = $1"
    const values = [id]
    const result = await pool.query(query, values)
}

const addProduct = async ({ nombre, precio,imagen }) => {
    const query = "insert into productos values( DEFAULT, $1,$2,$3)"
    const values = [nombre, precio, imagen]
    const result = await pool.query(query, values)
}

const registerUser = async (user) => {
    let { email, password } = user
    const encriptedPassword = bcrypt.hashSync(password)
    password = encriptedPassword
    const values = [email, encriptedPassword]
    const query = "INSERT INTO users VALUES (DEFAULT, $1, $2)"
    await pool.query(query, values)
}

const checkCredentials = async (email, password) => {
    const values = [email]
    const query = "SELECT * FROM users WHERE email = $1"    
    const { rows: [usuario], rowCount } = await pool.query(query, values)
    const { password: encriptedPassword } = usuario   
    const correctPassword = bcrypt.compareSync(password, encriptedPassword)    
     if (!correctPassword || !rowCount)
        throw { code: 401, message: "Email or Password Incorrect =)!!" }
}

const reportQuery = async (req, res, next) => {
    const par = req.params
    const url = req.url
    console.log(`
    Hoy ${new Date()}
    Hemos Recibido una Consulta en la Ruta ${url}
    con los Parámetros:
    `, par)
    next()
}
module.exports = { getProducts, addProduct, deleteProduct, getProduct, registerUser, checkCredentials, reportQuery }