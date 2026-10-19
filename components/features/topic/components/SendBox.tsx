import { Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MassageProps {
    text: string;
    setText: (text: string) => void;
    handleSend?: (text: string) => void;
}



// text ontext send
export function SendBox({ text, setText , handleSend }: MassageProps) {

    return (
    <>   
          {/* shadow-lg  */}
          {/* border border-gray-200 */}
        <div className="
          sticky bottom-4 z-20 mt-auto w-full flex items-center gap-2.5 rounded-2xl 
           bg-white/95 p-3 
          backdrop-blur
        ">
          <Paperclip size={20} className="text-gray-400  cursor-not-allowed me-2" />
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.nativeEvent.isComposing && handleSend && handleSend(text.trim())}
            placeholder="...پیام خود را بنویسید"
            className="
            h-11 flex-1 text-right rounded-xl bg-gray-50 text-[13px] shadow-none outline-none
            "
          />
          <Button size="icon" aria-label="ارسال" onClick={handleSend} disabled={!text.trim()} className="size-11 cursor-pointer rounded-xl">
            <Send size={18} className="rtl:-scale-x-100 rotate-90 cursor-pointer" />
          </Button>
        </div>



    </>
  )
}

