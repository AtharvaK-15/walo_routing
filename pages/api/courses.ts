// pages/api/courses.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle GET request
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    // Handle POST request
    handlePostRequest(req, res);
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  // Fetch courses from your platform (mocked data for example)
  const courses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    // Add more courses as needed
  ];

  res.status(200).json(courses);
}

function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  // Extract course data from request body
  const { title, description } = req.body;

  // Example: save course data to your platform
  // Replace this with your logic to save the course to your platform
  const newCourse = { id: 3, title, description };

  res.status(201).json(newCourse);
}
