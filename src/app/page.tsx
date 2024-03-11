import { Header } from "@/app/components/Header";
import { UserCard } from "@/app/components/userCard"
import { NewPost } from "@/app/components/newPost"
import { Adverts } from "@/app/components/adverts"
import { Post } from "@/app/components/post"

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center bg-white">
        <UserCard />
        <NewPost />
        <Adverts />
      </div>
      <div className="flex justify-center bg-white">
        <Post />
      </div>
    </div>
  );
}
