import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5radar from '@amcharts/amcharts5/radar';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import { H1, H3 } from './TypoGraphy';
import { Image } from './Image';
import { MarginSpacer } from './Spacer';

function PieChart2({ width }) {
  const pieRef = useRef(null);
  useLayoutEffect(() => {
    let root = am5.Root.new('pieChart');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        innerRadius: am5.percent(30),
        startAngle: 0,
        endAngle: 360,
      })
    );

    // Data
    let data = [
      {
        category: 'Marketing',
        value: 89,
        full: 100,
        columnSettings: {
          fill: chart.get('colors').getIndex(1),
        },
      },
      {
        category: 'Distribution',
        value: 89,
        full: 100,
        columnSettings: {
          fill: chart.get('colors').getIndex(2),
        },
      },
      {
        category: 'Human Resources',
        value: 89,
        full: 100,
        columnSettings: {
          fill: am5.color('#34A642'),
        },
      },
    ];

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor

    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    let xRenderer = am5radar.AxisRendererCircular.new(root, {
      //minGridDistance: 50
    });

    xRenderer.labels.template.setAll({
      visible: false,
    });

    xRenderer.grid.template.setAll({
      forceHidden: false,
      fill: am5.color('#34A642'),
      opacity:0.1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20,
    });

    yRenderer.labels.template.setAll({
      visible: false,
    });

    yRenderer.grid.template.setAll({
      forceHidden: false,
      fill: am5.color('#34A642'),
      opacity:0.1,

    });

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'category',
        renderer: yRenderer,
      })
    );

    yAxis.data.setAll(data);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    // series1.ticks.template.set('visible', false);

    let series2 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: 'value',
        categoryYField: 'category',
        
      })
    );

    series2.columns.template.setAll({
      width: am5.p100,
      strokeOpacity: 0,
      cornerRadius: 20,
      templateField: 'columnSettings',
      
    });

    series2.data.setAll(data);

    // Animate chart and series in
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginLeft: '5rem',
        }}
      >
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              border: '1px solid rgb(255,255,255,0.4)',
              borderRadius: '20px',
              padding: '25px',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: '100px',
                  borderRadius: '20px',
                  background: '#4EE26E',
                }}
              ></div>
              <H1 style={{ fontSize: '25px', marginLeft: '2rem' }}>Calm</H1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <H1
                style={{
                  color: '#44C454',
                  fontSize: '16px',
                  marginLeft: '4rem',
                }}
              >
                458 Projects
              </H1>
            </div>
          </div>
          <MarginSpacer mt='2vh' />
          <div
            style={{
              display: 'flex',
              border: '1px solid rgb(255,255,255,0.4)',
              borderRadius: '20px',
              padding: '25px',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: '100px',
                  borderRadius: '20px',
                  background: '#4D85BA',
                }}
              ></div>
              <H1 style={{ fontSize: '25px', marginLeft: '2rem' }}>Average</H1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <H1
                style={{
                  color: '#44C454',
                  fontSize: '16px',
                  marginLeft: '4rem',
                }}
              >
                458 Projects
              </H1>
            </div>
          </div>
          <MarginSpacer mt='2vh' />
          <div
            style={{
              display: 'flex',
              border: '1px solid rgb(255,255,255,0.4)',
              borderRadius: '20px',
              padding: '25px',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: '100px',
                  borderRadius: '20px',
                  background: '#897CDA',
                }}
              ></div>
              <H1 style={{ fontSize: '25px', marginLeft: '2rem' }}>
                Undercuts
              </H1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <H1
                style={{
                  color: '#44C454',
                  fontSize: '16px',
                  marginLeft: '4rem',
                }}
              >
                458 Projects
              </H1>
            </div>
          </div>
        </div>
      </div>
      <div
        id='pieChart'
        style={{
          width: width ?? '100%',
          height: '500px',
          marginLeft: '20rem',
          justifyContent: 'flex-end',
        }}
      ></div>
    </div>
  );
}

export default PieChart2;
