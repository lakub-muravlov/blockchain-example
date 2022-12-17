import { generateLevel, MerkleTreeChildNode } from './merkle-tree-node';

export class MerkleTree
{
    private root: string;

    constructor(txs: string[])
    {
        let childNodes = txs.map(tx => new MerkleTreeChildNode(tx)) as any;
        while (childNodes.length > 1)
        {
            childNodes = generateLevel(childNodes);
        }
        this.root = childNodes[ 0 ].hash;
    }

    public get RootHash()
    {
        return this.root;
    }
}