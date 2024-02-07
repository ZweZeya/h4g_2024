import InboxNotification from "@/components/Inbox/InboxNotification";
import prisma from '../../../../lib/prisma'

const InboxPage = async () => {
    const inbox = await prisma.inboxNotification.findMany({
        where: {
            userId: 10
        }
    });
    return (
        <div>
            <h1>Inbox</h1>
            {inbox && inbox.map(i =>
                <InboxNotification>{i.message}</InboxNotification>
            )}
        </div>
    );
};

export default InboxPage;
