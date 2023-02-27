import Image from "next/image";
import { useQuery } from "@apollo/client";
import styles from "@/styles/Home.module.css";

import { useBooks } from "@/api/books";
import { GET_BOOKS } from "@/api/graphql/books";
import { GetBooksResponse } from "@/types";

export default function Home() {
  // react-query
  const { data: books } = useBooks();
  // apollo-client
  const { loading, data } = useQuery<GetBooksResponse>(GET_BOOKS);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}
