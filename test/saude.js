/* global describe, it */

const expect = require('expect.js')
const saude = require('../lib/saude')

'use strict'

describe('API de Saúde', function () {
  it('Deve retornar uma lista de atendimentos', function (done) {
    saude.listarAtendimentos().then((data) => {
      expect(data).to.be.ok()
      expect(data).to.be.an('array')
      done()
    })
  })

  it('Deve retornar a quantidade solicitada de atendimentos', function (done) {
    const qtde = 15

    saude.listarAtendimentos(0, qtde).then((data) => {
      expect(data).to.be.ok()
      expect(data).to.be.an('array')
      expect(data.length).to.be(qtde)
      done()
    })
  })
})
