// pages/api/users/[userId]/courses/[courseId]/unenroll.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, courseId } = req.query;

  if (req.method === 'DELETE') {
    // Handle DELETE request
    handleUnenrollRequest(userId, courseId, res);
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function handleUnenrollRequest(userId: string, courseId: string, res: NextApiResponse) {
  // Example: logic to unenroll the user from the course
  // Replace this with your logic to remove the user's enrollment from your platform

  res.status(200).json({ message: `User ${userId} unenrolled from course ${courseId}` });
}
