export const lines = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
  [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
];

export const slotWin = [
  // line 0
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [4, 5, 6, 7, 8],
  // line 1
  [11, 12, 13, 14, 15],
  [12, 13, 14, 15, 16],
  [13, 14, 15, 16, 17],
  [14, 15, 16, 17, 18],
  // line 2
  [21, 22, 23, 24, 25],
  [22, 23, 24, 25, 26],
  [23, 24, 25, 26, 27],
  [24, 25, 26, 27, 28],
  // line 3
  [31, 32, 33, 34, 35],
  [32, 33, 34, 35, 36],
  [33, 34, 35, 36, 37],
  [34, 35, 36, 37, 38],
  // line 4
  [41, 42, 43, 44, 45],
  [42, 43, 44, 45, 46],
  [43, 44, 45, 46, 47],
  [44, 45, 46, 47, 48],
  // line 5
  [51, 52, 53, 54, 55],
  [52, 53, 54, 55, 56],
  [53, 54, 55, 56, 57],
  [54, 55, 56, 57, 58],
  // line 6
  [61, 62, 63, 64, 65],
  [62, 63, 64, 65, 66],
  [63, 64, 65, 66, 67],
  [64, 65, 66, 67, 68],
  // line 7
  [71, 72, 73, 74, 75],
  [72, 73, 74, 75, 76],
  [73, 74, 75, 76, 77],
  [74, 75, 76, 77, 78],
  // line 8
  [81, 82, 83, 84, 85],
  [82, 83, 84, 85, 86],
  [83, 84, 85, 86, 87],
  [84, 85, 86, 87, 88],
  // line 9
  [91, 92, 93, 94, 95],
  [92, 93, 94, 95, 96],
  [93, 94, 95, 96, 97],
  [94, 95, 96, 97, 98],

  // col 0
  [10, 20, 30, 40, 50],
  [20, 30, 40, 50, 60],
  [30, 40, 50, 60, 70],
  [40, 50, 60, 70, 80],
  // col 1
  [11, 21, 31, 41, 51],
  [21, 31, 41, 51, 61],
  [31, 41, 51, 61, 71],
  [41, 51, 61, 71, 81],
  // col 2
  [12, 22, 32, 42, 52],
  [22, 32, 42, 52, 62],
  [32, 42, 52, 62, 72],
  [42, 52, 62, 72, 82],
  // col 3
  [13, 23, 33, 43, 53],
  [23, 33, 43, 53, 63],
  [33, 43, 53, 63, 73],
  [43, 53, 63, 73, 83],
  // col 4
  [14, 24, 34, 44, 54],
  [24, 34, 44, 54, 64],
  [34, 44, 54, 64, 74],
  [44, 54, 64, 74, 84],
  // col 5
  [15, 25, 35, 45, 55],
  [25, 35, 45, 55, 65],
  [35, 45, 55, 65, 75],
  [45, 55, 65, 75, 85],
  // col 6
  [16, 26, 36, 46, 56],
  [26, 36, 46, 56, 66],
  [36, 46, 56, 66, 76],
  [46, 56, 66, 76, 86],
  // col 7
  [17, 27, 37, 47, 57],
  [27, 37, 47, 57, 67],
  [37, 47, 57, 67, 77],
  [47, 57, 67, 77, 87],
  // col 8
  [18, 28, 38, 48, 58],
  [28, 38, 48, 58, 68],
  [38, 48, 58, 68, 78],
  [48, 58, 68, 78, 88],
  // col 9
  [19, 29, 39, 49, 59],
  [29, 39, 49, 59, 69],
  [39, 49, 59, 69, 79],
  [49, 59, 69, 79, 89],
  // cross 0
  [11, 22, 33, 44, 55],
  [22, 33, 44, 55, 66],
  [33, 44, 55, 66, 77],
  [44, 55, 66, 77, 88],
  // cross 1
  [21, 32, 43, 54, 65],
  [32, 43, 54, 65, 76],
  [43, 54, 65, 76, 87],
  // cross 2
  [31, 42, 53, 64, 75],
  [42, 53, 64, 75, 86],
  // cross 3
  [41, 52, 63, 74, 85],
  // cross 4
  [12, 23, 34, 45, 56],
  [23, 34, 45, 56, 67],
  [34, 45, 56, 67, 78],
  // cross 5
  [13, 24, 35, 46, 57],
  [24, 35, 46, 57, 68],
  // cross 6
  [14, 25, 36, 47, 58],
];