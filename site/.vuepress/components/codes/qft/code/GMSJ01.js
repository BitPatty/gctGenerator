export const r13off = -0x6818;
export const onChangeStatusAddr = 0x801335b8;

/**
 * @type {{[key: string]: number|{addr: number, orig: number}}}
 */
export const freezeCodeHooks = {
  yellowCoin: 0x80196cb0,
  redCoin: 0x801963c4,
  blueCoin: 0x80196128,
  item: 0x80197208,
  talk: 0x80214f00,
  demo: 0x800ed89c,
  cleaned: 0x8017a3d4,
  bowser: 0x801d3380,
  yoshi: 0x8014f830,
  take: { addr: 0x8011eae4, orig: 0x801f0384 },
  drop: { addr: 0x80122964, orig: 0x38000000 },
};
