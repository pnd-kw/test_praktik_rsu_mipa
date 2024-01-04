const Button = ({ onClick, children, className }) => {
    return (
        <button className="bg-slate-200 text-slate-950 font-white px-4 rounded full" onClick={onClick}>{children}</button>
    );
}

export default Button;