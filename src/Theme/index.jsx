import { useEffect, useState } from "react";

function ThemeItem ({ theme, active, onCLick }) {
    return (
        <span onClick={onCLick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
            <span style={{ color: theme.primaryColor }}>primary
            </span> /
            <span style={{ color: theme.secondaryColor }}>secondary
            </span>
        </span>
    )
}

export default function ChangeTheme ({ theme, setTheme }) {

    const [themes, setThemes] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/data/themesOptions`)
        .then((res) => res.json())
        .then(({ value }) => setThemes(value))
    }, [])

    function isActive (t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }

    return (
        <div>
            Change Theme:
            {
                themes.map((t, i) => (
                    <ThemeItem key={`theme-${i}`} theme={t} active={isActive(t)} onCLick={() => setTheme(t)} />
                ))
            }
        </div>
    )
}