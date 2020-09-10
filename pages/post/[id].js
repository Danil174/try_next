import {useRouter} from 'next/router';
import {MainLayout} from "../../components/MainLayout";

export default function Post() {
  const router = useRouter();
  return (
    <MainLayout>
      <h2>Post {router.query.id}</h2>
    </MainLayout>
  );
}
