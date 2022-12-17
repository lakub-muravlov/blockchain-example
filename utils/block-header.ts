import { IBlockHeader } from './../types';
import { sha256Encode } from './cryptography';

export class BlockHeader implements IBlockHeader
{
    public version: number = 1;
    public prevBlockHash: string;
    public timestamp: number;
    public merkleRoot: string;
    public bits = 'ffff001f';
    public nonce = 0;
    public blockHash: string;

    constructor(prevBlockHash: string, merkleRoot: string)
    {
        this.prevBlockHash = prevBlockHash;
        this.merkleRoot = merkleRoot;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.mine();
    }

    public mine()
    {
        let resultHash: string = '';
        while (!resultHash.startsWith('0000'))
        {
            const concatenatedValuesLE = [
                this.version.toString(16),
                this.prevBlockHash,
                this.merkleRoot,
                this.timestamp.toString(16),
                this.bits,
                this.nonce.toString(16)
            ].map(value => value.padStart(4, '0').match(/../g)?.reverse().join('')).join('');
            resultHash = sha256Encode(sha256Encode(concatenatedValuesLE));
            this.nonce += 1;
        }
        this.blockHash = resultHash;
    }
}