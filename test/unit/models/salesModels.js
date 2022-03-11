const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
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

describe('Verificar todas as vendas e vendas por ID', () => {
    describe('verifica todas as vendas', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([mockSales]);
        });

        after(() => {
            connection.execute.restore();
        });

        it('verificar se contem o numero exato de chaves', async () => {
            const result = await salesModel.getAllSales();
            console.log(Object.keys(result[0]).length);
            expect(Object.keys(result[0]).length).to.be.equal(4);
        });

        it('Retornar um array se houver produtos', async () => {
            const result = await salesModel.getAllSales();
            expect(result).to.be.an('array');
        });

        it('retornar um array de objetos com os valores "sale_id, product_id e quantity" se houver produtos', async () => {
            const [result] = await salesModel.getAllSales();
            expect(result).to.have.all.keys('sale_id', 'date', 'product_id', 'quantity');
        });
    });

    describe('verifica vendas por id', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([mockSales]);
        });

        after(() => {
            connection.execute.restore();
        });

        it('verifica se passar um id em vendas retorna um array', async () => {
            const result = await salesModel.getAllSalesById(1);
            expect(result).to.be.an('array');
        });
    })

});