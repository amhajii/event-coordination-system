import { TopicView} from "@/components/features/topic";

export default async function TopicPage({ params }: { params: Promise<{ id: string; topicId: string }> }) {
  const { id, topicId } = await params;
  return <TopicView eventId={id} topicId={topicId} />;
}
