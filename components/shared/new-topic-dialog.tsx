"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/lib/store";

export function NewTopicDialog({ eventId, open, onOpenChange }: { eventId: string; open: boolean; onOpenChange: (o: boolean) => void }) {
  const { addTopic } = useStore();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function submit() {
    if (!title.trim()) return;
    const id = addTopic(eventId, title, text);
    setTitle("");
    setText("");
    onOpenChange(false);
    router.push(`/events/${eventId}/discussions/${id}`);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent dir="rtl" className="rounded-2xl sm:max-w-md w-[85%] px-4 py-8 sm:p-6 lg:p-8   ">
       
        <DialogHeader className="text-start sm:text-start flex flex-col justify-end items-start mt-4">
          <DialogTitle>بحث جدید</DialogTitle>
          <DialogDescription>موضوعی را که می‌خواهید درباره‌اش گفتگو شود بنویسید.</DialogDescription>
        </DialogHeader>
       
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="topic-title">موضوع</Label>
            <Input id="topic-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="مثلاً: انتخاب سخنران اصلی" className="h-11 rounded-xl" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="topic-text">پیام اول (اختیاری)</Label>
            <Textarea id="topic-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="نظر یا پیشنهاد اولیه‌تان را بنویسید…" className="min-h-24 rounded-xl" />
          </div>
        </div>

        <DialogFooter className="flex flex-row gap-2 sm:justify-start bg-transparent mt-5">
          <Button onClick={submit} disabled={!title.trim()} className="h-11 rounded-xl px-6 cursor-pointer">شروع بحث</Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="h-11 rounded-xl cursor-pointer">انصراف</Button>
        </DialogFooter>

      </DialogContent>
      
    </Dialog>
  );
}
