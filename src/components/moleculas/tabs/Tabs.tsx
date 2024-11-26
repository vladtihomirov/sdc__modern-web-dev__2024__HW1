import './Tabs.scss';
import {useEffect, useState} from "react";
import {Button} from "../../atoms/button/Button.tsx";

type TabsProps = {
  initialTabs: string[];
  selectedTab: string;
  onSelect: (tab: string) => void;
}

type Tab = {
  name: string;
  isActive: boolean;
}

export const Tabs = ({initialTabs = [], selectedTab, onSelect}: TabsProps) => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    setTabs(initialTabs.map((tab) => ({name: tab, isActive: tab === selectedTab})));
  }, [initialTabs, selectedTab]);

  const onClick = (tab: Tab) => {
    setTabs(tabs.map(t => ({...t, isActive: t.name === tab.name})));
    onSelect(tab.name);
  }

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <Button key={tab.name} onClick={() => onClick(tab)} appearance={tab.isActive ? 'primary' : 'alt'}>{tab.name}</Button>
      ))}
    </div>
  )
}