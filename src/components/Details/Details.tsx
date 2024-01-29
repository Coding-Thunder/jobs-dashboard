import React from "react"
import "./Details.css"
import { FaComment } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { Tabs } from 'antd';
import { MdDelete } from "react-icons/md";






const Details: React.FC = () => {

    const tabs = [
        {
            label: 'Customer Info',
            key: 1,
            children: <>
                <div className="Flex Space__Between ">
                    <div className="Job__Card">
                        <div className="Job_Card__Header">
                            Lead Info
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Name</span>
                            <span className="Field__Right">Palak</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Email</span>
                            <span className="Field__Right">madanpalak5@gmail.com</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Contact No</span>
                            <span className="Field__Right">8295727356</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Address</span>
                            <span className="Field__Right">C163 regal garden</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>City</span>
                            <span className="Field__Right">Gurgaon</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>HUB</span>
                            <span className="Field__Right">Sector 33</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Customer Suggestions</span>
                            <span className="Field__Right"></span>
                        </div>
                    </div>
                    <div className="Job__Card">
                        <div className="Job_Card__Header">
                            Other Details
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Coupon Applied</span>
                            <span className="Pink__Wrapped Flex Item__Center Justify__Center ">
                                <MdDelete /> <span>Remove Coupon</span>
                            </span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Source</span>
                            <span className="Field__Right">Website</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Shedule Date</span>
                            <span className="Field__Right">12-Jan, 2024</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Time Slot</span>
                            <span className="Field__Right Blue__Wrapped">12:00 - 12:30</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Category</span>
                            <span className="Field__Right">Salon at Home</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Job Count</span>
                            <span className="Field__Right">4</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Total Jobs in Salon at Home</span>
                            <span className="Field__Right">4</span>
                        </div>
                        <div className="Card__Info Flex Space__Between Item__Center">
                            <span>Assign to</span>
                            <span className="Field__Right"></span>
                        </div>
                    </div>
                    <div className="Job__Card2 Flex Flex__Column">
                        <div className="Card__Dual Flex Flex__Column">
                            <div className="Job_Card__Header">
                                Transaction Details
                            </div>
                            <div className="Card__Info Flex Space__Between Item__Center">
                                <span>Sub Total :</span>
                                <span className="Field__Right"><span style={{ textDecoration: " line-through" }}>₹1248 </span><span> ₹699 </span></span>
                            </div>
                            <div className="Card__Info Flex Space__Between Item__Center">
                                <span>Coupon Discount {"("} New 100 {")"} :</span>
                                <span className="Field__Right Field__Pink">-₹ 100</span>
                            </div>
                            <div className="Card__Info Flex Space__Between Item__Center">
                                <span>Safety And Hygiene Kit :</span>
                                <span className="Field__Right">₹ 49</span>
                            </div>
                            <div className="Card__Info Flex Space__Between Item__Center">
                                <span>Payable Amount {"("} Including GST {")"} :</span>
                                <span className="Field__Right">₹ 648</span>
                            </div>
                        </div>
                        <div className="Job__Card Card__Dual">
                            <div className="Card__Info Flex Space__Between Item__Center">
                                <span>Accepted Amount :</span>
                                <span className="Field__Right"><span >₹ 0</span></span>
                            </div>
                            <div className="Card__Info Flex Space__Between Item__Center">
                                <span>Outstanding :</span>
                                <span className="Field__Right"><span ></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>,
        },
        {
            label: 'Customer Details',
            key: 2,
            children: <div>Customer Details</div>,
        },
        {
            label: 'All Jobs (4)',
            key: 3,
            children: <div>All Jobs</div>,
        },
        {
            label: 'History',
            key: 4,
            children: <div>History</div>,
        },
        {
            label: 'Status History',
            key: 5,
            children: <div>Status History</div>,
        },
        {
            label: 'Cart History',
            key: 6,
            children: <div>Cart History</div>,
        },
    ]

    return (
        <div className="Details">
            <div className="Details__Id Total__Jobs Flex Item__Center Space__Between">
                <span>Job ID : <span>1705017757 </span> <span className="Blue__Wrapped">Shecule </span></span>
                <button className="Button__Default2">
                    Action
                </button>
            </div>
            {/* Header 2  */}
            <div className="Top__Header Flex Item__Center Justify__Center">
                <div className="Add__Comment Top__Header__Common Flex Item__Center Justify__Center">
                    <span className="Comment__Icon"><FaComment /></span>
                    <span>Add Comment</span>
                </div>
                <div className="Add__Penalty Top__Header__Common  Flex Item__Center Justify__Center">
                    <span className="Comment__Icon"><FaCreditCard /></span>
                    <span>Add Penalty</span>
                </div>
                <div className="Add__Note Top__Header__Common  Flex Item__Center Justify__Center">
                    <span className="Comment__Icon"><FaStickyNote /></span>
                    <span>Add Note</span>
                </div>
            </div>
            <div className="Job__Detail">
                <div className="Details__Jon__Number Total__Jobs Flex Item__Center Space__Between">
                    <span>Total Job : <span>4</span></span>
                </div>

                <div className="Job__Details__Bottom">
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={"top"}
                            style={{ height: 220 }}
                            items={tabs as any}
                        />
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Details