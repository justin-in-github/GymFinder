module.exports.index = async (req, res) => {
    res.render("portfolio/index")
}
module.exports.portfolio_item_1 = async (req, res) => {
    res.render("portfolio/portfolio_gymfinder")
}
module.exports.portfolio_item_2 = async (req, res) => {
    res.render("portfolio/portfolio_burgerbuilder")
}

