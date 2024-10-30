import { Component } from 'react';
import { Tabs } from '../../../moleculas/tabs/Tabs';
import styles from './MenuSmallView.module.css';
import { IMenuItem } from '../../../../@types/IMenuItem.ts';
import { MenuService } from '../../../../services/MenuService.ts';
import { MenuGrid } from '../menu-grid/MenuGrid.tsx';
import { Button } from '../../../atoms/button/Button.tsx';

type MenuSmallViewState = {
  categories: string[];
  menuItems: IMenuItem[];
  filteredMenuItems: IMenuItem[];
  selectedCategory: string;
  page: number;
  canSeeMore: boolean;
};

export class MenuSmallView extends Component<object, MenuSmallViewState> {
  pageSize = 6;

  constructor(props: object) {
    super(props);
    this.state = {
      categories: [],
      menuItems: [],
      filteredMenuItems: [],
      selectedCategory: '',
      page: 1,
      canSeeMore: true,
    };
  }

  componentDidMount() {
    MenuService.getCategories().then((fetchedCategories) => {
      this.setState({
        categories: fetchedCategories,
        selectedCategory: fetchedCategories[0],
      });
      this.filterMenu(fetchedCategories[0]);
    });
    MenuService.getMenuItems().then((menuItems) => this.setState({ menuItems }));
  }

  componentDidUpdate(_prevProps: object, prevState: MenuSmallViewState) {
    const { menuItems, page, selectedCategory } = this.state;
    if (
      menuItems !== prevState.menuItems ||
      page !== prevState.page ||
      selectedCategory !== prevState.selectedCategory
    ) {
      this.setState({
        filteredMenuItems: menuItems
          .filter((item) => item.category === selectedCategory)
          .slice(0, page * this.pageSize),
      });
    }
  }

  filterMenu = (category: string) => {
    this.setState({
      filteredMenuItems: this.state.menuItems.filter((item) => item.category === category),
    });
  };

  selectCategory = (category: string) => {
    if (category !== this.state.selectedCategory) {
      this.setState({
        selectedCategory: category,
        page: 1,
        canSeeMore: true,
      });
      this.filterMenu(category);
    }
  };

  onSeeMore = () => {
    const newPage = this.state.page + 1;
    const itemsInCategory = this.state.menuItems.filter(
      (item) => item.category === this.state.selectedCategory
    ).length;
    this.setState({
      page: newPage,
      canSeeMore: newPage * this.pageSize < itemsInCategory,
    });
  };

  render() {
    const { categories, filteredMenuItems, selectedCategory, canSeeMore } = this.state;

    return (
      <div className={styles.menuSmallView}>
        <Tabs initialTabs={categories} selectedTab={selectedCategory} onSelect={this.selectCategory} />
        <MenuGrid menuItems={filteredMenuItems} />
        {canSeeMore && <Button onClick={this.onSeeMore}>See more</Button>}
      </div>
    );
  }
}
