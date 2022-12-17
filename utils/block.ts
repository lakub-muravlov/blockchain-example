import { IBlock, IBlockHeader, zeroHash } from './../types';
import { BlockHeader } from './block-header';
import { MerkleTree } from './merkle-tree/merkle-tree';

export class Block implements IBlock
{
    public height: number;
    public blockSize: number = 1;
    public blockHeader: IBlockHeader;
    public txCount: number;
    public txs: string[];

    constructor(prevBlockHash: string | null, height: number)
    {
        this.height = height;
        this.txs = [ `Andrii Muravlov sent ${ this.height } coins to Alice` ];
        this.txCount = this.txs.length;
        const merkleRoot = new MerkleTree(this.txs).RootHash;
        console.log(`Mining block with number ${ height }`);
        this.blockHeader = new BlockHeader(
            prevBlockHash || zeroHash(),
            merkleRoot
        );
    }
}