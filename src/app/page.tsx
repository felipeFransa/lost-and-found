import { Header } from "@/app/components/Header";
import { UserCard } from "@/app/components/userCard"
export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <UserCard />
      </div>
    </div>
  );
}
