// pages/api/users/[userId]/enroll.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query;

    if (req.method === 'POST') {
        // Ensure userId is of type string
        const userIdString = Array.isArray(userId) ? userId[0] : userId || '';

        // Handle POST request
        handleEnrollRequest(userIdString, req.body, res);
    } else {
        // Handle unsupported methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function handleEnrollRequest(userId: string, courseData: any, res: NextApiResponse) {
  // Extract course data from request body
  const { courseId } = courseData;

  // Example: save enrollment data to your platform (mocked response for demonstration)
  const enrollment = { userId, courseId };

  res.status(201).json(enrollment);
}
