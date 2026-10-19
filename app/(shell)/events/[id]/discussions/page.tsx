import { Suspense } from "react";
import { DiscussionList } from "@/components/features/discussions/discussion-list";

async function DiscussionsContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <DiscussionList eventId={id} />;
}

export default function DiscussionsPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={null}>
      <DiscussionsContent params={params} />
    </Suspense>
  );
}
