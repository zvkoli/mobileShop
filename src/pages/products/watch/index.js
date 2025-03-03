import Head from "next/head";
import { useEffect } from "react";
import ProductsList from "@/templates/ProductsList";
import { useDispatch } from "react-redux";
import { setApiData } from "@/features/apiDataSlice";

const Watch = ({ data , filteredData }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setApiData(data.productsData));
  }, [data, dispatch]);
  
  return (
    <>
      <Head>
        <title>ساعت هوشمند</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="w-full h-screen flex flex-col justify-start items-center bg-[#242424] pt-32 px-5">
        <div className="w-full h-auto py-10">
          <ProductsList data={filteredData} />
        </div>
      </div>
    </>
  );
}

export default Watch;

export const getStaticProps = async () => {
    const res = await fetch(process.env.BASE_URL);
    const data = await res.json();
    const filteredData = data.productsData.filter((item) => item.category === "watch");
  
    return {
      props: {
        data,
        filteredData,
      },
    };
};