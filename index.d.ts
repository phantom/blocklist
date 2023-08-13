export interface PhantomBlocklist {
  contentHash: string,
  blocklist: string[],
  fuzzylist: string[],
  whitelist: string[]
};

export declare function getVersion(): string;
export declare function getBlocklist(): PhantomBlocklist;
export declare function getBlocklistMultichain(): PhantomBlocklist;