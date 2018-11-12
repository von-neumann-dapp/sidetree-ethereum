const cas = require("./cas");
const blockchain = require("./blockchain");

/**
* https://github.com/decentralized-identity/sidetree-core/blob/master/docs/protocol.md#anchor-file-schema
*/
async function anchorNewHash(anchorHashCASAddress) {
  return cas.fetchDataAtAddress(anchorHashCASAddress).then(async (hashData) => {
    // hashData is base58 encoded.  It decodes into an object with these keys:
    //   "batchFileHash": "Base58 encoded hash of the batch file."
    //   "merkleRoot": "Base58 encoded root hash of the Merkle tree constructed
    // using the batch file."

    // TODO decode hashData
    let decoded = {
      "batchFileHash": "StV1DL6CwTryKyV",
      "merkleRoot": "9CiwA8tmydLojNKvt3"
    }

    // Call the Smart Contract service to persist the merkleRoot and the ipfsHash
    // and return the ethereum transaction number
    return await blockchain.addAnchorHash(decoded.merkleRoot, anchorHashCASAddress);
  })
}

module.exports = {anchorNewHash};