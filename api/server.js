import express, { json } from 'express'

const app = express()
app.use(express.json())

const user = []

app.post('/usuarios', (req, res) => {

    user.push(req.body)

    res.send('OK, aqui sss')
}) 


app.get('/usuarios', (req, res) => {
    res.json(user)
})

app.listen(2121)