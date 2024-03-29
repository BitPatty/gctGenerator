export const r13off = -0x6048;
export const onChangeStatusAddr = 0x802541c8;

/**
 * @type {{[key: string]: number|{addr: number, orig: number}}}
 */
export const freezeCodeHooks = {
  yellowCoin: 0x801bee10,
  redCoin: 0x801be524,
  blueCoin: 0x801be288,
  item: 0x801bf3c4,
  talk: 0x80153a34,
  demo: 0x8029a318,
  cleaned: 0x80215c6c,
  bowser: 0x801fb7ac,
  yoshi: 0x802704d4,
  take: { addr: 0x8023f9a8, orig: 0x801f0384 },
  drop: { addr: 0x802437d4, orig: 0x38000000 },
};
