import RankingStar from "@/public/assets/icons/ranking_star.svg?react";
import Crown from "@/public/assets/icons/crown.svg?react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { leaderboards } from "@/utils/db";

function LeaderboardUser({ img, name }: { img: string; name: string }) {
  return (
    <div className="flex flex-col items-center mb-7 text-black font-[FairyMuffin] text-3xl">
      <img className="rounded-full w-24 aspect-square" src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col gap-10 px-10 mt-10 overflow-scroll" style={{ height: "calc(100vh - 60px)" }}>
      <div className="grid grid-cols-3 mx-auto font-[Cubano] w-1/2 text-white items-end">
        <div>
          <LeaderboardUser img={leaderboards[1].avatar} name={leaderboards[1].name} />
          <div className="relative h-[65px] bg-[#E4DFD6] flex items-center justify-center">
            <div
              className="absolute bg-[#B7AEA4] -translate-y-full top-0"
              style={{
                // @ts-ignore
                "--p": "10px",
                width: "100%",
                height: "15px",
                clipPath: "polygon(var(--p) 0,100% 0,100% 100%,0 100%)",
              }}
            ></div>
            <p className="text-3xl">2</p>
          </div>
        </div>
        <div className="relative pt-6">
          <Crown className="absolute top-0 right-12" fontSize={50} />
          <LeaderboardUser img={leaderboards[0].avatar} name={leaderboards[0].name} />
          <div className="relative h-[100px] bg-[#FFD342] flex items-center justify-center">
            <div
              className="absolute bg-[#FFA500] -translate-y-full top-0"
              style={{
                // @ts-ignore
                "--p": "5px",
                width: "100%",
                height: "15px",
                clipPath: "polygon(var(--p) 0,calc(100% - var(--p)) 0,100% 100%,0 100%)",
              }}
            ></div>
            <p className="text-4xl">1</p>
          </div>
        </div>
        <div>
          <LeaderboardUser img={leaderboards[2].avatar} name={leaderboards[2].name} />
          <div className="relative h-[50px] bg-[#FB8401] flex items-center justify-center">
            <div
              className="absolute bg-[#A24406] -translate-y-full top-0"
              style={{
                // @ts-ignore
                "--p": "10px",
                width: "100%",
                height: "15px",
                clipPath: "polygon(0 0,calc(100% - var(--p)) 0,100% 100%,0 100%)",
              }}
            ></div>
            <p className="text-3xl">3</p>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-4xl font-[FairyMuffin] mb-10">Leaderboard</h2>
        <div className="relative gradient w-full rounded-2xl p-8">
          <RankingStar className="absolute -top-10 left-1/2 -translate-x-1/2" fontSize={80} />
          <div className="flex gap-4 mb-8">
            <Select>
              <div className="font-[Poppins] font-bold">
                <div className="gradient-2 p-1 w-fit rounded-full">
                  <SelectTrigger className="border-gradient w-[150px] rounded-full text-lg">
                    <SelectValue placeholder="7 Days" />
                  </SelectTrigger>
                </div>
                <SelectContent className="text-lg">
                  <SelectGroup>
                    <SelectItem value="apple" className="text-lg">
                      7 Days
                    </SelectItem>
                    <SelectItem value="banana" className="text-lg">
                      1 Month
                    </SelectItem>
                    <SelectItem value="blueberry" className="text-lg">
                      3 Months
                    </SelectItem>
                    <SelectItem value="grapes" className="text-lg">
                      All times
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </div>
            </Select>
            <Select>
              <div className="font-[Poppins] font-bold">
                <div className="gradient-2 p-1 w-fit rounded-full">
                  <SelectTrigger className="border-gradient w-fit rounded-full text-lg">
                    <SelectValue placeholder="Fan token prices" />
                  </SelectTrigger>
                </div>
                <SelectContent className="text-lg">
                  <SelectGroup>
                    <SelectItem value="apple" className="text-lg">
                      Subscriber
                    </SelectItem>
                    <SelectItem value="banana" className="text-lg">
                      Total Earning
                    </SelectItem>
                    <SelectItem value="blueberry" className="text-lg">
                      Fan Token Price
                    </SelectItem>
                    <SelectItem value="grapes" className="text-lg">
                      Contribution
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </div>
            </Select>
          </div>
          <div className="p-3 rounded-xl w-full">
            <Table>
              <TableHeader className="w-full gradient rounded-t-xl">
                <TableRow className="border-none !w-full">
                  <TableCell className="font-[FairyMuffin] text-xl text-center">Rank</TableCell>
                  <TableCell className="font-[FairyMuffin] text-xl text-center">Name</TableCell>
                  <TableCell className="font-[FairyMuffin] text-xl text-center">Subscribers</TableCell>
                  <TableCell className="font-[FairyMuffin] text-xl text-center">Total Earning</TableCell>
                  <TableCell className="font-[FairyMuffin] text-xl text-center">Fan Token Price</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="gradient-2 rounded-b-full border-collapse">
                {leaderboards.map((leaderboard, index) => (
                  <TableRow key={index} className="border-none">
                    <TableCell className="text-center font-[Poppins] text-xl">{index + 1}</TableCell>
                    <TableCell className="text-center font-[Poppins] text-xl font-bold">{leaderboard.name}</TableCell>
                    <TableCell className="text-center font-[Poppins] text-xl">{leaderboard.subscribers}</TableCell>
                    <TableCell className="text-center font-[Poppins] text-xl">{leaderboard.totalEarnings}</TableCell>
                    <TableCell className="text-center font-[Poppins] text-xl">{leaderboard.fanTokenPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
