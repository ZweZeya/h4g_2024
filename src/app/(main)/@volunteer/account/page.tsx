const AccountPage = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-14 pb-4">
                <div className="col-span-1">
                </div>
                <div className="col-span-2">
                    <p className="font-sans font-bold text-3xl">My Name</p>
                    <br></br>
                    <p className="font-sans font-bold text-lg">Bio</p>
                    <p>Age: 26</p>
                    <p>Nationality: Singaporean</p>
                    <p>Availability: Weekends</p>
                </div>
                <div className="col-span-1">
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-14 py-2">
                <div className="max-w-sm rounded overflow-hidden shadow-xl">
                    <div className="px-6 py-4">
                        <p className="font-sans font-bold text-base">Phone</p>
                        <p>81241234</p>
                        <br></br>
                        <p className="font-sans font-bold text-base">Email</p>
                        <p>meiyangyang@mail.com</p>

                    </div>

                </div>
            </div>
        </>

    );
};

export default AccountPage;