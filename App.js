import React from 'react';
import MDList, { ListItem } from './src/MDList.jsx';
import _ from 'lodash';

const datasets = [
  {
    "id": "bdc1d4134cb4556e378f15b23823e73e",
    "name": "交易记录",
    "dataSource": "淘宝",
    "author": "李丹",
    "rowCount": 6125,
    "columnCount": 33,
    "lastUpdated": 1469005763000
  },
  {
    "id": "47df2b78ac4b3edfbf1c6d0b2a64c579",
    "name": "销售序时",
    "dataSource": "淘宝",
    "author": "龚瑞芳",
    "rowCount": 310,
    "columnCount": 10,
    "lastUpdated": 1468136843000
  },
  {
    "id": "106a6c241b8797f52e1e77317b96a201",
    "name": "客户信息",
    "dataSource": "京东",
    "author": "郑鼎霞",
    "rowCount": 310,
    "columnCount": 10,
    "lastUpdated": 1468136843000
  }
]

const App = () => (
  <div>
    <MDList>
      {
        _.map(datasets, ds => (
          <ListItem
            key={ds.id}
            img="https://ooo.0o0.ooo/2016/07/28/5799a4985b7d9.png"
            header={{ tag: ds.dataSource, value: ds.name }}
            info={[
              { tag: '创建者', value: ds.author },
            ]}
          />
        ))
      }
    </MDList>
  </div>
);

export default App;
