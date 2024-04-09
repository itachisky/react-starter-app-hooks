import { useEffect } from "react";
import { useResource } from "react-request-hook";

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

    const [themes, getThemes] = useResource(() => ({
        url: '/themes',
        method: 'GET'
    }))

    useEffect(getThemes, []);

    const { data } = themes;

    function isActive (t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }

    return (
        <div>
            Change Theme:
            {
                data && data.value.map((t, i) => (
                    <ThemeItem key={`theme-${i}`} theme={t} active={isActive(t)} onCLick={() => setTheme(t)} />
                ))
            }
        </div>
    )
}