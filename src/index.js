import React from 'react';
import ReactDOM from 'react-dom';
// import App from './graph';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

am4core.useTheme(am4themes_animated);


var ReactGridLayout = require('react-grid-layout');

class MyGrid extends React.Component {


  componentDidMount() {

    let chart = am4core.create("chart1div", am4charts.XYChart);
    let chart2 = am4core.create("chart2div", am4charts.XYChart);
    let chart3 = am4core.create("chart3div", am4charts.XYChart);


     // ... chart code goes here ...

     chart.paddingRight = 20;


    let data = [];
    let visits = 10; // just iniitialization
    for (let i = 1; i < 200; i++) {
     // visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
     visits = (i%2===0 && i%5===0  ? 30*(1+Math.random()*0.1) : 10*(1+Math.random()*0.1));
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    chart.data = data;

    chart2.data = data;



    //for chart 3
    data = [];
    visits = 20; // just iniitialization
    for (let i = 1; i < 200; i++) {
     data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }
      chart3.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let dateAxis2 = chart2.xAxes.push(new am4charts.DateAxis());
    let dateAxis3 = chart3.xAxes.push(new am4charts.DateAxis());

    dateAxis.renderer.grid.template.location = 0;
    dateAxis2.renderer.grid.template.location = 0;
    dateAxis3.renderer.grid.template.location = 0;

    dateAxis.stroke = am4core.color('#EFEFEF');
    dateAxis2.stroke = am4core.color('#EFEFEF');
    dateAxis3.stroke = am4core.color('#EFEFEF');



    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
    let valueAxis3 = chart3.yAxes.push(new am4charts.ValueAxis());

    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.stroke = am4core.color('#EFEFEF');

    valueAxis2.tooltip.disabled = true;
    valueAxis2.renderer.minWidth = 35;
    valueAxis2.stroke = am4core.color('#EFEFEF');

    valueAxis3.tooltip.disabled = true;
    valueAxis3.renderer.minWidth = 35;
    valueAxis3.stroke = am4core.color('#EFEFEF');


    let series = chart.series.push(new am4charts.LineSeries());
    let series2 = chart2.series.push(new am4charts.LineSeries());
    let series3 = chart3.series.push(new am4charts.LineSeries());

    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";


    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "value";
    series2.stroke = am4core.color('#E55332');


    series3.dataFields.dateX = "date";
    series3.dataFields.valueY = "value";
    series3.stroke = am4core.color('#8CDB94');


    series.tooltipText = "{valueY.value}";
    series2.tooltipText = "{valueY.value}";
    series3.tooltipText = "{valueY.value}";

    chart.cursor = new am4charts.XYCursor();
    chart2.cursor = new am4charts.XYCursor();
    chart3.cursor = new am4charts.XYCursor();


    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    this.chart = chart;



  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }



render () {
    // layout is an array of objects, see the demo for more complete usage

    var layout =   [{i: 'graph',x:0, y:5, w: 6 ,h: 9},
                    {i: 'graph2',x:0, y:9, w: 6, h:9},
                    {i: 'graph3',x:6, y:9, w: 6, h:9},
                    {i: 'a', x: 6, y: 0, w: 3, h: 3},
                    {i: 'b', x: 9, y: 0, w: 3, h: 3},
                    {i: 'c', x: 6, y: 3, w: 3, h: 3},
                    {i: 'd', x: 9, y: 3, w: 3, h: 3},
                    {i: 'e', x: 6, y: 6, w: 3, h: 3},
                    {i: 'f', x: 9, y: 6, w: 3, h: 3}];
    var x=  <div className='container'><h1 className='text-set'>Graph-Layout</h1><ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>

        <div key="graph" className= "text-set">
         <div id="chart1div" style={{ width: "100%", height: "100%"}}></div>
        </div>
        <div key="graph2" className= "text-set">
         <div id="chart2div" style={{ width: "100%", height: "100%"}}></div>
        </div>
        <div key="graph3" className= "text-set">
         <div id="chart3div" style={{ width: "100%", height: "100%"}}></div>
        </div>

        <div key="a" className= "text-set">
         <p>Panel Title</p>
         <div>
              <h2>245</h2>
         </div>
        </div>
        <div key="b" className= "text-set">
             <p>Panel Title</p>
             <div>
                  <h2>245</h2>
             </div>
        </div>
        <div key="c" className= "text-set">
             <p>Panel Title</p>
             <div>
                  <h2>245</h2>
             </div>
        </div>
        <div key="d" className= "text-set">
             <p>Panel Title</p>
             <div>
                  <h2>245</h2>
             </div>
        </div>
        <div key="e" className= "text-set">
             <p>Panel Title</p>
             <div>
                  <h2>245</h2>
             </div>
        </div>
        <div key="f" className= "text-set">
             <p>Panel Title</p>
             <div>
                  <h2>245</h2>
             </div>
        </div>


      </ReactGridLayout></div>;
    return ( x  )
  }}


ReactDOM.render(<MyGrid/>, document.getElementById('root'));
