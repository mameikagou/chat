import BotIcon from "../icons/bot-icon.svg";
import User from "../icons/common-user.svg";

export interface ModelType {
}
export default function Avatar(props: { isUser: boolean; model?: ModelType }) {
    if (props.isUser) {
        return <User className="user-avatar" />;
    } else {
        // if (props.model)
        return <BotIcon className="user-avatar" />;
    }
}
