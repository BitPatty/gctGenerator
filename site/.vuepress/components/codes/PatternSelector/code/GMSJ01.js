export const addrDraw2D = 0x802069dc;
export const code04 = `
0424F32C 495A9CD5
042069DC 495F26B8
`;
export const codes = [
  /* 077F9000 000001AF */ `
3D40817F
614A0024 3D80803D
618CA9C0 7C006040
41820048 3D80803D
618C87C0 7C006040
40820034 819F0004
898C0013 508C442E
39280031 88080007
7CEA00AE A0080005
7C006040 41820024
39080007 7C084840
4180FFE4 4AA671C0
2C05FFFF 4082FFF8
88EA0000 39080031
7CE73B79 4182FFE8
7C0838AE 280000FF
4182FFDC 7C030378
4E800020 38610E90
4A83C191 3C808040
A4040D82 3C60817F
84A30024 70000040
41A20050 88840019
548007FE 7CA02850
5480FFFE 7CA50214
54A507BE 5480F7BF
41A20030 28050003
41A00008 38A00000
5480EFFE 5080077A
7D8328AE 7D8C0214
280C0005 41A00008
398CFFFB 7D8329AE
98A30003 3821FFF0
`,
  /* li r8 */ `
3C002020 60002023
54AC183E 5C00603E
`,
  /* stb r0, fmtCS0+fmtCSD*i(r8) */ `
89230000
89430001 89630002
91610008
`,
  /* li r3~r7, drawText, b */ `
452020FF 213200FF
621CFF1D 32005025
25252630 01FF4520
20213001 FFFF621C
1D300151 0707FF08
3102FF36 01FF0231
021E6E20 FF
` /* fmt */,
];
