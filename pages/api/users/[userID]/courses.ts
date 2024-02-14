// pages/api/users/[userId]/courses.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query;

    if (req.method === 'GET') {
        // Ensure userId is always of type string
        const userIdString = Array.isArray(userId) ? userId[0] : userId || '';
        handleGetCoursesRequest(userIdString, res);
    } else {
        // Handle unsupported methods
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function handleGetCoursesRequest(userId: string, res: NextApiResponse) {
  // Fetch courses enrolled by the user with userId from your platform (mocked data for example)
  const courses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    // Add more courses as needed
  ];

  res.status(200).json(courses);
}
