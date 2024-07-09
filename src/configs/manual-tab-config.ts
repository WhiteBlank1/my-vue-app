interface TabItem {
  label: string;
  name: string;
}

const MANUAL_TAB_CONFIGS: Array<TabItem> = [
  {
    label: 'reggister',
    name: 'Reggister',
  },
  {
    label: 'modify',
    name: 'Modify',
  },
  {
    label: 'delete',
    name: 'Delete',
  },
  {
    label: 'View Layout',
    name: 'viewLayout',
  },
]

export default MANUAL_TAB_CONFIGS;