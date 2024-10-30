import { Component } from 'react';
import style from './Footer.module.css';
import { EPages } from "../../../@types/EPages.ts";
import { observer } from "mobx-react";
import { navigationStore } from "../../../stores/NavigationStore.ts";

@observer
export class Footer extends Component {
  handleNavigation = (page: EPages) => {
    navigationStore.setActiveItem(page);
  };

  render() {
    return (
      <div className={style.footer}>
        <div className={['wrapper', style.footer__wrapper].join(' ')}>
          <div className={style.footer__menu}>
            <div className={style.footer__menu__logo}>
              <img src={'/logo.svg'} alt="logo" width={40} height={51} />
              <p className={style.footer__menu__logo__slogan}>
                Takeaway & Delivery template<br />
                for small - medium businesses.
              </p>
            </div>
            <div className={style.footer__menu__columns}>
              <div className={style.footer__menu__columns__item}>
                <span className={style.footer__menu__columns__item__title}>COMPANY</span>
                <a href={EPages.HOME} onClick={() => this.handleNavigation(EPages.HOME)} className={style.footer__menu__columns__item__row}>Home</a>
                <a href={EPages.ORDER} onClick={() => this.handleNavigation(EPages.ORDER)} className={style.footer__menu__columns__item__row}>Order</a>
                <a href={EPages.FAQ} onClick={() => this.handleNavigation(EPages.FAQ)} className={style.footer__menu__columns__item__row}>FAQ</a>
                <a href={EPages.CONTACT} onClick={() => this.handleNavigation(EPages.CONTACT)} className={style.footer__menu__columns__item__row}>Contact</a>
              </div>
              <div className={style.footer__menu__columns__item}>
                <span className={style.footer__menu__columns__item__title}>TEMPLATE</span>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className={style.footer__menu__columns__item__row}>Style Guide</a>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className={style.footer__menu__columns__item__row}>Changelog</a>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className={style.footer__menu__columns__item__row}>Licence</a>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className={style.footer__menu__columns__item__row}>Webflow University</a>
              </div>
              <div className={style.footer__menu__columns__item}>
                <span className={style.footer__menu__columns__item__title}>FLOWBASE</span>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className={style.footer__menu__columns__item__row}>More Cloneables</a>
              </div>
            </div>
          </div>
          <div className={style.footer__subFooter}>
            <div className={style.footer__subFooter__authors}>
              Built by <span>Flowbase</span> · Powered by <span>Webflow</span>
            </div>
            <div className={style.footer__subFooter__socials}>
              <div className={style.footer__subFooter__socials__item}>
                <img src="/icons/instagram.svg" alt="Instagram" />
              </div>
              <div className={style.footer__subFooter__socials__item}>
                <img src="/icons/x.svg" alt="X" />
              </div>
              <div className={style.footer__subFooter__socials__item}>
                <img src="/icons/youtube.svg" alt="YouTube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
