import { siteConfig } from "@/data/site";

const networks = [
    {
        label: "LinkedIn",
        href: siteConfig.social.linkedin,
    },
    {
        label: "Upwork",
        href: siteConfig.social.upwork,
    },
    {
        label: "Fiverr",
        href: siteConfig.social.fiverr,
    },
    {
        label: "GitHub",
        href: siteConfig.social.github,
    },
];

export default function SocialLinks({ className = "", linkClassName = "" }) {
    const activeNetworks = networks.filter((network) => network.href);

    if (!activeNetworks.length) {
        return null;
    }

    return (
        <div className={className}>
            {activeNetworks.map((network) => (
                <a
                    key={network.label}
                    href={network.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                >
                    {network.label}
                </a>
            ))}
        </div>
    );
}
