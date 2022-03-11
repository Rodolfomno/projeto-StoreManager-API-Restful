const { expect } = require('chai');
const sinon = require('sinon');

const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

describe('verifica retorno de vendas na rota GET', () => {
    let req = {}, res = {}, next = {};

    const mockSales = [
        {
            "saleId": 1,
            "productId": 1,
            "quantity": 5,
            "date": "2022-03-11T04:16:12.000Z"
        },
        {
            "saleId": 1,
            "productId": 2,
            "quantity": 10,
            "date": "2022-03-11T04:16:12.000Z"
        },
        {
            "saleId": 2,
            "productId": 3,
            "quantity": 15,
            "date": "2022-03-11T04:16:12.000Z"
        }
    ];
    
    before(() => {
        sinon.stub(salesService, 'getAllSales').resolves(mockSales);
    
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
      });
  
  
      after(()=>{
          salesService.getAllSales.restore();
      })

      it('retorna status 200 na rota GET', async() => {
        await salesController.getAllSales(req, res, next);
        expect(res.status.calledWith(200)).to.be.true;
    });
      it('res.json() é chamado passando um aray' , async() => {
        await salesController.getAllSales(req, res, next);
        expect(res.json.calledWith(sinon.match.array)).to.be.true;
    })
})

