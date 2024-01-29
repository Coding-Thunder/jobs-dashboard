import React from "react"
import "./Dashboard.css"
import { HiPlusCircle } from "react-icons/hi";
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { TableDataType } from "./Dashboard.types";
import { FaPhoneFlip } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  const dataSource = [{
    key: "1",
    job: {
      id: "1705017757",
      scheduled: true
    },
    sp: {
      name: null,
      number: null
    },
    schedule: {
      date: "12-Jan, 2024",
      time: "12:00 - 12:30",
      isNew: true
    },
    hub: {
      sector: "sector 33",
      rescheduleCount: 0
    },
    category: {
      name: "Salon at Home",
      count: 4
    },
    customerDetails: {
      name: "Palak",
      email: "madanpalak@gmail.com",
      phone: "8295727356"
    },
    customerAddress: {
      line1: "C163 regal garden",
      line2: "Regal garden sector 90 gurgaon Gurgaon"

    }
  },
  {
    key: "2",
    job: {
      id: "1704967332757",
      scheduled: true
    },
    sp: {
      name: null,
      number: null
    },
    schedule: {
      date: "12-Jan, 2024",
      time: "10:30 - 11:00",
      isNew: false
    },
    hub: {
      sector: "sector 82",
      rescheduleCount: 0
    },
    category: {
      name: "Salon at Home",
      count: 1
    },
    customerDetails: {
      name: "Sunaina",
      email: "Sghalot.gahlot@gmail.com",
      phone: "8750309527"
    },
    customerAddress: {
      line1: "Memory 303 seven lamp vatika sector 82 gurugram",
      line2: "Seven lamp Gurugram"

    }
  },
  {
    key: "3",
    job: {
      id: "1704859056",
      scheduled: false
    },
    sp: {
      name: "Jiya Bag",
      number: 8826655742
    },
    schedule: {
      date: "12-Jan, 2024",
      time: "10:00 - 10:30",
      isNew: false
    },
    hub: {
      sector: "sector 81",
      rescheduleCount: 1
    },
    category: {
      name: "Salon at Home",
      count: 15
    },
    customerDetails: {
      name: "Archana",
      email: "abc@gmail.com",
      phone: "8800108682"
    },
    customerAddress: {
      line1: "D - 144, Dlf Primus, Sector 81 Gurgaon Society Name : Dlf Primus",
      line2: "Dlf Primus, Sector 81 Gurgaon Gurugram"

    }
  }
  
]

  const columns: TableProps<TableDataType>['columns'] = [
    {
      title: 'Job id',
      dataIndex: 'job',
      key: 'job',
      render: ({ id, scheduled }: Record<string, any>) => {
        return (
          <div className="Flex Flex__Column Item__Center Justify__Center">
            <span className="Text__Cell__Blue">{id}</span>
            {scheduled ? (
              <div className="Blue__Wrapped Text__Cell__Small">Open</div>
            ) : (
              <div className="Blue__Wrapped Text__Cell__Small">Shedule</div>
            )}
          </div>
        )
      }
    },
    {
      title: 'SP Name',
      dataIndex: 'sp',
      key: 'sp',
      render: ({ name, number }: Record<string, any>) => {
        return (
          <div className="Flex Flex__Column Item__Center Justify__Center">
            {name && number &&
              <>
                <span>{name}</span>
                <span>{number}</span>
                <div className="Text__Cell__Blue"><FaPhoneFlip /></div>
              </>
            }
          </div>
        )
      }
    },
    {
      title: 'Scheduled Date & Time',
      dataIndex: 'schedule',
      key: 'schedule',
      render: ({ date, time, isNew }: Record<string, any>) => {
        return (
          <div className="Flex Flex__Column Item__Center Justify__Center">
            <span>{date}</span>
            <div className="Blue__Wrapped">{time}</div>
            <br />
            {isNew && <div className="Red__Wrapped">New100</div>}
          </div>
        )
      }
    },
    {
      title: 'HUB',
      dataIndex: 'hub',
      key: 'hub',
      render: ({ sector, rescheduleCount }: Record<string, any>) => {
        return (
          <div className="Flex Flex__Column Item__Center Justify__Center">
            <span>{sector}</span>
            <br />
            <div className="Flex Flex__Column Item__Center Justify__Center">
              <span className="Text__Bold">Reshedule</span>
              <span className="Text__Bold">Count</span>
            </div>
            <div>
              {`( ${rescheduleCount} )`}
            </div>
          </div>
        )
      }
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: ({ name, count }: Record<string, any>) => {
        return (
          <div className="Flex Flex__Column Item__Center Justify__Center">
            <div className="Green__Wrapped">{name}</div>
            <br />
            <div>
              {'(Total Count :'} <span className="Text__Bold">{count}</span>{')'}
            </div>
          </div>
        )
      }
    },

    {
      title: 'Customer details',
      dataIndex: 'customerDetails',
      key: 'customerDetails',
      render: ({ name, email, phone }: Record<string, any>) => {
        return (
          <div className="Flex Flex__Column Item__Center Justify__Center">
            <span>{name}</span>
            <span>{email}</span>
            <span>{phone}</span>
          </div>
        )
      }
    },
    {
      title: 'Customer Address',
      dataIndex: 'customerAddress',
      key: 'customerAddress',
      render: ({ line1, line2 }: Record<string, any>) => {
        return (
          <div className=" Flex Flex__Column Item__Center Justify__Center">
            <span className="Customer__Address">{line1},</span>
            <span className="Text__Bold Customer__Address">{line2}</span>
          </div>
        )
      }
    },

    {
      title: 'Action',
      dataIndex: 'key',
      render: (key) => {
        return (
          <button onClick={() => {
            navigate("/detail")
          }} className="Button__Default">
            Action
          </button>
        )
      }
    },

  ];

  return (
    <>
      <div className="Dashboard">
        <div className="Total__Jobs Flex Item__Center Space__Between">
          <span>Total Job : <span>40</span></span>
          <div className="Add__Jobs Flex Item__Center Justify__Center"> <HiPlusCircle /> <span>New Job</span></div>
        </div>
        <div className="Jobs__Table">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </>
  )
}



export default Dashboard