module.exports = app => {
    app.route('/')
    .get(app.api.movies.get)
    .post(app.api.movies.post)

    app.route("/:id")
    .get(app.api.movies.getById)
    .put(app.api.movies.put)
}