import { ContentState, convertFromRaw, EditorState } from "draft-js";
import { MessageCreate } from "../../../../DTO/message/MessageCreate";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";

const INITIAL_FORM_VALUES: MessageCreate = {
    team: "8-1",
    recipientId: 0,
    sender: '',
    profileImageURL: "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
    relationship: "친구",
    content: '',
    font: "Noto Sans",
}

function useInitialMessage(message?: MessageRetrieve) {
    const initialForm: MessageCreate = message
        ? {
            team:"8-1",
            recipientId: message.recipientId,
            sender: message.sender,
            profileImageURL: message.profileImageURL,
            relationship: message.relationship,
            content: '',
            font: message.font,
        }
        : INITIAL_FORM_VALUES;

    const initialContent: ContentState = message
        ? convertFromRaw(JSON.parse(message.content))
        : EditorState.createEmpty().getCurrentContent();

    return {initialForm, initialContent};
}

export default useInitialMessage;