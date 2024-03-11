import { Header } from "@/app/components/Header";
import { UserCard } from "@/app/components/userCard"
import { NewPost } from "@/app/components/newPost"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-around">
        <UserCard />
        <NewPost />
      </div>
    </div>
  );
}
