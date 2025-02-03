import styles from './HomePage.module.scss';
import heroImage from '../../../../public/images/hero.png';
import trustpilotImage from '../../../../public/icons/trustpilot.svg';
import {Button} from "../../atoms/button/Button.tsx";

export const HomePage = () => {
  const rating = {
    value: 4.8,
    reviews: '2000+'
  }
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__hero}>
        <div className={styles.homePage__hero__title}>
          Beautiful food &<br/>
          takeaway,<span className={styles.homePage__hero__title__highlight}>delivered</span><br/>
          to your door.
        </div>
        <div className={styles.homePage__hero__desc}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and<br/>
            typesetting industry. Lorem Ipsum has been the industry's<br/>
            standard dummy text ever since the 1500.
          </p>
          <Button>Place an Order</Button>
        </div>
        <div className={styles.homePage__hero__rating}>
          <img src={trustpilotImage} alt="trustpilot-image" className={styles.homePage__hero__rating__image} height={27}
               width={110}/>
          <p>
            <span>{rating.value} out of 5</span> based on {rating.reviews} reviews
          </p>
        </div>
      </div>
      <img src={heroImage} alt="hero-img" width={600} height={500}/>
    </div>
  );
};