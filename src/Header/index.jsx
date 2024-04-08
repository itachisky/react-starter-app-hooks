import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"


export default function Header() {
    const { primaryColor } = useContext(ThemeContext);

    return (
        <h1 style={{ color: primaryColor }}>
            React started app
        </h1>
    )
}