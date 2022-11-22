import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Dark';
function HalfPie({ width }) {
  const pieRef = useRef<am5.Container | null>(null);
  useEffect(() => {
    let root = am5.Root.new('piediv');

    // ...
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(70),
      })
    );
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        alignLabels: false,
      })
    );
    series.labels.template.setAll({
      textType: 'circular',
      centerX: 0,
      centerY: 0,
    });

    series.labels.template.setAll({
      visible: false,
    });
    let label = series.children.push(
      am5.Label.new(root, {
        html: width
          ? '<img width="30px" src="/images/wallet.png"/>'
          : '<img width="50px" src="/images/wallet.png"/>',
        fontSize: 12,
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        populateText: true,
      })
    );
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data

    series
      ?.get('colors')
      ?.set('colors', [am5.color(0x339c3f), am5.color(0x000)]);
    series.data.setAll([
      { value: 10, category: 'One' },
      { value: 3, category: 'Seven' },
    ]);
    series.appear(1000, 100);


    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="piediv" style={{ width: width ?? '80%', height: '500px' }}></div>
  );
}

export default HalfPie;