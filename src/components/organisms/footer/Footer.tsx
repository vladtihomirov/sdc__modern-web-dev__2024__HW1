import style from './Footer.module.scss';
import {EPages} from "../../../@types/EPages.ts";
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";
import logoImage from '../../../../public/logo.svg';
import instagramImage from '../../../../public/icons/instagram.svg';
import xImage from '../../../../public/icons/x.svg';
import youtubeImage from '../../../../public/icons/youtube.svg';

export const Footer = observer(() => {
  const navigate = useNavigate();

  return (
    <div className={style.footer}>
      <div className={['wrapper', style.footer__wrapper].join(' ')}>
        <div className={style.footer__menu}>
          <div className={style.footer__menu__logo}>
            <img src={logoImage} alt="logo" width={40} height={51}/>
            <p className={style.footer__menu__logo__slogan}>
              Takeaway & Delivery template<br/>
              for small - medium businesses.
            </p>
          </div>
          <div className={style.footer__menu__columns}>
            <div className={style.footer__menu__columns__item}>
              <span className={style.footer__menu__columns__item__title}>company</span>
              <Link to={EPages.HOME} onClick={() => navigate(EPages.HOME)} className={style.footer__menu__columns__item__row}>Home</Link>
              <Link to={EPages.ORDER} onClick={() => navigate(EPages.ORDER)} className={style.footer__menu__columns__item__row}>Order</Link>
              <Link to={EPages.FAQ} onClick={() => navigate(EPages.FAQ)} className={style.footer__menu__columns__item__row}>FAQ</Link>
              <Link to={EPages.CONTACT} onClick={() => navigate(EPages.CONTACT)} className={style.footer__menu__columns__item__row}>Contact</Link>
            </div>
            <div className={style.footer__menu__columns__item}>
              <span className={style.footer__menu__columns__item__title}>TEMPLATE</span>
              <a href="https://google.com/" target="_blank" className={style.footer__menu__columns__item__row}>Style Guide</a>
              <a href="https://google.com/" target="_blank" className={style.footer__menu__columns__item__row}>Changelog</a>
              <a href="https://google.com/" target="_blank" className={style.footer__menu__columns__item__row}>Licence</a>
              <a href="https://google.com/" target="_blank" className={style.footer__menu__columns__item__row}>Webflow University</a>
            </div>
            <div className={style.footer__menu__columns__item}>
              <span className={style.footer__menu__columns__item__title}>FLOWBASE</span>
              <a href="https://google.com/" target="_blank" className={style.footer__menu__columns__item__row}>More Cloneables</a>
            </div>
          </div>
        </div>
        <div className={style.footer__subFooter}>
          <div className={style.footer__subFooter__authors}>
            Built by
            <span>Flowbase</span>
            · Powered by
            <span>Webflow</span>
          </div>
          <div className={style.footer__subFooter__socials}>
            <div className={style.footer__subFooter__socials__item}>
              <img src={instagramImage} alt="instagram"/>
            </div>
            <div className={style.footer__subFooter__socials__item}>
              <img src={xImage} alt="x"/>
            </div>
            <div className={style.footer__subFooter__socials__item}>
              <img src={youtubeImage} alt="Youtube"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});