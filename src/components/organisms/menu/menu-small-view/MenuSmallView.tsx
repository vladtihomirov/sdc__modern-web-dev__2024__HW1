import {Tabs} from '../../../moleculas/tabs/Tabs';
import styles from './MenuSmallView.module.scss';
import {useEffect, useMemo, useState} from "react";
import {MenuService} from "../../../../services/MenuService.ts";
import {MenuGrid} from "../menu-grid/MenuGrid.tsx";
import {Button} from "../../../atoms/button/Button.tsx";

export const MenuSmallView = () => {
  const pageSize = 6;
  const [menuItems, runMenuItems] = MenuService.useMenuItems();
  const [categories, runCategories] = MenuService.useCategories();

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [page, setPage] = useState(1);

  const filteredItems = useMemo(() => {
    return menuItems.data
      .filter(item => selectedCategory ? item.category === selectedCategory : true)
  }, [menuItems.data, selectedCategory]);

  const pagedItems = useMemo(() => {
    return filteredItems.slice(0, pageSize * page);
  }, [filteredItems, page]);

  const canSeeMore = useMemo(() => {
    return filteredItems.length > pageSize * page;
  }, [filteredItems, page]);

  useEffect(() => {
    runMenuItems();
    runCategories();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (categories.data.length > 0) {
      setSelectedCategory(categories.data[0]);
    }
  }, [categories.data]);

  const selectCategory = (tab: string) => {
    if (tab !== selectedCategory) {
      setSelectedCategory(tab);
      setPage(1);
    }
  }

  const onSeeMore = () => {
    const newPage = page + 1;
    setPage(newPage);
  }

  return (
    <>
      {(menuItems.loading || categories.loading) && <div>Loading...</div>}
      {(menuItems.error || categories.error) && <div>Error: {menuItems.error || categories.error}</div>}
      {(!menuItems.loading && !categories.loading && !menuItems.error && !categories.error) && (
        <div className={styles.menuSmallView}>
          <Tabs tabs={categories.data} selectedTab={selectedCategory} onSelect={selectCategory}/>
          <MenuGrid menuItems={pagedItems}/>
          {canSeeMore && <Button onClick={onSeeMore}>See more</Button>}
        </div>
      )}
    </>
  );
}