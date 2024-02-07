import InboxNotification from "@/components/Inbox/InboxNotification";
import prisma from '../../lib/prisma'

const SmallNotifications = async () => {
    const inbox = await prisma.inboxNotification.findMany({
        where: {
            userId: 10
        }
    });
    return (
        <div>
            {inbox && inbox.map(i =>
                <InboxNotification>{i.message}</InboxNotification>
            )}
        </div>
    );
};

export default SmallNotifications