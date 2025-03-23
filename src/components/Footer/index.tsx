import packageInfo from '../../../package.json'
export default function Footer() {
    const { version } = packageInfo
    return (
        <footer>
            <p>© 2025 GivFNZ</p>
            <p>Version: {version}</p>
        </footer>
    )
}