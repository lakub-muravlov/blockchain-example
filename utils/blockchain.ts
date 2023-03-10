import { IBlockchain } from '../types';
import { Block } from './block';

const CHAIN_LIMIT_FOR_DEMO = 5;

export class BlockChain implements IBlockchain
{
    private chain: Block[] = [];

    constructor()
    {
        this.genesisBlock();
        let startTs = Date.now();
        while (this.chain.length < CHAIN_LIMIT_FOR_DEMO)
        {
            this.addBlock();
        }
        console.log(`Mined ${ CHAIN_LIMIT_FOR_DEMO } blocks in ${ Math.floor((Date.now() - startTs) / 1000) } seconds`);
        console.log(this.chain);
    }

    public genesisBlock()
    {
        this.chain.push(new Block(null, this.chain.length));
    }

    public addBlock()
    {
        this.chain.push(new Block(this.chain.slice(-1)[ 0 ].blockHeader.blockHash, this.chain.length));
    }
}