import Image from 'next/image';

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string; 
  variant: string; 
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${variant}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="btn__label">{title}</label>
    </button>
  );
};

export default Button;
