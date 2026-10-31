import { StatusChip } from '@/components/shared/status-chip'
import Link from 'next/link'
import { MessageSquare, Users, Clock  } from "lucide-react";
import type { Tone } from "@/lib/mock-data";

interface DiscussionCardProps {
    href: string;
    data: {
        title: string;
        lastMessage: string;
        starter: string;
        when: string;
        messages: number;
        people: number;
        status: string;
        tone: Tone;
    };
}

function DiscussionCard({href, data}: DiscussionCardProps) {
  return (
    <>
       <Link href={href} className="flex flex-col md:flex-row-reverse md:items-center gap-4 rounded-2xl bg-gray-50/50 px-6 py-6  md:px-8 md:py-9 transition hover:bg-gray-100">

            <StatusChip tone={data.tone}>{data.status}</StatusChip>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">                
                <b className="text-[16px]">{data.title}</b>
                <span className="truncate text-[13px] text-gray-500">{data.lastMessage}</span>
                <div className="flex  mbs-2 md:my-0 md:items-center md:flex-row gap-5 md:gap-4 font-light text-[0.75rem] md:text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>
                            {data.starter} · {data.when}
                        </span>
                    </span>
                    <span className="flex items-center gap-1">
                        <MessageSquare size={11} /> 
                        <span>
                            <span>پیام</span> {data.messages} 
                        </span>
                    </span>
                    <span className="flex items-center gap-1">
                        <Users size={11} /> 
                        <span>  
                            <span>نفر</span> {data.people} 
                        </span>    
                    </span>
                </div>
            </div>     
            
        </Link>
    </>
  )
}

export default DiscussionCard
