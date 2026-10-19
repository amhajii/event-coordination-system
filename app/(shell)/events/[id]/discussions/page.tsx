import { DiscussionList } from "@/components/features/discussions/discussion-list";

export default async function DiscussionsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <DiscussionList eventId={id} />;
}
