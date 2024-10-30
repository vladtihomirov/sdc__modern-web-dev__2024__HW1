import {Tabs} from '../../../moleculas/tabs/Tabs';
import styles from './MenuSmallView.module.css';
import {useEffect, useState} from "react";
import {IMenuItem} from "../../../../@types/IMenuItem.ts";
import {MenuGrid} from "../menu-grid/MenuGrid.tsx";
import {Button} from "../../../atoms/button/Button.tsx";
import {useGetData, useJSONData} from "../../../../hooks/fetch.ts";

export const MenuSmallView = () => {
  const {
    data: menuItems,
    error: menuItemsError,
    loading: menuItemsLoading
  } = useGetData<IMenuItem[]>('meals', []);
  const {
    data: categories,
    error: categoriesError,
    loading: categoriesLoading
  } = useJSONData<string[]>('categories', []);

  const pageSize = 6;
  const [filteredMenuItems, setFilteredMenuItems] = useState<IMenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [page, setPage] = useState(1);
  const [canSeeMore, setCanSeeMore] = useState(true);

  const filterMenu = (tab: string) => {
    setFilteredMenuItems(menuItems.filter(item => item.category === tab));
  }

  const selectCategory = (tab: string) => {
    if (tab !== selectedCategory) {
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
    if (selectedCategory) {
      setFilteredMenuItems(menuItems
        .filter(item => item.category === selectedCategory)
        .slice(0, page * pageSize)
      );
    }
  }, [menuItems, page, selectedCategory]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  return (
    <div className={styles.menuSmallView}>
      {categoriesLoading && <p>Loading categories...</p>}
      {categoriesError && <p>Error loading categories: {categoriesError}</p>}
      {categories && !categoriesError && !categoriesLoading &&
          <Tabs initialTabs={categories} selectedTab={selectedCategory} onSelect={selectCategory}/>
      }
      {menuItemsLoading && <p>Loading menu items...</p>}
      {menuItemsError && <p>Error loading menu items: {menuItemsError}</p>}
      {menuItems && !menuItemsError && !menuItemsLoading &&
          <>
              <MenuGrid menuItems={filteredMenuItems}/>
            {canSeeMore && <Button onClick={onSeeMore}>See more</Button>}
          </>
      }
    </div>
  )
}