const express = require('express');
const cors= require('cors');
const mysql= require('mysql');

const app = express();
app.use(express.json());


app.use(cors());
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbbca'
 } )


app.get('/', (req, res) => {
    
    const sql="SELECT * from studentsinfo";
    db.query(sql, (err, data) => {
        if (err) return res.json("error")
        return res.json(data)
    });
});

app.post('/create',(req, res) => {
    const sql="INSERT INTO studentsinfo ('Name', 'Email') VALUES (?)";
    const values=[ 
        req.body.name,
        req.body.email
    ]
    db.query(sql, [...values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
        
    })
    
})


app.put('/update/:id',(req, res) => {
    const sql="UPDATE studentsinfo SET `Name`=? `Email`=? WHERE ID=?";
    const values=[ 
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values,id], (err, data) => {
        if (err) return res.json('error', err);
        return res.json(data);

    })
}
)

app.delete('student/:id',(req, res)=>{
    const sql = "DELETE FROM studentinfo WHERE ID=?";
    const id = req.params.id;

    db.query(sql, [id],(err, data)=>{
        if(err) return res.json(err);

        return res.json(data);
    })
})





app.listen(5000,() =>{
    console.log('listening on port');
});