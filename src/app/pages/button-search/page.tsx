import Form from "next/form";
import SearchButton from "./component/button-search";

export default function Page() {
    return (
        <Form action="/pages/search" className="flex flex-col gap-4 mx-auto w-[50%]">
            <input name="query" className="w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none" />
            <input name="name" className="w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none" />
            <input name="email" className="w-full h-[40px] bg-red-500 bg-[#4497ef0f] rounded border-[1px]  border-[#0010214a] outline-none" />
            <SearchButton />
        </Form>
    );
}