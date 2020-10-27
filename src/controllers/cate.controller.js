const cateCtrl = {};

cateCtrl.renderCategorias = (req, res, next) => {
  res.render('categorias');
}

module.exports = cateCtrl;