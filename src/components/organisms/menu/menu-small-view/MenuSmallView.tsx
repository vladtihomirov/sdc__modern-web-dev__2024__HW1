import {Tabs} from '../../../moleculas/tabs/Tabs';
import styles from './MenuSmallView.module.css';
import {useEffect, useState} from "react";
import {IMenuItem} from "../../../../@types/IMenuItem.ts";
import {MenuService} from "../../../../services/MenuService.ts";
import {MenuGrid} from "../menu-grid/MenuGrid.tsx";
import {Button} from "../../../atoms/button/Button.tsx";

export const MenuSmallView = () => {
  const pageSize = 6;
  const [categories, setCategories] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
  const [filteredMenuItems, setFilteredMenuItems] = useState<IMenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [page, setPage] = useState(1);
  const [canSeeMore, setCanSeeMore] = useState(true);

  const filterMenu = (tab: string) => {
    setFilteredMenuItems(menuItems.filter(item => item.category === tab));
  }

  const selectCategory = (tab: string) => {
    if(tab !== selectedCategory) {
      setSelectedCategory(tab);
      setPage(1);
      setCanSeeMore(true);
      filterMenu(tab);
    }
  }

  const onSeeMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    setCanSeeMore(newPage * pageSize < menuItems
      .filter(item => item.category === selectedCategory).length);
  }

  useEffect(() => {
    MenuService.getCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
      setSelectedCategory(fetchedCategories[0]);
      filterMenu(fetchedCategories[0]);
    });
    MenuService.getMenuItems().then((menuItems) => setMenuItems(menuItems));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredMenuItems(menuItems
        .filter(item => item.category === selectedCategory)
        .slice(0, page * pageSize)
      );
    }
  }, [menuItems, page, selectedCategory]);

  return (
    <div className={styles.menuSmallView}>
      <Tabs initialTabs={categories} selectedTab={selectedCategory} onSelect={selectCategory}/>
      <MenuGrid menuItems={filteredMenuItems}/>
      {canSeeMore && <Button onClick={onSeeMore}>See more</Button>}
    </div>
  )
}