import Image from "next/image";
import profilePic from "../../../../media/Profile pic.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const AccountPage = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-14 pb-4">
                <div className="col-span-1">
                    <Image src={profilePic} alt="profile pic" width="250" height="2"></Image>
                </div>
                <div className="col-span-2">
                    <p className="font-sans font-bold text-3xl">Mei Yang</p>
                    <br></br>
                    <div className="grid grid-cols-3 gap-7">
                    <div>
                    <p className="font-sans font-bold text-lg">Bio</p>
                    <p>Age: 26</p>
                    <p>Nationality: Singaporean</p>
                    <p>Availability: Weekends</p>
                    </div>
                  
                    <div>
                    <p className="font-sans font-bold text-lg">Volunteering Hours:</p>
                    <p className="font-bold">70</p>
                    </div>

                    <div>
                        <Button variant="mine">Edit Profile</Button>
                    </div>
                
                </div>
                <div className="col-span-1">
                </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-5 px-15 py-2">
                <div className="max-w-md rounded overflow-hidden shadow-xl">
                    <div className="px-6 py-4">
                        <p className="font-sans font-bold text-base">Phone</p>
                        <p>81241234</p>
                        <br></br>
                        <p className="font-sans font-bold text-base">Email</p>
                        <p>meiyangyang@mail.com</p>

                    </div>

                </div>
                <div className="max-w-md rounded overflow-hidden shadow-xl">
                    <div className="px-6 py-4">
                        <p className="font-sans font-bold text-base">Availability</p>
                        <p>Weekdays, Weekends</p>
                        <br></br>
                        <p className="font-sans font-bold text-base">Commitment Level</p>
                        <p>Regular: Weekly</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-20 px-15 py-4">
                <div className="px-6 py-4">
                    <p className="font-sans font-bold text-base">Skills</p>
                    <p>Photography</p>
                    <p> Graphic Design </p>
                    <p> Driver's license </p>
                    <p> Photography </p>
                    <p> Has vehicle </p>
                </div>

                <div className="px-6 py-4">
                    <p className="font-sans font-bold text-base">Volunteering Interests</p>
                    <div className="flex flex-row gap-2 px-1 py-5">
                        <Badge variant="pending">Arts</Badge>
                        <Badge variant="pending">Sports</Badge>
                        <Badge variant="pending">Children</Badge>
                        </div>
                    </div>
                </div>
            
                <div className="grid grid-cols-2 gap-20 px-15 py-4">
                <div className="px-6 py-4">
                    <p className="font-sans font-bold text-base">Past Volunteering Experiences</p>
                    <p>Volunteered weekly at Children's Home (1 Dec - Ongoing) </p>
                    <p> - Conducted workshops for children </p>
                    <p> - Took photographs and uploaded marketing content  </p>
                   
                </div>

              <div></div>
            
            </div>    
        </>

    );
};

export default AccountPage;