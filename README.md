# Rc-Dock-Customized

- **Origin Version:** https://github.com/ticlo/rc-dock
- **Docs:** https://ticlo.github.io/rc-dock

## types

### LayoutDataProps (customized part)

| Property |  Type  |        Comments        | Default  |
| :------: | :----: | :--------------------: | :------: |
| maxDepth | number | limit level of docking | optional |

```typescript
import DockLayout from 'rc-dock';
import type { LegacyRef } from 'react';

<DockLayout
  defaultLayout={layout}
  ref={dockRef as LegacyRef<DockLayout>}
  groups={groups}
  onLayoutChange={onLayoutChange}
  dropMode="edge"
  maxDepth={2}
/>
```

### TabGroup (customized part)

| Property  |             Type              |             Comments             | Default  |
| :-------: | :---------------------------: | :------------------------------: | :------: |
| draggable | (panel: PanelData) => boolean | control tab can draggable or not | optional |

```typescript
import type { TabGroup } from "rc-dock/src/DockData.ts";

const groups = {
  general: {
    floatable: true,
    closable: false,
    draggable: (panelData: PanelData) => {
      if (panelData.activeId) return panelData.activeId !== "default";
      return panelData.id !== "default";
    },
  },
} as { [key: string]: TabGroup };
```
