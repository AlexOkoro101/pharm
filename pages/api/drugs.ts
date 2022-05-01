// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
    name: string,
    category: string[],
    gram: string,
    image: string,
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
      { id: 4590, name: 'Paracetamol', category: ['Headache', 'Anti-malaria', 'Pain Killer'], gram: '100mg', image: '/img/1.svg'},
      { id: 4591, name: 'Amoxicillin', category: ['Headache', 'Anti-malaria', 'Vitamins'], gram: '100mg', image: '/img/2.svg'},
      { id: 4592, name: 'Amarterm', category: ['Anti-malaria'], gram: '100mg', image: '/img/3.svg'},
      { id: 4593, name: 'Pro-Cold', category: ['Headache', 'Anti-malaria'], gram: '100mg', image: '/img/4.svg'},
      { id: 4594, name: 'Septrin', category: ['Headache', 'Vitamins'], gram: '100mg', image: '/img/5.svg'},
      { id: 4595, name: 'Panadol Extra', category: ['Headache', 'Pain Killer'], gram: '100mg', image: '/img/6.svg'},
    ])
}
