import { sha256Encode } from '../cryptography';

export class MerkleTreeChildNode
{
    public hash: string;

    constructor(public data: string)
    {
        this.hash = sha256Encode(data);
    }
}

export class MerkleTreeNode
{
    public hash: string;

    constructor(public leftChild: any, public rightChild: any)
    {
        this.hash = sha256Encode(leftChild.hash + rightChild.hash);
    }
}

export function generateLevel(nodes: MerkleTreeChildNode[])
{
    const result: MerkleTreeNode[] = [];
    while (nodes.length > 1)
    {
        const first = nodes.shift();
        const second = nodes.shift();
        result.push(new MerkleTreeNode(first, second));
    }
    if (nodes.length == 1)
    {
        const last = nodes.shift();
        result.push(new MerkleTreeNode(last, undefined));
    }
    return result;
}