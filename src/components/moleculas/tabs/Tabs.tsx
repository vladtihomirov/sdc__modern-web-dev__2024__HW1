import {Component} from 'react';
import styles from './Tabs.module.css';
import {Button} from '../../atoms/button/Button.tsx';

type TabsProps = {
  initialTabs: string[];
  selectedTab: string;
  onSelect: (tab: string) => void;
};

type Tab = {
  name: string;
  isActive: boolean;
};

type TabsState = {
  tabs: Tab[];
};

export class Tabs extends Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);
    this.state = {
      tabs: this.initializeTabs(props.initialTabs, props.selectedTab),
    };
  }

  initializeTabs = (initialTabs: string[], selectedTab: string): Tab[] => {
    return initialTabs.map(tab => ({
      name: tab,
      isActive: tab === selectedTab,
    }));
  };

  componentDidUpdate(prevProps: TabsProps) {
    if (prevProps.initialTabs !== this.props.initialTabs || prevProps.selectedTab !== this.props.selectedTab) {
      this.setState({
        tabs: this.initializeTabs(this.props.initialTabs, this.props.selectedTab),
      });
    }
  }

  onClick = (tab: Tab) => {
    this.setState({
      tabs: this.state.tabs.map(t => ({
        ...t,
        isActive: t.name === tab.name,
      })),
    });
    this.props.onSelect(tab.name);
  };

  render() {
    const {tabs} = this.state;

    return (
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <Button
            key={tab.name}
            onClick={() => this.onClick(tab)}
            appearance={tab.isActive ? 'primary' : 'alt'}>
            {tab.name}
          </Button>
        ))}
      </div>
    );
  }
}
