import React, { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string; // href is required
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (href) {
            window.location.href = href; // Navigate to the URL
        }
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

export default Link;
