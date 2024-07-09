interface TabItem {
  label: string;
  name: string;
}

const DATA_MANAGE_TAB_CONFIGS: Array<TabItem> = [
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
    label: 'View Shelter',
    name: 'viewShelter',
  },
  {
    label: 'View Layout',
    name: 'viewLayout',
  },
]

export default DATA_MANAGE_TAB_CONFIGS;