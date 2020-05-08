const northwinddb = require ('knex') ({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Longbow15Y',
    database : 'northwind'
    }
});

console.log('Connected to db!')

const myQuery = `SELECT c.category_id,
c.category_name
FROM categories c
WHERE c.category_name::text = 'Confections'::text;`

northwinddb.raw(myQuery)
  .then(function (result) {
    console.log("raw success:")
    console.log(result.rows)
  })
  .catch(function (rows) {
    console.log("raw error:")
    console.log(rows)
  })