import React from "react";

type props = {
    sender: string,
    handleSenderChange: (newSender: string) => void,
}

function WriteModalSender({ sender, handleSenderChange }: props) {

    const onSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSenderChange(e.target.value);
        if (sender.length >= 40) handleSenderChange(sender.slice(0, 39));
    }

    return (
        <label className="w-full flex flex-col gap-3">
            <span className="text-2xl font-bold text-[#181818]">From.</span>
            <input
                className="w-full h-[3.125rem] border border-solid border-[#CCCCCC] rounded-lg px-4 text-[#181818] focus:outline-0"
                placeholder="이름을 입력해 주세요."
                value={sender}
                onChange={onSenderChange}
            />
        </label>
    )
}

export default WriteModalSender;