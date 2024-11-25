import { Component } from 'react';
import styles from './Header.module.css';
import { Logo } from '../../moleculas/logo/Logo.tsx';
import { MenuNavigation } from '../../moleculas/menu-navigation/MenuNavigation.tsx';
import { CartButton } from '../../atoms/cart-button/CartButton.tsx';

type HeaderState = {
  scrolled: boolean;
};

export class Header extends Component<object, HeaderState> {
  constructor(props: object) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrolled: window.scrollY > 50 });
  };

  render() {
    return (
      <header className={[styles.header, this.state.scrolled ? styles.header__scrolled : ''].join(' ')}>
        <div className={['wrapper', styles.header__wrapper].join(' ')}>
          <Logo />
          <div className={styles.header__navigation}>
            <MenuNavigation />
            <CartButton />
          </div>
        </div>
      </header>
    );
  }
}
