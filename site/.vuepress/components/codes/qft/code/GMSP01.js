export const r13off = -0x6120;

/**
 * @type {{[key: string]: [addr: number, orig: number]}}
 */
export const freezeCodeInfo = {
  redCoin: [0x801b632c, 0x38a00000],
  blueCoin: [0x801b6140, 0x7c030378], // TODO QF+3 &0xfffffffc
};

export const baseCode = `
C2291758 0000000B
981A0260 3CE0817F
880700B3 2C000000
38000000 900700BC
4182000C B00700B2
900700B4 60E30110
38800000 60E50094
80CD9EF0 80C60048
60E700A4 39000002
39200000 3D80802C
618C89F0 7D8803A6
4E800021 00000000
C2138B54 0000001B
3C60817F 888300B2
810300B4 2C040000
40A20030 808300BC
2C040000 40A20010
810D9EE0 8108005C
48000010 3884FFFF
908300BC 810300B8
800300B4 7D080214
3CE0000A 60E7F9B0
7C074000 40A00010
7CE83B78 98E300B2
90E300B4 1D0803E9
38000078 7D080396
380003E8 7CE80396
7C0701D6 7D004050
3800003C 7CC70396
7C0601D6 7CE03850
38A300A4 3880000F
80630210 4CC63182
3D808033 618C1924
7D8803A6 4E800021
3C60817F 60630110
38800000 38A00000
38C10BE4 38E00081
3D80802C 618C7F50
7D8803A6 4E800021
881F0046 00000000
C22943FC 00000005
3CA0817F A00500B2
2C000000 40820014
800500B4 80C3005C
7C003214 900500B4
7C0802A6 00000000
C2292480 00000005
3CA0817F 80C500B4
8003005C 7CC60214
38C60004 54C6003A
90C500B4 38C0FFFF
B0C500B2 00000000
C21F2258 00000005
3D00817F 80C800B4
8003005C 7CC60214
38C60004 54C6003A
90C800B4 38C0FFFF
B0C800B2 00000000
C2159E9C 00000002
2C030001 3C60817F
98A300B3 00000000
C22906A4 00000002
389C0001 3CA0817F
988500B3 00000000
C2291040 00000005
3CA0817F 38600001
986500B3 807F005C
38630003 5463003A
906500B8 3860FFFF
906500BC 00000000
C2292204 00000005
3CA0817F 980500B3
801E005C 30000004
5400003A 900500B8
3800FFFF 900500BC
60000000 00000000
077F0094 0000001D
00000010 000001A0
00000280 000001E0
25753A25 3032752E
25303375 00000000
`;
