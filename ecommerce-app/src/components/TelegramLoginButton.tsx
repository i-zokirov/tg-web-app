import React, { useEffect, useRef, ReactNode } from "react";
import PropTypes from "prop-types";

declare global {
    interface Window {
        TelegramLoginWidget?: { dataOnauth: (user: any) => void };
    }
}

interface Props {
    botName: string;
    dataOnauth?: (user: any) => void;
    buttonSize?: "large" | "medium" | "small";
    cornerRadius?: number;
    requestAccess?: string;
    usePic?: boolean;
    lang?: string;
    widgetVersion?: number;
    className?: string;
    children?: ReactNode;
    dataAuthUrl: string;
}

const TelegramLoginButton: React.FC<Props> = ({
    botName,
    dataOnauth,
    dataAuthUrl,
    buttonSize = "large",
    cornerRadius,
    requestAccess = "write",
    usePic = true,
    lang = "en",
    widgetVersion = 9,
    className,
    children,
}) => {
    const instance = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.TelegramLoginWidget = {
            dataOnauth: (user: any) => dataOnauth && dataOnauth(user),
        };

        const script = document.createElement("script");
        script.src = `https://telegram.org/js/telegram-widget.js?${widgetVersion}`;
        script.setAttribute("data-telegram-login", botName);
        script.setAttribute("data-size", buttonSize);
        if (cornerRadius !== undefined) {
            script.setAttribute("data-radius", cornerRadius.toString());
        }
        script.setAttribute("data-request-access", requestAccess);
        script.setAttribute("data-userpic", usePic.toString());
        script.setAttribute("data-lang", lang);
        if (dataAuthUrl !== undefined) {
            script.setAttribute("data-auth-url", dataAuthUrl);
        } else {
            script.setAttribute(
                "data-onauth",
                "TelegramLoginWidget.dataOnauth(user)"
            );
        }
        script.async = true;
        instance.current?.appendChild(script);

        // cleanup
        return () => {
            delete window.TelegramLoginWidget;
            instance.current && (instance.current.innerHTML = "");
        };
    }, [
        botName,
        buttonSize,
        cornerRadius,
        dataOnauth,
        lang,
        requestAccess,
        usePic,
        widgetVersion,
    ]);

    return (
        <div className={className} ref={instance}>
            {children}
        </div>
    );
};

TelegramLoginButton.propTypes = {
    botName: PropTypes.string.isRequired,
    dataOnauth: PropTypes.func,
    buttonSize: PropTypes.oneOf(["large", "medium", "small"]),
    cornerRadius: PropTypes.number,
    requestAccess: PropTypes.string,
    usePic: PropTypes.bool,
    lang: PropTypes.string,
    widgetVersion: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default TelegramLoginButton;
