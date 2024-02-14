// pages/api/auth/logout.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle logout request
    handleLogout(req, res);
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function handleLogout(req: NextApiRequest, res: NextApiResponse) {
  // Example: logic to logout user (clear session, remove token, etc.)

  res.status(200).json({ message: 'User logged out successfully' });
}
