import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, WebAppChat } from "../../../types";

interface TelegramState {
    user_data: User | null;
    auth_data: string | null;
    chat: WebAppChat | undefined;
    query_id?: string;
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
}

const initialState: TelegramState = {
    user_data: null,
    auth_data: null,
    chat: undefined,
};

const telegramSlice = createSlice({
    name: "telegram",
    initialState,
    reducers: {
        setUser(
            state,
            action: PayloadAction<{
                user: User;
                auth_data: string;
                chat: WebAppChat | undefined;
                query_id?: string;
                chat_type?:
                    | "sender"
                    | "private"
                    | "group"
                    | "supergroup"
                    | "channel";
                chat_instance?: string;
                start_param?: string;
                can_send_after?: number;
            }>
        ) {
            state.user_data = action.payload.user;
            state.auth_data = action.payload.auth_data;
            state.chat = action.payload.chat;
            state.query_id = action.payload.query_id;
            state.chat_type = action.payload.chat_type;
            state.chat_instance = action.payload.chat_instance;
            state.start_param = action.payload.start_param;
            state.can_send_after = action.payload.can_send_after;
        },
    },
});

export const { setUser } = telegramSlice.actions;

export default telegramSlice.reducer;
