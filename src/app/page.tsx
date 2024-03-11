import { Header } from "@/app/components/Header";
import { UserCard } from "@/app/components/userCard"
import { NewPost } from "@/app/components/newPost"
import { Adverts } from "@/app/components/adverts"

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex justify-center bg-white">
        <UserCard />
        <NewPost />
        <Adverts />
      </div>
    </div>
  );
}
