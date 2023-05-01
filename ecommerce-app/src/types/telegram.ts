export interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
}
export interface WebAppChat {
    id: number;
    type: "private" | "group" | "supergroup" | "channel";
    title: string;
    username?: string;
    photo_url?: string;
}
export interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat?: WebAppChat;
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date?: number;
    hash: string;
}

export interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
}

export type BackButton = {
    isVisible: boolean; // Shows whether the button is visible. Set to false by default.
    onClick(callback: () => void): void; // A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('backButtonClicked', callback)
    offClick(callback: () => void): void; // A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('backButtonClicked', callback)
    show(): void; // A method to make the button active and visible.
    hide(): void; // A method to hide the button.
};

export type MainButton = {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): void;
    onClick(callback: () => void): void;
    offClick(callback: () => void): void;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    showProgress(leaveActive?: boolean): void;
    hideProgress(): void;
    setParams(params: {
        text?: string;
        color?: string;
        text_color?: string;
        is_active?: boolean;
        is_visible?: boolean;
    }): void;
};

export type HapticStyle = "light" | "medium" | "heavy" | "rigid" | "soft";
export type HapticType = "error" | "success" | "warning";

export type HapticFeedback = {
    impactOccurred(style: String): HapticStyle;
    notificationOccurred(type: String): HapticType;
    selectionChanged(): HapticFeedback;
};

export interface WebApp {
    initData: string;
    initDataUnsafe: WebAppInitData;
    version: string;
    platform: string;
    colorScheme: "light" | "dark";
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    isClosingConfirmationEnabled: boolean;
    BackButton: BackButton;
    MainButton: MainButton;
    HapticFeedback: HapticFeedback;
    isVersionAtLeast: (version: string) => boolean;
    setHeaderColor: (color: "bg_color" | "secondary_bg_color" | string) => void;
    setBackgroundColor: (
        color: "bg_color" | "secondary_bg_color" | string
    ) => void;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    onEvent: (eventType: string, eventHandler: Function) => void;
    offEvent: (eventType: string, eventHandler: Function) => void;
    sendData: (data: string) => void;
    switchInlineQuery: (
        query: string,
        choose_chat_types?: ("users" | "bots" | "groups" | "channels")[]
    ) => void;
    openLink: (url: string, options?: object) => void;
}
