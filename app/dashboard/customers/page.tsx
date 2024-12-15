import { Metadata } from "next";
import Table from "@/app/ui/customers/table";
import { Suspense } from "react";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page() {
    const query = '';
    return(
        <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search customers..." />
        </div>
            <Suspense fallback={<CustomersTableSkeleton/>}>
                <Table query={query} />
            </Suspense>
        </div>
    );
}