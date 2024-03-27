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

    // app.post('/create',(req, res) => {
    //     const sql="INSERT INTO studentsinfo (`Name`, `Email`) VALUES (?)";
    //     const values=[ 
    //         req.body.name,
    //         req.body.email
    //     ]
        
    //     db.query(sql,values, (err, data) => {
    //         if (err) return res.json('Error');
    //         else return res.json(data);
            
    //     })
        
    // })

    app.post('/create', (req, res) => {
        console.log("Received request to create student:", req.body);
    
        const sql = "INSERT INTO studentsinfo (`Name`, `Email`) VALUES (?, ?)";
        const values = [
            req.body.Name,
            req.body.Email
        ];
    
        db.query(sql, values, (err, data) => {
            if (err) {
                console.error("Error adding student:", err);
                return res.status(500).json({ error: "Failed to add student" });
            }
            console.log("Student added successfully:", data);
            return res.json({ success: true });
        });
    });

// app.post('/create',(req,res)=>{
//     const sql="INSERT INTO studentsInfo(`Name`,`Email`) VALUES (?)";
//     const values=[
//         req.body.name,
//         req.body.email
//     ]
//     console.log.value
// })


app.put('/update/:id',(req, res) => {
    const sql="UPDATE studentsinfo SET `Name`=?,`Email`=? WHERE ID=?";
    const values=[ 
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values,id], (err, data) => {
        if (err) return res.json('error');
        return res.json(data);

    })
}
)

app.delete('/student/:id',(req, res)=>{
    const sql = "DELETE FROM studentsinfo WHERE ID=?";
    const id = req.params.id;

    db.query(sql,[id],(err, data)=>{
        if(err) return res.json("Error");

        return res.json(data);
    })
})





app.listen(5000,() =>{
    console.log('listening on port');
});
