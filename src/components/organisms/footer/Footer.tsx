import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={['wrapper', style.footer__wrapper].join(' ')}>
        <div className={style.footer__menu}>
          <div className={style.footer__menu__logo}>
            <img src={'/logo.svg'} alt="logo" width={40} height={51}/>
            <p className={style.footer__menu__logo__slogan}>
              Takeaway & Delivery template<br/>
              for small - medium businesses.
            </p>
          </div>
          <div className={style.footer__menu__columns}>
            <div className={style.footer__menu__columns__item}>
              <div className={style.footer__menu__columns__item__title}>company</div>
              <div className={style.footer__menu__columns__item__row}>Home</div>
              <div className={style.footer__menu__columns__item__row}>Order</div>
              <div className={style.footer__menu__columns__item__row}>FAQ</div>
              <div className={style.footer__menu__columns__item__row}>Contact</div>
            </div>
            <div className={style.footer__menu__columns__item}>
              <div className={style.footer__menu__columns__item__title}>TEMPLATE</div>
              <div className={style.footer__menu__columns__item__row}>Style Guide</div>
              <div className={style.footer__menu__columns__item__row}>Changelog</div>
              <div className={style.footer__menu__columns__item__row}>Licence</div>
              <div className={style.footer__menu__columns__item__row}>Webflow University</div>
            </div>
            <div className={style.footer__menu__columns__item}>
              <div className={style.footer__menu__columns__item__title}>FLOWBASE</div>
              <div className={style.footer__menu__columns__item__row}>More Cloneables</div>
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
              <img src="/icons/instagram.svg" alt="instagram"/>
            </div>
            <div className={style.footer__subFooter__socials__item}>
              <img src="/icons/x.svg" alt="x"/>
            </div>
            <div className={style.footer__subFooter__socials__item}>
              <img src="/icons/youtube.svg" alt="Youtube"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}