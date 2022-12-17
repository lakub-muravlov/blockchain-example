import * as crypto from 'crypto';

export function sha256Encode(input: string)
{
    const hash = crypto.createHash('sha256').update(input).digest('hex');

    return hash;
}