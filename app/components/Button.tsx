Type ButtonProps = {
    type: "button" | "submit",
    title: string,
    icon?: string,
    variant: "btn_dark_green" | "btn_green"

}

const Button = ({ type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        type="button"
        className="btn"
        >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="btn__label">{title}</label>
    </button>
  )
}

export default Button