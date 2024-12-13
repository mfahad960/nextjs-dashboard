import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Card, DonutChart, List, ListItem } from '@tremor/react';


export default async function PieChart() {
  const data = await fetchFilteredCustomers();
  const { 
    total_pending: total_pending, 
    total_paid: total_paid
  } = {
    total_pending: (data.rows[0].total_pending / 100),
    total_paid: (data.rows[0].total_paid / 100)
  };
  const total = total_pending + total_paid

  const chartData = {
    labels: ["Paid", "Unpaid"],
    datasets: [
      {
        data: [total_paid, total_pending],
        backgroundColor: [
          'rgba(10, 165, 78, 0.86)',
          'rgba(182, 47, 17, 0.86)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return(
    <div className="w-full md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Paid vs Unpaid Chart
        </h2>
        <div className="rounded-xl bg-gray-50 p-4">
            <div className="rounded-md bg-white p-4">
              <p className="rounded-md bg-blue-300 m-4 p-4">
                Paid: ${total_paid}
                <p>
                  {((total_paid/total)*100).toFixed(2)}%
                </p>
              </p>  
              <p className="rounded-md bg-red-300 m-4 p-4">
                Pending: ${total_pending}
                <p>
                  {((total_pending/total)*100).toFixed(2)}%
                </p>
              </p>
            </div>
        </div>
    </div>
  );
}