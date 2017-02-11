/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const ethCID = require('../src')

describe('eth hash to CID', () => {
  it('convert Buffer hash to CID', () => {
    const block =
      new Buffer('0100000000000000000000000000000000000000000000000000000000000000', 'hex')
    const cid = ethCID('eth-block', block)
    expect(cid.toBaseEncodedString())
      .to.equal('z43AaGErnhsnmexJRDrxYum9LFok5vrhNF4k3EPQpRXqheXkWAj')
  })
})
