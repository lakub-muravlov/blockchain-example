export interface IBlockHeader
{
    version: number;
    prevBlockHash: string;
    merkleRoot: string;
    timestamp: number;
    //hardcoded
    bits: string;
    nonce: number;
    blockHash: string;
    mine(): void;
}

export interface IBlock
{
    // block number
    height: number;
    // hardcoded 1
    blockSize: number;
    blockHeader: IBlockHeader;
    // 1 tx
    txCount: number;
    // random tx
    txs: string[];
}

export interface IBlockchain
{
    genesisBlock(): void;
    addBlock(): void;
}

export function zeroHash()
{
    let hashStr = '';
    let counter = 0;
    while (counter < 64)
    {
        hashStr += '0';
        counter++;
    }
    return hashStr;
};