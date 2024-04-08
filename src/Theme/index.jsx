const Themes = [
    { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
    { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' }
];

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
    function isActive (t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }

    return (
        <div>
            Change Theme:
            {
                Themes.map((t, i) => (
                    <ThemeItem key={`theme-${i}`} theme={t} active={isActive(t)} onCLick={() => setTheme(t)} />
                ))
            }
        </div>
    )
}