import * as React from 'react';
import { render} from 'react-dom';
import './index.scss'

export interface Istate{
  currentIndex: number, //控制品牌筛选项的选中样式
  seriesIndex: number, //控制车系筛选项的选中样式
  brandLists: any[], //品牌筛选项
  isShow: boolean, //控制车系筛选项的展示
  chexi: any[], //车系筛选项
  clickBrand: string, //用于存储选中的品牌信息，如"408844",
  brandText: string, //用于存储选中的品牌名
  clickSeries: string, //用于存储选中的车系信息，如"409052"
  seriesText: string, //用于存储选中的车系名
  index: string
}

const App = () => (<div>123we2qw </div>);
render(<App />,document.getElementById("app"));
