const mysql = requiere("mysql");


const conention =mysql.createConnection({
    host:"localhost",
    user:"alex",
    password:"alex",
    database:"resgistr_usuario"
})
conection.connect((err)=>{
    if (err)throw err
    console.log("la conexion funciona")
} )

const insert ="INSERT INTO users(id,nombre)VALUES(NULL,'ana')"
conention.query(insertar,(err,rows)=>{
    if (err)throw err
} )

conection.query("SELECT* from users",(err,rows)=>{
    if (err)throw err
    console.log("los datos de la tabla son:")
    console.log(rows)
} )

conection.end()

