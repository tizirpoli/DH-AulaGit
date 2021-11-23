const db = require('../movies.json')
const fs = require('fs')
const { brotliDecompress } = require('zlib')
const { debugPort } = require('process')

module.exports = app => {

    const get = (req, res) => {
        try {
            res.status(200).json(db)
        }
        catch (err) {
            res.status(500).json({ error: true, msg: "Erro no servidor!", err })
        }
    }

    const getById = (req, res) => {
        const movieID = req.params.id
        const movie = db.filter(register => register.id == movieID)

        try {
            res.status(200).json(movie)
        }
        catch (err) {
            res.status(500).json({ error: true, msg: "Erro no GetByID!", err })
        }

    }

    const post = (req, res) => {
        const movie = req.body
        db.push(movie)
        try {
            fs.writeFileSync('movies.json', JSON.stringify(db))
            res.status(201).json(movie.id)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    const put = (req, res) => {
        // const movieId = req.params.id
        // const foundMovie = (db.findIndex(movie => movie.id == movieId)-1)

        // try {
        //     if (foundMovie == -1) {
        //         res.status(404).json(err)
        //     } else {
        //         const updatedMovie ={
        //             id: req.params.id,
        //             name : req.body.name,
        //             year : req.body.year
        //         }

        //         fs.writeFileSync('movies.json', JSON.stringify(db.splice(foundMovie, 1, updatedMovie)))
        //         res.status(202).JSON.stringify(movie.id)
        try {
            const movieID = req.params.id
            const movieUpdate = {
                id: movieID,
                name: req.body.name,
                year: req.body.year
            }

            const dbUpdate = db.splice(movieID, 1, movieUpdate)
            fs.writeFileSync('movies.json', JSON.parse(dbUpdate))
            res.status(202).JSON.stringify(movieID)


        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }








    return { get, getById, post, put }
}