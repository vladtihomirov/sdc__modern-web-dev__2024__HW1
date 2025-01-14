import './Tabs.scss';
import {Button} from "../../atoms/button/Button.tsx";

type TabsProps = {
  tabs: string[];
  selectedTab: string;
  onSelect: (tab: string) => void;
}

export const Tabs = ({tabs = [], selectedTab, onSelect}: TabsProps) => {
  const onClick = (tab: string) => {
    onSelect(tab);
  }

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <Button key={tab} onClick={() => onClick(tab)} appearance={tab === selectedTab ? 'primary' : 'alt'}>{tab}</Button>
      ))}
    </div>
  )
}