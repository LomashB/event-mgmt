// src/components/ViewUsers.js

import React from "react";
import "./../assets/css/viewusers.css";

const users = [
    {
      id: 1,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Aarav',
      lastName: 'Patel',
      email: 'aarav.patel@example.com',
      gender: 'Male',
      phoneNo: '987-654-3210',
    },
    {
      id: 2,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Aditi',
      lastName: 'Sharma',
      email: 'aditi.sharma@example.com',
      gender: 'Female',
      phoneNo: '876-543-2109',
    },
    {
      id: 3,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Rohan',
      lastName: 'Mehta',
      email: 'rohan.mehta@example.com',
      gender: 'Male',
      phoneNo: '765-432-1098',
    },
    {
      id: 4,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Priya',
      lastName: 'Singh',
      email: 'priya.singh@example.com',
      gender: 'Female',
      phoneNo: '654-321-0987',
    },
    {
      id: 5,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Kabir',
      lastName: 'Gupta',
      email: 'kabir.gupta@example.com',
      gender: 'Male',
      phoneNo: '543-210-9876',
    },
    {
      id: 6,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Sanya',
      lastName: 'Reddy',
      email: 'sanya.reddy@example.com',
      gender: 'Female',
      phoneNo: '432-109-8765',
    },
    {
      id: 7,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Arjun',
      lastName: 'Nair',
      email: 'arjun.nair@example.com',
      gender: 'Male',
      phoneNo: '321-098-7654',
    },
    {
      id: 8,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Ananya',
      lastName: 'Pillai',
      email: 'ananya.pillai@example.com',
      gender: 'Female',
      phoneNo: '210-987-6543',
    },
    {
      id: 9,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Krishna',
      lastName: 'Rao',
      email: 'krishna.rao@example.com',
      gender: 'Male',
      phoneNo: '198-765-4321',
    },
    {
      id: 10,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Meera',
      lastName: 'Chopra',
      email: 'meera.chopra@example.com',
      gender: 'Female',
      phoneNo: '987-654-3212',
    },
    {
      id: 11,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Vikram',
      lastName: 'Kapoor',
      email: 'vikram.kapoor@example.com',
      gender: 'Male',
      phoneNo: '876-543-2108',
    },
    {
      id: 12,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Anjali',
      lastName: 'Joshi',
      email: 'anjali.joshi@example.com',
      gender: 'Female',
      phoneNo: '765-432-1097',
    },
    {
      id: 13,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Sahil',
      lastName: 'Deshmukh',
      email: 'sahil.deshmukh@example.com',
      gender: 'Male',
      phoneNo: '654-321-0985',
    },
    {
      id: 14,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Neha',
      lastName: 'Verma',
      email: 'neha.verma@example.com',
      gender: 'Female',
      phoneNo: '543-210-9874',
    },
    {
      id: 15,
      profilePic: 'https://via.placeholder.com/50',
      firstName: 'Raj',
      lastName: 'Yadav',
      email: 'raj.yadav@example.com',
      gender: 'Male',
      phoneNo: '432-109-8763',
    },
  ];
  

  

const ViewUsers = () => {
  return (
    <div className="view-users">
      <h2>View Users</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td><img src={user.profilePic} alt={`${user.firstName} ${user.lastName}`} /></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUsers;
