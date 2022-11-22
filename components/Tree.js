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
        minRadius: 10,
        maxRadius: am5.percent(5)
      })
    );

    series.outerCircles.template.states.create('disabled', {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });
    series.circles.template.set('forceHidden', false);
    series.outerCircles.template.set('forceHidden', true);

    // Add an icon to node
    series.nodes.template.setup = function (target) {
      let icon = target.children.push(
        am5.Picture.new(root, {
          width: 30,
          height: 30,
          centerX: am5.percent(50),
          centerY: am5.percent(50),
          src: '/assets/Group.png',
        })
      );
    };
    series.links.template.setAll({
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDasharray: 10,
      strength:0
    });

    series.outerCircles.template.states.create('hoverDisabled', {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });
    series.get('colors').set('colors', [am5.color('#302f2f')]);
    series.data.setAll([
      {
        name: 'Root',
        value: 0,
        children: [
          {
            name: '',
            children: [
              {
                name: '',
                children: [
                  {
                    name: '',
                    value: '',
                  },
                  {
                    name: '',
                    value: '',
                  },
                  {
                    name: '',
                    children: [
                      {
                        name: '',
                        children: [
                          {
                            name: '',
                            children: [
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                            ],
                          },
                          {
                            name: '',
                            children: [
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: '',
                        value: '',
                      },
                    ],
                  },
                  {
                    name: '',
                    children: [
                      {
                        name: '',
                        value: '',
                      },
                      {
                        name: '',
                        value: '',
                      },
                    ],
                  },
                ],
              },
              {
                name: '',
                value: '',
              },
              {
                name: '',
                children: [
                  {
                    name: '',
                    children: [
                      {
                        name: '',
                        value: '',
                      },
                      {
                        name: '',
                        children: [
                          {
                            name: '',
                            value: '',
                          },
                          {
                            name: '',
                            children: [
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                            ],
                          },
                          {
                            name: '',
                            children: [
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                              {
                                name: '',
                                value: '',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: '',
                        value: '',
                      },
                    ],
                  },
                  {
                    name: '',
                    value: '',
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
      id='directeddiv'
      style={{ width: width ?? '100%', height: '500px' }}
    ></div>
  );
}

export default Tree;
