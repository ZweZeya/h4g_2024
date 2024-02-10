import InboxNotification from "@/components/Inbox/InboxNotification";
import prisma from '../../../../lib/prisma'
import { getUser } from "@/components/Auth/User";

const InboxPage = async () => {
    const inbox = await prisma.inboxNotification.findMany({
        where: {
            userId: getUser()!.userId
        }
    });
    return (
        <div>
            <h1>Inbox</h1>
            {inbox && inbox.map((i: any, idx: number) =>
                <InboxNotification key={idx}>{i.message}</InboxNotification>
            )}
        </div>
    );
};

export default InboxPage;
