import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';

import am5themes_Animated from '@amcharts/amcharts5/themes/Dark';
import { H1, H3 } from './TypoGraphy';
import styled from 'styled-components';
import { Image } from './Image';

function NestedDonut({ width }) {
  const pieRef = (useRef < am5.Container) | (null > null);
  useEffect(() => {
    let root = am5.Root.new('chartdiv');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    // start and end angle must be set both for chart and series
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    let series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        alignLabels: false,
        radius: am5.percent(60),
        color: am5.color('#44C454'),
        innerRadius: am5.percent(90),
        startAngle: 0,
        endAngle: 360,
      })
    );
    series0.labels.template.set('visible', false);
    series0.ticks.template.set('visible', false);

    series0.states.create('hidden', {
      startAngle: 180,
      endAngle: 180,
      colors: am5.color('#44C454'),
    });

    series0.slices.template.setAll({
      fillOpacity: 0.2,
      strokeOpacity: 0,
      templateField: 'settings',
    });

    series0.slices.template.states.create('hover', { scale: 1 });
    series0.slices.template.states.create('active', { shiftRadius: 0 });

    series0.labels.template.setAll({
      templateField: 'settings',
    });

    series0.ticks.template.setAll({
      templateField: 'settings',
    });

    series0.labels.template.setAll({
      textType: 'circular',
      radius: 30,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series0.data.setAll([
      {
        category: 'First + Second',
        value: 60,
        settings: { fill: am5.color('#44C454') },
      },
      {
        category: 'Unused',
        value: 30,
        settings: { forceHidden: true },
      },
    ]);
    let series2 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        alignLabels: false,
        radius: am5.percent(107),
        color: am5.color('#00000'),
        innerRadius: am5.percent(100),
        startAngle: 360,
        endAngle: 0,
      })
    );
    series2.labels.template.set('visible', false);
    series2.ticks.template.set('visible', false);

    series2.slices.template.setAll({
      fillOpacity: 0.7,
      strokeOpacity: 0,
      templateField: 'settings',
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series2.data.setAll([
      {
        value: 50,
        settings: { fill: am5.color('#00000') },
      },
      {
        value: 50,
        settings: { forceHidden: true },
      },
    ]);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        radius: am5.percent(85),
        innerRadius: am5.percent(65),
        valueField: 'value',
        categoryField: 'category',
        startAngle: 0,
        endAngle: 360,
      })
    );
    let label = series1.children.push(
      am5.Label.new(root, {
        html: width
          ? '<img width="30px" src="/assets/Group.png"/>'
          : '<img width="50px" src="/assets/Group.png"/>',
        fontSize: 12,
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        populateText: true,
      })
    );
    series1.slices.template.setAll({
      templateField: 'sliceSettings',
      strokeOpacity: 0,
      cornerRadius: 10,
    });
    let tooltip = am5.Tooltip.new(root, {
      getFillFromSprite: false,
      getStrokeFromSprite: true,
      autoTextColor: false,
      getLabelFillFromSprite: true,
      labelText: `400 /800`,
      html: '<h1>400</h1>',
    });

    tooltip?.get('background')?.setAll({
      fill: am5.color(0xffffff),
      fillOpacity: 0.8,
    });

    series1.set('tooltip', tooltip);
    series1.labels.template.setAll({
      textType: 'circular',
      centerX: 0,
      centerY: 0,
    });
    series1.labels.template.set('visible', false);
    series1.ticks.template.set('visible', false);

    series1.ticks.template.setAll({
      forceHidden: true,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series1.data.setAll([
      {
        value: 60,
        sliceSettings: { fill: am5.color('#44C454') },
      },
      {
        value: 30,
        sliceSettings: { fill: am5.color('#262626') },
      },
    ]);

    return () => {
      root.dispose();
    };
  }, []);
  const ChartStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    position: absolute;
    right: 20px;
    top: 10px;
    @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      right: 0px;
      top: 0px;
      margin-top: 2em;
      height: '100%';
      margin-right: 0px;
    }
  `;
  const ChartStyle = styled.div`
    width: '100%';
    margin-bottom: 2em;
    @media screen and (max-width: 1000px) {
      margin-bottom: 6em;
    }
  `;
  return (
    <ChartStyle
      id='chartdiv'
      style={{
        width: width ?? '100%',
        height: '500px',
        border: '1px solid ',
        borderRadius: '0px 0px 0px 0px',
        borderBottom: '0px',
        borderImage: 'linear-gradient(180deg,#44C454,transparent) 1 100%',
        position: 'relative',
        height: '500px',
      }}
    >
      <ChartStyled>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <H1 style={{ fontSize: '45px' }}>400</H1>
            <div
              style={{
                fontSize: '20px',
                opacity: '0.4',
                fontWeight: '800',
                color: ' white',
              }}
            >
              /
            </div>{' '}
            <H1 style={{ fontSize: 'px', opacity: '0.4', fontWeight: '400' }}>
              800
            </H1>
          </div>
          <div
            style={{
              background: '#302f2f',
              borderRadius: '22px',
              padding: '14px',
              display: 'flex',
              marginTop: '10px',
            }}
          >
            <Image src='/assets/greendot.png' alt='greendot' width={'20px'} />
            <H1
              style={{ fontSize: '16px', marginLeft: '5px', fontWeight: '500' }}
            >
              Very Good
            </H1>
          </div>
        </div>
      </ChartStyled>
    </ChartStyle>
  );
}

export default NestedDonut;
