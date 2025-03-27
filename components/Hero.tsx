import { subtitle, title } from './primitives';

const Hero: React.FC = () => {
  return (
    <div className="inline-block md:max-w-xl text-center justify-center">
      <span className={title()}>Make </span>
      <span className={title({ class: 'text-success' })}>Security </span>
      <span className={title({ class: 'text-primary' })}>& Comfortable</span>
      <span className={title()}> to send social media link </span>
      <br />
      <div className={subtitle({ class: 'text-xs mb-4' })}>
        without your social media account.
      </div>
    </div>
  );
};

export default Hero;
