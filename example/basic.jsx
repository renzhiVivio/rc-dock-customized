import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {jsxTab, htmlTab} from './prism-tabs';
import {DockLayout, DockContextType} from '../lib';

let tab = {
  content: <div>Tab Content</div>,
  closable: true,
};

const groups = {
  'general': {
    floatable: true,
    closable: false,
    draggable:(panelData) => {
      if(panelData.activeId)return !panelData.activeId.startsWith('test') 
      return !panelData.id.startsWith('test') 
    },
    panelExtra: (panelData, context) => {

      let buttons = [];
      if (panelData.parent.mode !== 'window') {
        buttons.push(
          <span className='my-panel-extra-btn' key='maximize'
                title={panelData.parent.mode === 'maximize' ? 'Restore' : 'Maximize'}
                onClick={() => context.dockMove(panelData, null, 'maximize')}>
          {panelData.parent.mode === 'maximize' ? '▬' : '▣'}
          </span>
        )
       
      }
     
      return <div>{buttons}</div>
    }
  
  },
};

let layout = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          mode: 'vertical',
          size: 200,
          children: [
            {
              
              tabs: [{...tab, id: 'test1', title: 'Test1',group:'general',}, {...tab, id: 't2', title: 'Test2',group:'general',}],
            },
            {
              tabs: [{
                ...tab, id: 'minsize', title: 'Min Size', content: (
                  <div>
                    <p>This tab has a minimal size</p>
                    150 x 150 px
                  </div>
                ), minWidth: 150, minHeight: 150,
              }, {...tab, id: 't4', title: 'Tab 4'}],
            },
          ]
        },
        {
          size: 1000,
          tabs: [
            {
              id: 'test3', title: 'Test3', content: (
                <div>
                  This panel won't be removed from layout even when last Tab is closed
                </div>
              ),
              group:'general',

            },
            {...tab, id: 't4', title: 'Test4',group:'general',},
            {...tab, id: 't5', title: 'Tab 4'},
              {...tab, id: 't6', title: 'Tab 4'},
              {...tab, id: 't7', title: 'Tab 4'},
              {...tab, id: 't8', title: 'Tab 4'},
              {...tab, id: 't9', title: 'Tab 4'},
              {...tab, id: 't41', title: 'Tab 4'},
              {...tab, id: 't42', title: 'Tab 4'},
              {...tab, id: 't43', title: 'Tab 4'},
              {...tab, id: 't44', title: 'Tab 4'},
              {...tab, id: 't45', title: 'Tab 4'},
              {...tab, id: 't46', title: 'Tab 4'},
              {...tab, id: 't47', title: 'Tab 4'},
              {...tab, id: 't48', title: 'Tab 4'},
              {...tab, id: 't49', title: 'Tab 4'},
              {...tab, id: 't411', title: 'Tab 4'},
              {...tab, id: 't412', title: 'Tab 4'},
              {...tab, id: 't413', title: 'Tab 4'},
              {...tab, id: 't414', title: 'Tab 4'},

          ],
          panelLock: {panelStyle: 'main'},
        },
        {
          size: 200,
          tabs: [{...tab, id: 't8', title: 'Tab 8'}],
        },
      ]
    },
    // floatbox: {
    //   mode: 'float',
    //   children: [
    //     {
    //       tabs: [
    //         {...tab, id: 't9', title: 'Tab 9', content: <div>Float</div>},
    //         {...tab, id: 't10', title: 'Tab 10'}
    //       ],
    //       x: 300, y: 150, w: 400, h: 300
    //     }
    //   ]
    // }
  }
;
if (window.innerWidth < 600) {
  // remove a column for mobile
  layout.dockbox.children.pop();
}

let count = 0;

class Demo extends React.Component {

  onDragNewTab = (e) => {
    let content = `New Tab ${count++}`;
    DragStore.dragStart(DockContextType, {
      tab: {
        id: content,
        content: <div style={{padding: 20}}>{content}</div>,
        title: content,
        closable: true,
      }
    }, e.nativeEvent);
  };

  render() {
    return (
      <DockLayout defaultLayout={layout} 
      groups={groups}
      dropMode='edge'
      maxDepth={4}
      style={{position: 'absolute', left: 10, top: 10, right: 10, bottom: 10}}/>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
