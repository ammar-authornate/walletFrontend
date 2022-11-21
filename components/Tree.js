import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Dark';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
function Tree({ width }) {
  const pieRef = useRef(null);
  useLayoutEffect(() => {
    let root = am5.Root.new('directeddiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    let series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        downDepth: 1,
        initialDepth: 2,
        topDepth: 1,
        valueField: 'value',
        categoryField: 'name',
        childDataField: 'children',
      })
    );

    series.outerCircles.template.states.create('disabled', {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });

    series.outerCircles.template.states.create('hoverDisabled', {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });
    series.get('colors').set('colors', [am5.color(0x339c3f)]);
    series.data.setAll([
      {
        name: 'Root',
        value: 0,
        children: [
          {
            name: 'C0',
            children: [
              {
                name: 'C2A1',
                children: [
                  {
                    name: 'C2A0A2',
                    value: 24,
                  },
                  {
                    name: 'C2A0B2',
                    value: 89,
                  },
                  {
                    name: 'C2A0C2',
                    children: [
                      {
                        name: 'C2A0C2A3',
                        children: [
                          {
                            name: 'C2A0C2A0A4',
                            children: [
                              {
                                name: 'C2A0C2A0A00',
                                value: 90,
                              },
                              {
                                name: 'C2A0C2A0A01',
                                value: 70,
                              },
                              {
                                name: 'C2A0C2A0A02',
                                value: 66,
                              },
                              {
                                name: 'C2A0C2A0A03',
                                value: 58,
                              },
                            ],
                          },
                          {
                            name: 'C2A0C2A0B4',
                            children: [
                              {
                                name: 'C2A0C2A0B10',
                                value: 80,
                              },
                              {
                                name: 'C2A0C2A0B11',
                                value: 40,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: 'C2A0C2B3',
                        value: 44,
                      },
                    ],
                  },
                  {
                    name: 'C2A0D2',
                    children: [
                      {
                        name: 'C2A0D3A3',
                        value: 28,
                      },
                      {
                        name: 'C2A0D3B3',
                        value: 14,
                      },
                    ],
                  },
                ],
              },
              {
                name: 'C2B1',
                value: 40,
              },
              {
                name: 'C2C1',
                children: [
                  {
                    name: 'C2C2A2',
                    children: [
                      {
                        name: 'C2C2A0A3',
                        value: 28,
                      },
                      {
                        name: 'C2C2A0B3',
                        children: [
                          {
                            name: 'C2C2A0B1A4',
                            value: 19,
                          },
                          {
                            name: 'C2C2A0B1B4',
                            children: [
                              {
                                name: 'C2C2A0B1B10',
                                value: 11,
                              },
                              {
                                name: 'C2C2A0B1B11',
                                value: 10,
                              },
                              {
                                name: 'C2C2A0B1B12',
                                value: 97,
                              },
                              {
                                name: 'C2C2A0B1B13',
                                value: 47,
                              },
                            ],
                          },
                          {
                            name: 'C2C2A0B1C4',
                            children: [
                              {
                                name: 'C2C2A0B1C20',
                                value: 40,
                              },
                              {
                                name: 'C2C2A0B1C21',
                                value: 37,
                              },
                              {
                                name: 'C2C2A0B1C22',
                                value: 53,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: 'C2C2A0C3',
                        value: 96,
                      },
                    ],
                  },
                  {
                    name: 'C2C2B2',
                    value: 66,
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
    series.set('selectedDataItem', series.dataItems[0]);

    pieRef.current = container;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="directeddiv"
      style={{ width: width ?? '100%', height: '500px' }}></div>
  );
}

export default Tree;