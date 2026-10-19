import { Avatar } from "@/components/shared/avatar";
import { Heart } from "lucide-react";

interface MassageProps {
    id: string;
    author: string;
    text: string;
    when: string;
    likes: number;
    liked: boolean;
    topicId: string;
    onLike?: (id: string) => void;
}

export function Massage({ id , when , text , author , likes , liked , topicId, onLike }: MassageProps) {
    return (
    <>   
        {/* <div key={id} className=" my-5 mx-2 flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
                {when}
                <b className="text-[13px] text-gray-900">{author}</b>
                <Avatar name={author} size={28} />
            </div>
            <div className="rounded-2xl bg-slate-50 px-[18px] py-4 text-sm leading-8">{text}</div>
            <div className="flex gap-5 text-xs text-gray-400">
                <button type="button" onClick={() => onLike?.(id)} aria-pressed={!!liked} className={`flex gap-1.5 cursor-pointer px-1.5 py-1 rounded-sm ${liked ? "text-rose-500 bg-red-50"  : "hover:text-gray-600"}`}>
                <Heart size={15} className={liked ? "fill-current" : ""} />
                {likes}
                </button>
                <span className="px-1.5 py-1">
                    <span>پاسخ</span>
                </span>
            </div>
        </div> */}




        <div key={id} className=" my-5 mx-2 flex flex-col items-end gap-1.5">

            <div className="flex w-full  flex-row-reverse items-end gap-2">
                <Avatar name={author} size={35} />
                <div className="bg-slate-50 hover:bg-blue-100 w-full rounded-2xl rounded-se-2xl py-3 px-5 text-sm leading-8 flex flex-col gap-1">
                    <div className="name text-right text-[14px] font-bold">{author}</div>
                    <div className="text text-right">{text}</div>
                </div>
            </div>

            {/* <div className="flex items-center gap-2.5 text-xs text-gray-400">
                {when}
                <b className="text-[13px] text-gray-900">{author}</b>
                <Avatar name={author} size={28} />
            </div>


            <div className="rounded-2xl bg-slate-50 px-[18px] py-4 text-sm leading-8">{text}</div>
            <div className="flex gap-5 text-xs text-gray-400">
                <button type="button" onClick={() => onLike?.(id)} aria-pressed={!!liked} className={`flex gap-1.5 cursor-pointer px-1.5 py-1 rounded-sm ${liked ? "text-rose-500 bg-red-50"  : "hover:text-gray-600"}`}>
                <Heart size={15} className={liked ? "fill-current" : ""} />
                {likes}
                </button>
                <span className="px-1.5 py-1">
                    <span>پاسخ</span>
                </span>
            </div> */}


        </div>


    </>
  )
}

