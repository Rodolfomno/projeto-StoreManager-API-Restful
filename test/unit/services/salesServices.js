const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

const mockSales = [
    {
      sale_id: 1,
      date: '2021-09-09T04:54:29.000Z',
      product_id: 1,
      quantity: 2,
    },
    {
      sale_id: 1,
      date: '2021-09-09T04:54:54.000Z',
      product_id: 2,
      quantity: 2,
    },
];

describe('verifica service sales por id e todas as vendas', () => {
    describe('verifica busca por todas as vendas', () => {
        before(() => {
            sinon.stub(salesModel, 'getAllSales').resolves(mockSales);
        })
        after(() => {
            salesModel.getAllSales.restore();
        })
        describe('quando existe venda', () => {

            it('retorna um array com as vendas', async () => {
                const sale = await salesService.getAllSales();
                expect(sale).to.be.an('array');
            })
            
            it('retorna um array de objetos com informações de cada venda', async () => {
                const sale = await salesService.getAllSales();
                expect(sale).to.be.deep.equal(mockSales);
            })
        })
    })
    describe('verifica busca de vendas por id', () => {
        before(() => {
            sinon.stub(salesModel, 'getAllSalesById').resolves(mockSales);
        })
        after(() => {
            salesModel.getAllSalesById.restore();
        })
        describe('verifica busca por id válido', () => {

            it('verifica se retorna um array', async () => {
                const sale = await salesService.getAllSalesById(1);
                expect(sale).to.be.an('array');
            });

            it('verifica se retorna array de objetos com todas as informações corretas', async () => {
                const sale = await salesService.getAllSalesById(1);
                expect(sale).to.be.deep.equal(mockSales);
            });
        })
    })
});