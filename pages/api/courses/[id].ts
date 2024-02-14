// pages/api/courses/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Fetch course details by ID from your platform
  const course = { id: id, title: `Course ${id}` }; // Example, replace with actual data

  res.status(200).json(course);
}
