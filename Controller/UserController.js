const print = {
    index:(req, res) => {
        res.render('index');
    },
    kim: (req, res) => {
        res.render("kim");
    },
    ryan: (req, res) => {
        res.render("ryan");
    },
    dela: (req, res) => {
        res.render("dela");
    },
    luna: (req, res) => {
        res.render("luna");
    }
};

module.exports = print;





