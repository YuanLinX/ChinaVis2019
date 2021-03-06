export const firstGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: '', // 为了显示其它区域名字，而不破坏整体效果，只好委屈你了
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [[0.0, 0.0], [30, 0.0]],
          [[30.0, 0.0], [30, 16.0]],
          [[30, 16], [0.0, 16.0]],
          [[0, 16], [0, 0.0]],
          [[0, 1], [30, 1]],
          [[0, 2], [30, 2]],
          [[0, 3], [30, 3]],
          [[0, 4], [30, 4]],
          [[0, 5], [30, 5]],
          [[0, 6], [30, 6]],
          [[0, 7], [30, 7]],
          [[0, 8], [30, 8]],
          [[0, 9], [30, 9]],
          [[0, 10], [30, 10]],
          [[0, 11], [30, 11]],
          [[0, 12], [30, 12]],
          [[0, 13], [30, 13]],
          [[0, 14], [30, 14]],
          [[0, 15], [30, 15]],
          [[1, 0], [1, 16]],
          [[2, 0], [2, 16]],
          [[3, 0], [3, 16]],
          [[4, 0], [4, 16]],
          [[5, 0], [5, 16]],
          [[6, 0], [6, 16]],
          [[7, 0], [7, 16]],
          [[8, 0], [8, 16]],
          [[9, 0], [9, 16]],
          [[10, 0], [10, 16]],
          [[11, 0], [11, 16]],
          [[12, 0], [12, 16]],
          [[13, 0], [13, 16]],
          [[14, 0], [14, 16]],
          [[15, 0], [15, 16]],
          [[16, 0], [16, 16]],
          [[17, 0], [17, 16]],
          [[18, 0], [18, 16]],
          [[19, 0], [19, 16]],
          [[20, 0], [20, 16]],
          [[21, 0], [21, 16]],
          [[22, 0], [22, 16]],
          [[23, 0], [23, 16]],
          [[24, 0], [24, 16]],
          [[25, 0], [25, 16]],
          [[26, 0], [26, 16]],
          [[27, 0], [27, 16]],
          [[28, 0], [28, 16]],
          [[29, 0], [29, 16]],
          [[30, 0], [30, 16]],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'total',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[0, 0], [30, 0], [30, 16], [0, 16], [0, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'venueA',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[1, 14], [6, 14], [6, 12], [1, 12], [1, 14]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'venueB',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[1, 12], [6, 12], [6, 10], [1, 10], [1, 12]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'venueC',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[1, 10], [6, 10], [6, 8], [1, 8], [1, 10]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'venueD',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[1, 8], [6, 8], [6, 6], [1, 6], [1, 8]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'sign',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[2, 4], [6, 4], [6, 2], [2, 2], [2, 4]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'poster',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[7, 6], [9, 6], [9, 13], [7, 13], [7, 6]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'stair2',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 14], [12, 14], [12, 15], [10, 15], [10, 14]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'restroom1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 10], [12, 10], [12, 12], [10, 12], [10, 10]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'room1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 10], [12, 10], [12, 6], [10, 6], [10, 10]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'room2',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 6], [12, 6], [12, 4], [10, 4], [10, 6]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'stair1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 1], [12, 1], [12, 2], [10, 2], [10, 1]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'exhibition',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[15, 4], [19, 4], [19, 14], [15, 14], [15, 4]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'mainVenue',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[19, 4], [29, 4], [29, 14], [19, 14], [19, 4]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'service',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[19, 0], [21, 0], [21, 2], [19, 2], [19, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'room3',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[21, 0], [25, 0], [25, 2], [21, 2], [21, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'room4',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[25, 0], [27, 0], [27, 2], [25, 2], [25, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'restroom2',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[27, 0], [29, 0], [29, 2], [27, 2], [27, 0]]],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'entry1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[0, 2], [1, 2], [1, 3], [0, 3], [0, 2]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'entry2',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[2, 0], [3, 0], [3, 1], [2, 1], [2, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'entry3',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[4, 0], [5, 0], [5, 1], [4, 1], [4, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'exit1',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[5, 0], [6, 0], [6, 1], [5, 1], [5, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'entry4',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[7, 0], [8, 0], [8, 1], [7, 1], [7, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'exit2',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[15, 0], [16, 0], [16, 1], [15, 1], [15, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'exit3',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[17, 0], [18, 0], [18, 1], [17, 1], [17, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'exit4',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[19, 15], [20, 15], [20, 16], [19, 16], [19, 15]]],
      },
    },
  ],
};

export const secondGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: '', // 为了显示其它区域名字，而不破坏整体效果，只好委屈你了
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [[0.0, 0.0], [30, 0.0]],
          [[30.0, 0.0], [30, 16.0]],
          [[30, 16], [0.0, 16.0]],
          [[0, 16], [0, 0.0]],
          [[0, 1], [30, 1]],
          [[0, 2], [30, 2]],
          [[0, 3], [30, 3]],
          [[0, 4], [30, 4]],
          [[0, 5], [30, 5]],
          [[0, 6], [30, 6]],
          [[0, 7], [30, 7]],
          [[0, 8], [30, 8]],
          [[0, 9], [30, 9]],
          [[0, 10], [30, 10]],
          [[0, 11], [30, 11]],
          [[0, 12], [30, 12]],
          [[0, 13], [30, 13]],
          [[0, 14], [30, 14]],
          [[0, 15], [30, 15]],
          [[1, 0], [1, 16]],
          [[2, 0], [2, 16]],
          [[3, 0], [3, 16]],
          [[4, 0], [4, 16]],
          [[5, 0], [5, 16]],
          [[6, 0], [6, 16]],
          [[7, 0], [7, 16]],
          [[8, 0], [8, 16]],
          [[9, 0], [9, 16]],
          [[10, 0], [10, 16]],
          [[11, 0], [11, 16]],
          [[12, 0], [12, 16]],
          [[13, 0], [13, 16]],
          [[14, 0], [14, 16]],
          [[15, 0], [15, 16]],
          [[16, 0], [16, 16]],
          [[17, 0], [17, 16]],
          [[18, 0], [18, 16]],
          [[19, 0], [19, 16]],
          [[20, 0], [20, 16]],
          [[21, 0], [21, 16]],
          [[22, 0], [22, 16]],
          [[23, 0], [23, 16]],
          [[24, 0], [24, 16]],
          [[25, 0], [25, 16]],
          [[26, 0], [26, 16]],
          [[27, 0], [27, 16]],
          [[28, 0], [28, 16]],
          [[29, 0], [29, 16]],
          [[30, 0], [30, 16]],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'total',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[0, 0], [30, 0], [30, 16], [0, 16], [0, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'relax' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[0, 0], [6, 0], [6, 3], [0, 3], [0, 0]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'room5' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[1, 4], [6, 4], [6, 6], [1, 6], [1, 4]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'canteen' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[1, 6], [6, 6], [6, 14], [1, 14], [1, 6]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'stair2' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 14], [12, 14], [12, 15], [10, 15], [10, 14]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'restroom3' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 10], [12, 10], [12, 12], [10, 12], [10, 10]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'room6' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 10], [12, 10], [12, 8], [10, 8], [10, 10]]],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'stair1' },
      geometry: {
        type: 'Polygon',
        coordinates: [[[10, 1], [12, 1], [12, 2], [10, 2], [10, 1]]],
      },
    },
  ],
};

export const firstFloor = {
  title: '场馆一层热力图',
  floor: 1,
  nameMap: {
    venueA: '分会场A',
    venueB: '分会场B',
    venueC: '分会场C',
    venueD: '分会场D',
    poster: '海报区',
    restroom1: '厕所1',
    restroom2: '厕所2',
    exhibition: '展厅',
    mainVenue: '主会场',
    service: '服务区',
    stair1: '楼梯',
    stair2: '楼梯',
    sign: '签到处',
    entry1: '入口',
    entry2: '入口',
    entry3: '入口',
    entry4: '入口',
    exit1: '出口',
    exit2: '出口',
    exit3: '出口',
    exit4: '出口',
  },
};
export const secondFloor = {
  title: '场馆二层热力图',
  floor: 2,
  nameMap: {
    canteen: '餐厅',
    relax: '休闲区',
    stair1: '扶梯',
    stair2: '扶梯',
    restroom3: '厕所',
  },
};
