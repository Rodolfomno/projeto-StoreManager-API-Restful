const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../controllers/productsController');
const productService = require('../../../services/productService');

describe('verifica retorno de produtos da rota GET', () => {
    let req = {}, res = {}, next = {};

    const mockProduct = {
      "id": 1,
      "name": "Martelo de Thor",
      "quantity": 10
    };

    before(() => {
      sinon.stub(productService, 'getAllProducts').resolves(mockProduct);
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });


    after(()=>{
        productService.getAllProducts.restore();
    })

    it('retorna status 200 na rota GET', async() => {
        await productsController.getAllProducts(req, res, next);
        expect(res.status.calledWith(200)).to.be.true;
    });

    it('res.json() é chamado passando um objeto' , async() => {
      await productsController.getAllProducts(req, res, next);
      expect(res.json.calledWith(sinon.match.object)).to.be.true;
  })
});