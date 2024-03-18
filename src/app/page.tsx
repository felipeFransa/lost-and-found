import { Header } from "@/app/components/Header";
import { UserCard } from "@/app/components/userCard"
import { NewPost } from "@/app/components/newPost"
import { Adverts } from "@/app/components/adverts"
import { Post } from "@/app/components/post"

export default function Home() {
  return (
    <div className="">
        <Header />
        <NewPost />
        <Post />
        <UserCard />
        <Adverts />
    </div>
  );
}
