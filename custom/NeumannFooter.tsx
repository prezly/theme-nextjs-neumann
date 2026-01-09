'use client';

import styles from './NeumannFooter.module.scss';

// Neumann footer links - matching the original Neumann newsroom footer
const footerSections = [
    {
        heading: 'Company',
        links: [
            { text: 'About us', href: 'https://www.neumann.com/en-us/company/about-us' },
            { text: 'Press', href: '/category/press' },
            { text: 'Stories', href: '/category/stories' },
            { text: 'B2B', href: 'https://www.neumann.com/en-us/login' },
            {
                text: 'Neumann in the Home Studio',
                href: 'https://www.neumann.com/en-us/knowledge-base/neumann-im-homestudio/homestudio-academy',
            },
            {
                text: 'Newsletter Registration',
                href: 'https://www.neumann.com/en-us/company/newsletter',
            },
            { text: 'Jobs', href: 'https://www.neumann.com/en-us/company/jobs' },
        ],
    },
    {
        heading: 'Service & Support',
        links: [
            {
                text: 'Downloads',
                href: 'https://www.neumann.com/en-us/serviceundsupport/file-finder',
            },
            { text: 'Warranty', href: 'https://www.neumann.com/en-us/serviceundsupport/warranty' },
            { text: 'Service', href: 'https://www.neumann.com/en-us/serviceundsupport/service' },
            {
                text: 'Distributor & Service Points',
                href: 'https://www.neumann.com/en-us/serviceundsupport/distributors',
            },
            {
                text: 'Glossary Microphones',
                href: 'https://www.neumann.com/en-us/knowledge-base/glossary/glossary-microphones',
            },
            {
                text: 'Glossary Monitors',
                href: 'https://www.neumann.com/en-us/knowledge-base/glossary/glossary-monitors',
            },
            { text: 'Contact us', href: 'https://help.neumann.com/hc/en-us/requests/new' },
        ],
    },
    {
        heading: 'Products',
        links: [
            { text: 'Microphones', href: 'https://www.neumann.com/en-us/products/microphones' },
            {
                text: 'Microphone Accessories',
                href: 'https://www.neumann.com/en-us/products/microphone-accessories',
            },
            {
                text: 'Preamplifiers',
                href: 'https://www.neumann.com/en-us/products/historical/v-402',
            },
            { text: 'Monitors', href: 'https://www.neumann.com/en-us/products/monitors' },
            {
                text: 'Monitor Accessories',
                href: 'https://www.neumann.com/en-us/products/monitor-accessories',
            },
            { text: 'Headphones', href: 'https://www.neumann.com/en-us/products/headphones' },
            {
                text: 'Historical Products',
                href: 'https://www.neumann.com/en-us/products/historical',
            },
            {
                text: 'Audio Interface',
                href: 'https://www.neumann.com/en-us/products/audiointerfaces/mt-48',
            },
        ],
    },
];

const legalLinks = [
    { text: 'Imprint', href: 'https://www.neumann.com/en-us/legal/imprint' },
    { text: 'Terms of use', href: 'https://www.neumann.com/en-us/legal/terms-of-service' },
    { text: 'Privacy policy', href: 'https://www.neumann.com/en-us/legal/privacy-policy' },
    {
        text: 'Terms & Conditions',
        href: 'https://www.neumann.com/en-us/legal/terms-and-conditions',
    },
    {
        text: 'Right of cancelation',
        href: 'https://www.neumann.com/en-us/legal/right-of-cancellation',
    },
    {
        text: 'Accessibility Statement',
        href: 'https://www.neumann.com/en-us/legal/accessibility-statement',
    },
];

interface Props {
    logoUrl?: string;
}

export function NeumannFooter({ logoUrl }: Props) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main footer columns */}
                <div className={styles.columns}>
                    {footerSections.map((section) => (
                        <div key={section.heading} className={styles.column}>
                            <h5 className={styles.heading}>{section.heading}</h5>
                            <ul className={styles.list}>
                                {section.links.map((link) => (
                                    <li key={link.text}>
                                        <a
                                            href={link.href}
                                            className={styles.link}
                                            target={
                                                link.href.startsWith('http') ? '_blank' : undefined
                                            }
                                            rel={
                                                link.href.startsWith('http')
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Logo */}
                {logoUrl && (
                    <div className={styles.logo}>
                        <img src={logoUrl} alt="Neumann" />
                    </div>
                )}

                {/* Copyright */}
                <div className={styles.copyright}>
                    &copy; 2018 - {currentYear} Georg Neumann GmbH
                </div>

                {/* Legal links */}
                <div className={styles.legal}>
                    {legalLinks.map((link, index) => (
                        <span key={link.text}>
                            <a
                                href={link.href}
                                className={styles.legalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.text}
                            </a>
                            {index < legalLinks.length - 1 && (
                                <span className={styles.separator}>|</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
}
