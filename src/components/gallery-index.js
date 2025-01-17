const dict = {
    public: [
        { name: 'draw_point', title: '画点' },
        { name: 'draw_line', title: '画线' },
        { name: 'draw_circle', title: '画圆' },
        { name: 'draw_polygon', title: '画多边形' },
        { name: 'massive_points', title: '海量点加载' },
        { name: 'vertical_trail_line', title: '竖直尾迹线' },
        { name: 'grounded_billboard', title: '广告牌贴地' },
        { name: 'custom_geometry', title: '自定义几何体' },
        { name: 'tianditu_map', title: '天地图' },
        { name: 'layers_split', title: '卷帘分屏' },
        { name: 'cesium_threejs', title: 'Cesium集成Threejs' },
        { name: 'optimizing_lots_of_objects', title: 'Threejs加载大量几何体' },
    ],
}

function createRouter(dict) {
    const result = []
    for (let key in dict) {
        let items = dict[key]
        for (let item of items) {
            let name = item['name']
            let title = item['title']
            result.push({
                name: name,
                path: '/' + name,
                img: require('./' + key + '/' + name + '.gif'),
                component: () => import('./' + key + '/' + name + '.vue'),
                meta: {
                    title: title,
                },
            })
        }
    }
    return result
}

export const gallery_demos = createRouter(dict)
