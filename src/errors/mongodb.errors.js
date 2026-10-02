const notFoundError = (res) => {
    return res.status(404).send("Esses dados não foram encontrados no banco de dados");
}

module.exports = {
    notFoundError
}