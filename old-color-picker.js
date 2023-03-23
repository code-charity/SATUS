satus.components.colorPicker = function(component, skeleton) {
  var component_content = component.createChildElement('div', 'content'),
    component_value = component.createChildElement('span', 'value');

  component.childrenContainer = component_content;
  component.valueElement = component_value;

  component.className = 'satus-button';

  component.addEventListener('click', function() {
    var rgb = this.rgb,
      hsl = satus.color.rgbToHsl(rgb),
      s = hsl[1] / 100,
      l = hsl[2] / 100;

    s *= l < .5 ? l : 1 - l;

    var v = l + s;

    s = 2 * s / (l + s);

    satus.render({
      component: 'modal',
      variant: 'color-picker',
      value: hsl,
      parentElement: this,

      palette: {
        component: 'div',
        class: 'satus-color-picker__palette',
        style: {
          'backgroundColor': 'hsl(' + hsl[0] + 'deg, 100%, 50%)'
        },
        on: {
          mousedown: function() {
            var palette = this,
              rect = this.getBoundingClientRect(),
              cursor = this.children[0];

            function mousemove(event) {
              var hsl = palette.skeleton.parentSkeleton.storage.value,
                x = event.clientX - rect.left,
                y = event.clientY - rect.top,
                s;

              x = Math.min(Math.max(x, 0), rect.width) / (rect.width / 100);
              y = Math.min(Math.max(y, 0), rect.height) / (rect.height / 100);

              var v = 100 - y,
                l = (2 - x / 100) * v / 2;

              hsl[1] = x * v / (l < 50 ? l * 2 : 200 - l * 2);
              hsl[2] = l;

              cursor.style.left = x + '%';
              cursor.style.top = y + '%';

              palette.nextSibling.children[0].style.backgroundColor = 'hsl(' + hsl[0] + 'deg,' + hsl[1] + '%, ' + hsl[2] + '%)';

              event.preventDefault();
            }

            function mouseup() {
              window.removeEventListener('mousemove', mousemove);
              window.removeEventListener('mouseup', mouseup);
            }

            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);
          }
        },

        cursor: {
          component: 'div',
          class: 'satus-color-picker__cursor',
          style: {
            'left': s * 100 + '%',
            'top': 100 - v * 100 + '%'
          }
        }
      },
      section: {
        component: 'section',
        variant: 'color',

        color: {
          component: 'div',
          class: 'satus-color-picker__color',
          style: {
            'backgroundColor': 'rgb(' + this.rgb.join(',') + ')'
          }
        },
        hue: {
          component: 'slider',
          class: 'satus-color-picker__hue',
          storage: false,
          value: hsl[0],
          max: 360,
          on: {
            change: function() {
              var modal = this.skeleton.parentSkeleton.parentSkeleton,
                hsl = modal.storage.value;

              hsl[0] = this.values[0];

              this.previousSibling.style.backgroundColor = 'hsl(' + hsl[0] + 'deg,' + hsl[1] + '%, ' + hsl[2] + '%)';
              this.parentSkeletonNode.previousSibling.style.backgroundColor = 'hsl(' + hsl[0] + 'deg, 100%, 50%)';
            }
          }
        }
      },
      actions: {
        component: 'section',
        variant: 'actions',

        reset: {
          component: 'button',
          text: 'reset',
          on: {
            click: function() {
              var modal = this.skeleton.parentSkeleton.parentSkeleton,
                component = modal.parentSkeleton;

              component.rgb = component.skeleton.value;

              component.storage.value = component.rgb;

              component.valueElement.style.backgroundColor = 'rgb(' + component.rgb.join(',') + ')';

              modal.rendered.close();
            }
          }
        },
        cancel: {
          component: 'button',
          text: 'cancel',
          on: {
            click: function() {
              this.skeleton.parentSkeleton.parentSkeleton.rendered.close();
            }
          }
        },
        ok: {
          component: 'button',
          text: 'OK',
          on: {
            click: function() {
              var modal = this.skeleton.parentSkeleton.parentSkeleton,
                component = modal.parentSkeleton;

              component.rgb = satus.color.hslToRgb(modal.storage.value);

              component.storage.value = component.rgb;

              component.valueElement.style.backgroundColor = 'rgb(' + component.rgb.join(',') + ')';

              modal.rendered.close();
            }
          }
        }
      }
    }, this.baseProvider.layers[0]);
  });

  component.addEventListener('render', function() {
    component.rgb = this.storage.value || [0, 100, 50];

    component_value.style.backgroundColor = 'rgb(' + component.rgb.join(',') + ')';
  });
};