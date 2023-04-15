export const organizations: { id:number, name: string, members: number}[] = [
  {
    id: 1,
    name: "Arbitrum DAO",
    members: 300,
  },
  {
    id: 2,
    name: "Optimism DAO",
    members: 300,
  },
  {
    id: 3,
    name: "Uniswap DAO",
    members: 300,
  }
]

export const proposals: {
  id: number,
  title: string,
  status: string,
  date: string,
  proposer: string
}[] = [
  {
    id: 1,
    title: 'Allocate tokens to the DAO',
    status: 'Active',
    date: '2023-04-20',
    proposer: "0xB478AdF763A5bf5aD31F5137545Bf99D30c22009"
  },
  {
    id: 2,
    title: 'Sponsor ETHGlobal Tokyo',
    status: 'Active',
    date: '2023-04-20',
    proposer: "0xB478AdF763A5bf5aD31F5137545Bf99D30c22009"
  }
]