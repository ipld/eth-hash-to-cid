'use strict'

const CID = require('cids')
const multihashes = require('multihashes')

module.exports = function (codec, rawhash) {
  const multihash = multihashes.encode(rawhash, 'keccak-256')
  const cidVersion = 1
  return new CID(cidVersion, codec, multihash)
}
