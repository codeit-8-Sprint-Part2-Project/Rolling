import { Recipient } from "./Posts";


function PostsHeader({ recipient }: { recipient: Recipient }) {

    return (
        <header className="w-screen h-[4.25rem] bg-white fixed top-0 z-10 border-b border-solid border-[#EDEDED]">
            <div className="h-full max-w-[78rem] mx-auto px-6 flex items-center">
                <span className="text-[1.75rem] leading-[2.625rem] font-bold text-[#2B2B2B] grow">
                    To. {recipient.name}
                </span>
            </div>
        </header>
    )
}

export default PostsHeader;