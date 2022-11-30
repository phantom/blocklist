export interface PhantomBlocklist {
  contentHash: string,
  blocklist: string[],
  fuzzylist: string[],
  whitelist: string[]
};

export interface PhantomBlocklistMultichain {
  contentHash: string,
  blocklist: string[],
  fuzzylist: string[],
  whitelist: string[],
  ethBlocklist: string[]
};


export declare function getVersion(): string;
export declare function getBlocklist(): PhantomBlocklist;
export declare function getBlocklistMultichain(): PhantomBlocklistMultichain;