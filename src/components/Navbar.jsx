import GlassCard from './GlassCard';
import Magnetic from './Magnetic';

const Navbar = () => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: 'https://drive.google.com/drive/folders/1aXoxUCHo-ExpwEnvZoSsG8-ITAX8B72G?usp=drive_link', external: true }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: '20px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 100
        }}>
            <GlassCard className="navbar" hoverEffect={false}>
                <ul style={{
                    display: 'flex',
                    gap: '2rem',
                    listStyle: 'none',
                    padding: '1rem 3rem',
                    margin: 0
                }}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Magnetic strength={0.4}>
                                <a
                                    href={link.href}
                                    target={link.external ? "_blank" : "_self"}
                                    rel={link.external ? "noopener noreferrer" : ""}
                                    style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        opacity: 0.8,
                                        letterSpacing: '0.5px',
                                        display: 'block', // Ensure hit area is good
                                        padding: '0.5rem'  // Increase hit area
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                                >
                                    {link.name}
                                </a>
                            </Magnetic>
                        </li>
                    ))}
                </ul>
            </GlassCard>
        </nav>
    );
};

export default Navbar;
